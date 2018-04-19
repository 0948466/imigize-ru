<template>
    <router-link class="logo-imigize"
                 :to="{name: 'homepage'}"
                 :style="{width, height}"
    />
</template>

<script>
  export default {
    name: 'logo-imigize',
    props: {
      width: {
        default: '90px'
      },
      height: {
        default: '20px'
      }
    }
  }
</script>

<style scoped lang="scss">
    .logo-imigize {
        display: block;
        background: url("../assets/img/logoImigize/logo-imigize.png") no-repeat center;
        background-size: contain;
    }
</style>