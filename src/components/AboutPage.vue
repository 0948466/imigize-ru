<template>
    <div class="about">
        <top-about/>
        <header-about/>
        <technology/>
        <how-it-works/>
        <benefits/>
    </div>
</template>

<script>
  import TopAbout from '@/components/TopAbout'
  import HeaderAbout from '@/components/HeaderAbout'
  import Technology from '@/components/Technology'
  import HowItWorks from '@/components/HowItWorks'
  import Benefits from '@/components/Benefits'

  export default {
    name: 'AboutPage',
    components: {
      TopAbout,
      HeaderAbout,
      Technology,
      HowItWorks,
      Benefits
    }
  }
</script>