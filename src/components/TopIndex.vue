<template>
    <div class="top-index__wrapper" data-bg="1" id="imigize-landing-1">
        <div class="top-index">
            <h1 class="top-index__title">{{ $t('topIndex.title') }}</h1>
            <div class="top-index__content">
                <div class="top-index__text">
                    <i18n path="topIndex.text" tag="div">
                        <span class="top-index__span">{{ $t('topIndex.textSpan')}}</span>
                    </i18n>
                </div>
                <video-player class="top-index__video-player"/>
            </div>
        </div>
    </div>
</template>

<script>
  const VideoPlayer = () => import(/* webpackChunkName: "video-player" */ '@/components/VideoPlayer')

  export default {
    name: 'top-index',
    components: {
      VideoPlayer
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .top-index {

        position: relative;
        padding: 8.9em 4% 3em 4%;
        margin: 0 auto;
        max-width: 1628px;
        width: 100%;
        min-height: 550px;
        box-sizing: border-box;
        text-align: left;

        &__wrapper {
            background: url("../assets/img/topIndex/background-topIndex.jpg") no-repeat center;
            background-size: cover;
        }

        &__title {
            margin-bottom: 2.6em;
            max-width: 1200px;
            @include responsiveFont(55.48px, 27px);
            line-height: 1.43;
            letter-spacing: -0.02em;
            word-spacing: 0.25em;
            color: #fefefe;
            text-align: left;
            text-shadow: 0 0 16px rgba(65, 14, 18, 0.56);
        }

        &__content {
            display: flex;
            justify-content: space-between;
            @include w320-767 {
                flex-direction: column;
            }
        }

        &__text {
            display: inline-block;
            vertical-align: top;
            align-self: flex-end;
            margin-right: 5%;
            @include responsiveFont(23px, 20px);
            line-height: 1.7;
            color: #fff;
            text-align: left;
            &__span {
                white-space: nowrap;
            }
            @include w320-767 {
                margin-right: 0;
                margin-bottom: 1em;
                text-align: justify;
                &__span {
                    white-space: inherit;
                }
            }
        }

        &__video-player {
            display: inline-block;
            vertical-align: top;
            max-width: 318px;
            min-width: 220px;
            width: 59%;
            @include w320-767 {
                margin: 0 auto;
            }
        }
    }

</style>