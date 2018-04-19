<template>
    <gmap-map class="google-map"
              :center="center"
              :zoom="zoom"
    >
        <p>Директива v-html: <span v-html="'rawHtml'"></span></p>
        <gmap-info-window :options="infoOptions"
                          :position="infoWindowPos"
                          :opened="infoWinOpen"
                          @closeclick="infoWinOpen=false"
        >
        </gmap-info-window>
        <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                :icon="m.icon"
                @click="toggleInfoWindow(m,index)"
        ></gmap-marker>
    </gmap-map>
</template>

<script>
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCcfwqu8EjLELpd8UnBFZY8AIesx4jSXTY'
      // libraries: 'places' // If you need to use place input
    }
  })

  export default {
    props: {
      center: {
        type: Object,
        require: true
      },

      markers: {
        type: Array,
        require: true
      },

      zoom: {
        default: 11
      },
      showInfoWinOpen: {
        type: Boolean,
        default: false

      }
    },
    data: () => ({
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -50
        },
        maxWidth: 310,
        content: ''
      }
    }),

    mounted() {
      if (this.showInfoWinOpen) {
        for (let i = 0; i < this.markers.length; i++) {
          this.toggleInfoWindow(this.markers[i], i)
        }
      }
    },

    computed: {
      locale() {
        return this.$i18n.locale
      }
    },
    watch: {
      locale() {
        for (let i = 0; i < this.markers.length; i++) {
          this.updateInfoOptionsText(this.markers[i].shop)
        }
      }
    },

    methods: {
      createInfoText(shop) {
        return `
        <div class="infotext">
          <p class="infotext__caption">${this.$i18n.t(`googleMap.infoText.${shop}.title`)}</p>
          <div class="infotext__table">
              <p class="infotext__cell">${this.$i18n.t(`googleMap.infoText.address`)}:</p>
              <p class="infotext__cell">
                  ${this.$i18n.t(`googleMap.infoText.${shop}.city`)}<br>
                  ${this.$i18n.t(`googleMap.infoText.${shop}.address`)}
              </p>
              <p class="infotext__cell">${this.$i18n.t(`googleMap.infoText.hours`)}:</p>
              <p class="infotext__cell">${this.$i18n.t(`googleMap.infoText.${shop}.hours`)}</p>
              <p class="infotext__cell">${this.$i18n.t(`googleMap.infoText.phone`)}:</p>
              <p class="infotext__cell">${this.$i18n.t(`googleMap.infoText.${shop}.phone`)}</p>
          </div>
        </div>`
      },
      toggleInfoWindow(marker, idx) {
        this.infoWindowPos = marker.position
        this.updateInfoOptionsText(marker.shop)

        // check if its the same marker that was selected if yes toggle
        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen
        } else {
          this.infoWinOpen = true
          this.currentMidx = idx
        }
      },

      updateInfoOptionsText(shop) {
        this.infoOptions.content = this.createInfoText(shop)
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .google-map {
        width: 100%;
        height: 553px;
        @include w320-767 {
            height: 450px;
        }
    }
</style>

<style lang="scss">
    @import "../scss/mixins.scss";

    $ns: '.infotext';

    #{$ns} {
        padding: 0.5em 0 0.5em 0.5em;
        max-width: 100vw;
        width: 100%;
        box-sizing: border-box;
        font-family: Open Sans, sans-serif;
        line-height: 1.35;
        overflow: hidden;
    }

    #{$ns}__caption {
        margin-bottom: 0.6em;
        font-size: 14px;
        font-weight: 600;
        color: #000;
    }

    #{$ns}__table {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: -0.02em;
        color: $landing3a3535;
    }

    #{$ns}__cell {
        width: 60%;
        &:nth-child(odd) {
            width: 40%;
        }
    }
</style>