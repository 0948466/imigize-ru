<template>
    <google-map :center="center"
                :markers="markers"
                :zoom="13"
                :showInfoWinOpen="showInfoWinOpen"
    />
</template>

<script>
  import GoogleMap from '@/components/GoogleMap'

  export default {
    name: 'GoogleMapContacts',
    data: () => ({
      center: {
        lat: 59.903629064207294,
        lng: 30.3246895
      },
      markers: [
        {
          position: {
            lat: 59.903629064207294,
            lng: 30.3246895
          },
          icon: {
            url: require('../assets/img/googleMap/placemark-imigize.png')
          },
          shop: 'imigize'
        }]
    }),
    computed: {
      showInfoWinOpen() {
        return (document.documentElement.clientWidth > 500)
      }
    },
    components: {
      GoogleMap
    }
  }
</script>