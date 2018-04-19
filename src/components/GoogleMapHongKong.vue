<template>
    <google-map :center="center"
                :markers="markers"
                :zoom="14"
                :showInfoWinOpen="true"
    />
</template>

<script>
  import GoogleMap from '@/components/GoogleMap'

  export default {
    name: 'GoogleMapContacts',
    data: () => ({
      center: {
        lat: 22.2790335,
        lng: 114.1743165
      },
      markers: [
        {
          position: {
            lat: 22.2790335,
            lng: 114.1743165
          },
          icon: {
            url: require('../assets/img/googleMap/placemark-imigize.png')
          },
          shop: 'hongKong'
        }]
    }),
    components: {
      GoogleMap
    }
  }
</script>