<template>
    <div class="how-it-works" id="imigize-landing-3" data-bg="1">
        <div class="how-it-works__bg" :class="`how-it-works__bg_${dataNum}`"></div>
        <div class="how-it-works__inner">
            <div class="how-it-works__top">
                <div class="how-it-works__center-big">
                    {{ $t('howItWorks.title')}}
                </div>
                <div class="how-it-works__center-small">
                    {{ $t('howItWorks.titleBottom')}}
                </div>
            </div>

            <div class="how-it-works__middle">
                <div class="how-it-works__col">
                    <div class="how-it-works__col-inner"
                         :class="(dataNum === 1) ? 'how-it-works__col-inner__selected' : ''"
                         @click="dataNum = 1">
                        <div class="how-it-works__col-icon how-it-works__col-icon_icon1"></div>
                        <div class="how-it-works__col-text how-it-works__col-text1">
                            {{ $t('howItWorks.col1')}}
                        </div>
                    </div>
                </div>
                <div class="how-it-works__col">
                    <div class="how-it-works__col-inner"
                         :class="(dataNum === 2) ? 'how-it-works__col-inner__selected' : ''"
                         @click="dataNum = 2">
                        <div class="how-it-works__col-icon how-it-works__col-icon_icon2"></div>
                        <div class="how-it-works__col-text">
                            {{ $t('howItWorks.col2')}}
                        </div>
                    </div>
                </div>
                <div class="how-it-works__col">
                    <div class="how-it-works__col-inner"
                         :class="(dataNum === 3) ? 'how-it-works__col-inner__selected' : ''"
                         @click="dataNum = 3">
                        <div class="how-it-works__col-icon how-it-works__col-icon_icon3"></div>
                        <div class="how-it-works__col-text">
                            {{ $t('howItWorks.col3')}}
                        </div>
                    </div>
                </div>
            </div>

            <div class="how-it-works__bottom-right">
                <div v-if="dataNum === 1" class="how-it-works__text-block">
                    <div class="how-it-works__bottom-right-subheader">
                        {{ $t('howItWorks.title1')}}
                    </div>
                    <div class="how-it-works__bottom-right-text">
                        {{ $t('howItWorks.text1a')}}
                    </div>
                    <div class="how-it-works__bottom-right-text">
                        {{ $t('howItWorks.text1b')}}
                    </div>
                </div>

                <div v-if="dataNum === 2" class="how-it-works__text-block">
                    <div class="how-it-works__bottom-right-subheader">
                        {{ $t('howItWorks.title2')}}
                    </div>
                    <div class="how-it-works__bottom-right-text">
                        {{ $t('howItWorks.text2')}}
                    </div>
                </div>

                <div v-if="dataNum === 3" class="how-it-works__text-block">
                    <div class="how-it-works__bottom-right-subheader">
                        {{ $t('howItWorks.title3')}}

                    </div>
                    <div class="how-it-works__bottom-right-text">
                        {{ $t('howItWorks.text3')}}
                    </div>
                </div>

                <div v-if="dataNum < 3"
                     @click="dataNum++"
                     class="how-it-works__arrow">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HowItWorks',
    data: () => ({
      dataNum: 1
    }),
    mounted() {
      setTimeout(() => {
        this.preloadImg()
      }, 0)
    },
    methods: {
      preloadImg() {
        const urlImages = ['2.png', '3.png']

        for (let url of urlImages) {
          const image = new Image()
          image.src = require(`../assets/img/howItWorks/${url}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .how-it-works {
        border-top: 1px solid #fff;
        background-color: #d9e2e8;
        position: relative;
        overflow: hidden;
        color: #444;

        &__inner {
            min-height: 850px;
            font-weight: 300;
            position: relative;
            z-index: 1;

            width: 100%;
            margin: 0 auto;
            padding-top: 85px;
            box-sizing: border-box;
        }

        &__bg {
            position: absolute;
            left: 56%;
            top: 460px;
            margin-left: -1000px;
            z-index: 0;
            background-repeat: no-repeat;
            background-position: top right;
            height: 1000px;
            width: 1050px;
            &_1 {
                background-image: url("../assets/img/howItWorks/1.png");
            }
            &_2 {
                background-image: url("../assets/img/howItWorks/2.png");
            }
            &_3 {
                background-image: url("../assets/img/howItWorks/3.png");
            }

            @include w320-767 {
                display: none;
            }
        }

        &__text-block {
            padding-right: 10px;
        }

        &__top {
            text-align: center;
        }

        &__center-small {
            font-size: 18px;
            line-height: 28px;
            width: 650px;
            margin: auto;
            margin-top: 25px;
        }

        &__center-big {
            font-size: 50px;
            line-height: 60px;
            color: #444;
        }

        &__middle {
            margin: 75px 30px 0 30px;
            text-align: center;
        }

        &__col {
            max-width: 346px;
            min-width: 300px;
            display: inline-block;
            vertical-align: top;
        }

        &__col-inner {
            padding: 15px 15px 15px 15px;
            cursor: pointer;
            height: 50px;
            border: 2px solid transparent;
            position: relative;
            user-select: none;
        }

        &__col-inner__selected {
            background-color: #BED5E2;
            border-color: white;
            cursor: default;
            border-radius: 50px;
        }

        &__col-icon {
            display: block;
            width: 50px;
            height: 50px;
            position: absolute;
            left: 15px;
            top: 50%;
            margin: -25px 0 0 0;
            background-color: white;
            border-color: transparent;
            vertical-align: top;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
            &_icon1 {
                background-image: url("../assets/img/howItWorks/button_icon_1.png");
            }
            &_icon2 {
                background-image: url("../assets/img/howItWorks/button_icon_2.png");
            }
            &_icon3 {
                background-image: url("../assets/img/howItWorks/button_icon_3.png");
            }
        }

        &__col-text {
            display: block;
            margin-left: 65px;
            font-size: 14px;
            line-height: 22px;
            color: #3e3e3e;
            padding-top: 2px;
        }

        &__col-text1 {
            line-height: 50px;
        }

        &__arrow {
            position: absolute;
            right: 0;
            top: 64px;
            width: 43px;
            height: 82px;
            background-image: url("../assets/img/howItWorks/arrow.png");
            background-position: 0 0;
            background-repeat: no-repeat;
            cursor: pointer;
        }

        &__bottom-right-subheader {
            font-size: 30px;
            line-height: 36px;
        }

        &__bottom-right-text {
            margin-top: 20px;
            font-size: 14px;
            line-height: 24px;
        }

        &__button-reg {
            font-weight: 400;
            line-height: 50px;
            font-size: 14px;
            color: #fffefe;
            height: 50px;
            padding: 0 50px;
            background-color: #04cce5;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 25px;
            display: inline-block;
        }

        @media only screen and (max-device-width: 704px) {
            & {
                min-height: inherit;
                padding: 5%;
            }
            &__text-block {
                max-width: 500px;
                margin: 0 auto;
                padding: 6%;
            }
            &__center-small {
                margin-bottom: 15px;
                width: 100%;
            }
        }

        @media only screen and (min-device-width: 705px) {
            &__bottom-right {
                position: absolute;
                left: 50%;
                top: 500px;
                margin-left: 7%;
                width: 43%;
                max-width: 345px;
                padding-right: 105px;
            }

            &__bg_1 {
                background-position: 400px -120px;
            }

            &__bg_2 {
                background-position: 420px -100px;
            }

            &__bg_3 {
                background-position: 430px -100px;
            }
        }

        @media only screen and (max-device-width: 1100px) {
            &__arrow {
                visibility: hidden;
            }
        }

        @media only screen and (max-device-width: 900px) {
            &__arrow {
                visibility: hidden;
            }
        }

        @media only screen and (max-device-width: 760px) {
            &__center-big {
                font-size: 32px;
                line-height: 36px;
            }
            &__middle {
                margin: 0;
            }

            &__col {
                width: 100%;
            }
        }
    }
</style>