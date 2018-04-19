<template>
    <div class="homepage">
        <top-index/>
        <description/>
        <how-work/>
        <how-to-connect/>
        <google-map-homepage/>
        <mobile/>
    </div>
</template>

<script>
  import TopIndex from '@/components/TopIndex'
  import Description from '@/components/Description'
  import HowWork from '@/components/HowWork'
  import HowToConnect from '@/components/HowToConnect'
  import GoogleMapHomepage from '@/components/GoogleMapHomepage'
  import Mobile from '@/components/Mobile'

  export default {
    name: 'homepage',
    components: {
      TopIndex,
      Description,
      HowWork,
      HowToConnect,
      GoogleMapHomepage,
      Mobile
    }
  }
</script>