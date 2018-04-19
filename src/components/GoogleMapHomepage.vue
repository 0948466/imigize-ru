<template>
    <google-map :center="center"
                :markers="markers"
    />
</template>

<script>
  import GoogleMap from '@/components/GoogleMap'

  export default {
    name: 'GoogleMapHomepage',
    data: () => ({
      center: {
        lat: 59.98246022556572,
        lng: 30.33614884395406
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
        },
        {
          position: {lat: 59.97322106413695, lng: 30.259570499999942},
          icon: {
            url: require('../assets/img/googleMap/placemark-runlab.png')
          },
          shop: 'runlab'
        },
        {
          position: {lat: 60.04148056403172, lng: 30.318931499999984},
          icon: {
            url: require('../assets/img/googleMap/placemark-wildberries.png')
          },
          shop: 'wildberries'
        }]
    }),
    components: {
      GoogleMap
    }
  }
</script>