<template>
    <div class="top-about" data-bg="1" id="imigize-landing-1">
        <div class="top-about__title">
            {{ $t('topAbout.title')}}
        </div>
        <div class="top-about__text">
            {{ $t('topAbout.text')}}
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TopAbout'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .top-about {
        position: relative;
        font-weight: 300;
        color: #fff;
        width: 100%;
        height: 300px;
        box-sizing: border-box;
        text-align: center;
        margin: 0 auto;
        background: #0c3a6b url("../assets/img/topAbout/top-about-background.jpg") no-repeat center;

        &__title {
            padding-top: 93px;
            margin-bottom: 10px;
            font-size: 78px;
            font-weight: 300;
            font-style: normal;
            font-stretch: normal;
            line-height: 56px;
            text-transform: uppercase;
        }

        &__text {
            font-size: 30px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 56px;
        }

        @media only screen and (max-device-width: 734px) {
            &__title {
                font-size: 53px;
            }

            &__text {
                font-size: 21px;
                line-height: 22px;
            }
        }

        @media only screen and (max-device-width: 400px) {
            &__title {
                font-size: 41px;
            }
        }
    }
</style>