<template>
    <div id="app">
        <div class="content">
            <main-header/>
            <router-view/>
            <main-footer/>
            <div class="content__overlay"></div>
        </div>
    </div>
</template>

<script>
  import 'promise-polyfill/src/polyfill'
  import MainHeader from '@/components/MainHeader'
  import MainFooter from '@/components/MainFooter'

  require('es6-object-assign').polyfill()

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>

<style lang="scss">
    @import "scss/style";

    #app {
        font-family: 'Open Sans', sans-serif;
        background-color: #f0f0f0;
        @include responsiveFont(18px, 8px);
    }

    .content {
        margin: 0 auto;
        max-width: 1690px;
        width: 100%;

        &__overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(39,53,66,.29);
            z-index: 1;
        }
    }
</style>
