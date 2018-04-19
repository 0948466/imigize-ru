<template>
    <div class="technology" id="imigize-landing-2">
        <div v-if="dataNum > 1"
             @click="dataNum--"
             class="technology__arrow technology__arrow__left"></div>
        <div v-if="dataNum < 3"
             @click="dataNum++"
             class="technology__arrow technology__arrow__right"></div>
        <div class="technology__inner" :data-bg="dataNum">
            <div class="technology__left">
                <div v-if="dataNum === 1" class="technology__text-block">
                    <div class="technology__title">
                        {{ $t('technology.title1')}}
                    </div>
                    <i18n path="technology.text1a" class="technology__text technology__text-icon" tag="div">
                        <div class="technology__text__span">{{ $t('technology.text1aSpan')}}</div>
                    </i18n>

                    <div class="technology__text technology__text-icon">
                        {{ $t('technology.text1b')}}
                    </div>

                    <div class="technology__text technology__text-icon">
                        {{ $t('technology.text1c')}}
                    </div>
                    <div class="technology__mobile">
                        <div class="technology__mobile-item">
                            <a :href="$url.mobileGoogle" class="technology__mobile-google" target="_blank"></a>
                            <a :href="$url.mobileApple" class="technology__mobile-apple" target="_blank"></a>
                        </div>
                        <div class="technology__mobile-text">
                            {{ $t('technology.mobileText')}}
                            <div class="technology__mobile-span"> ImiScan
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="dataNum === 2" class="technology__text-block">
                    <div class="technology__title">
                        {{ $t('technology.title2')}}
                    </div>
                    <div class="technology__text">
                        {{ $t('technology.text2a')}}
                    </div>
                    <div class="technology__text">
                        {{ $t('technology.text2b')}}
                    </div>
                </div>
                <div v-if="dataNum === 3" class="technology__text-block">
                    <div class="technology__title">
                        {{ $t('technology.title3')}}
                    </div>
                    <div class="technology__text">
                        {{ $t('technology.text3a')}}
                    </div>
                    <div class="technology__text">
                        {{ $t('technology.text3b')}}
                    </div>
                </div>
            </div>
            <div class="technology__bottom">
                <div class="technology__col"
                     :class="(dataNum === 1) ? 'technology__col__selected' : ''"
                     @click="dataNum = 1">
                    <div class="technology__col-inner">
                        <div class="technology__col-number">1</div>
                        <div class="technology__col-text">
                            {{ $t('technology.col1')}}
                        </div>
                    </div>
                </div>
                <div class="technology__col"
                     :class="(dataNum === 2) ? 'technology__col__selected' : ''"
                     @click="dataNum = 2">
                    <div class="technology__col-inner">
                        <div class="technology__col-number">2</div>
                        <div class="technology__col-text">
                            {{ $t('technology.col2')}}
                        </div>
                    </div>
                </div>
                <div class="technology__col"
                     :class="(dataNum === 3) ? 'technology__col__selected' : ''"
                     @click="dataNum = 3">
                    <div class="technology__col-inner">
                        <div class="technology__col-number">3</div>
                        <div class="technology__col-text">
                            {{ $t('technology.col3')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Technology',
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
        const urlImages = ['bg2.png', 'bg3.png']

        for (let url of urlImages) {
          const image = new Image()
          image.src = require(`../assets/img/technology/${url}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins.scss";

    .technology {
        position: relative;
        background-color: #e9eeef;

        &__inner {
            min-height: 700px;
            font-weight: 300;
            position: relative;
            background-repeat: no-repeat;

            width: 1070px;
            margin: 0 auto;

            &[data-bg="1"] {
                background-position: 480px 100px;
                background-image: url("../assets/img/technology/bg1.png");
            }

            &[data-bg="2"] {
                background-position: 520px -10px;
                background-image: url("../assets/img/technology/bg2.png");
            }

            &[data-bg="3"] {
                background-position: 170px top;
                background-image: url("../assets/img/technology/bg3.png");
            }
        }

        &__left {
            max-width: 461px;
            padding-top: 70px;
            padding-left: 40px;
        }

        &__title {
            font-size: 50px;
            line-height: 60px;
            margin: 0 0 25px 0;
            color: #3a3535;
            margin-left: -3px;
        }

        &__text {
            margin-bottom: 20px;
            max-width: 420px;
            font-size: 15px;
            line-height: 20px;
            color: #3e3e3e;
            &__span {
                display: inline;
                white-space: nowrap;
            }
        }

        &__text-block[data-num="1"] &__text:nth-child(3) {
            margin-bottom: 20px;
        }

        &__text-icon {
            position: relative;
            padding-left: 49px;
            box-sizing: border-box;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                margin-left: 15px;
            }
        }

        &__text-icon:nth-of-type(2) {
            max-width: 400px;
            width: 100%;
            &::before {
                content: '1';
            }
        }

        &__text-icon:nth-of-type(3) {
            width: 320px;
            &::before {
                content: '2';
            }
        }

        &__text-icon:nth-of-type(4) {
            width: 290px;
            &::before {
                content: '3';
            }
        }

        &__mobile {
            margin-top: 30px;
            max-width: 500px;
        }

        &__mobile-item {
            max-width: 332px;
            width: 100%;
            text-align: center;
        }

        &__mobile-apple,
        &__mobile-google {
            margin-bottom: 10px;
            display: inline-block;
            vertical-align: top;
            width: 161px;
            height: 54px;
            cursor: pointer;
        }

        &__mobile-google {
            margin-bottom: 1em;
            background: url("../assets/img/icon/google-icon.png") center no-repeat;
            background-size: 80%;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.22);
            border-radius: 5px;
        }

        &__mobile-apple {
            background: url("../assets/img/icon/icon-app-store.png") center no-repeat;
            background-size: 80%;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.22);
            border-radius: 5px;
        }

        &__mobile-text {
            display: inline;
            padding-left: 48px;
            font-size: 15px;
            font-weight: 300;
        }

        &__mobile-span {
            font-weight: 600;
            display: inline;
            font-size: 15px;
        }

        &__bottom {
            text-align: center;
            position: absolute;
            bottom: 25px;
            max-width: 1070px;
            width: 100%;
        }

        &__col {
            display: inline-block;
            vertical-align: top;
            max-width: 340px;
            min-width: 300px;
            &:nth-child(2) {
                max-width: 370px;
            }
        }

        &__col-inner {
            padding: 23px 15px;
            position: relative;
            border: 2px solid transparent;
            border-radius: 50px;
            cursor: pointer;
            user-select: none;

            .technology__col__selected & {
                border-color: #04cce5;
                background-color: rgba(110, 115, 117, 0.1);
                cursor: default;
            }
        }

        &__col-number {
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
            position: absolute;
            left: 25px;
            top: 22px;
            color: #04cce5;
        }

        &__col-text {
            padding-right: 5px;
            font-size: 13px;
            line-height: 20px;
            margin-left: 35px;
            min-height: 35px;
            color: #3e3e3e;
        }

        &__arrow {
            background-position: center;
            background-repeat: no-repeat;
            width: 19px;
            height: 55px;
            cursor: pointer;
            position: absolute;
            top: 290px;
            z-index: 1;
        }

        &__arrow__left {
            left: 30px;
            background-image: url("../assets/img/technology/arrow_left.png");
        }

        &__arrow__right {
            right: 30px;
            background-image: url("../assets/img/technology/arrow_right.png");
        }

        @media only screen and (max-device-width: 1150px) {
            &__arrow {
                display: none;
            }
        }

        @media only screen and (max-device-width: 1050px) {
            &__inner {
                width: 100%;
                min-height: 780px;
                &[data-bg="1"] {
                    background-position: 515px 180px;
                }
            }
            &__bottom {
                bottom: 7px;
            }
        }

        @media only screen and (max-device-width: 750px) {
            & {
                min-height: 850px;
            }
            &__left {
                padding: 6%;
            }
        }

        @media only screen and (max-device-width: 560px) {
            & {
                min-height: inherit;
            }
            &__bottom {
                width: 360px;
                box-sizing: border-box;
                left: 50%;
                margin-left: -180px;
                top: 50px;
                text-align: left;
            }
            &__title {
                font-size: 32px;
                line-height: 40px;
            }
            &__text-block {
                margin-top: 300px;
            }
            &__col {
                width: 100%;
                box-sizing: border-box;
                max-width: 360px;
            }
        }

        @media only screen and (max-device-width: 380px) {
            &__title {
                font-size: 30px;
            }

            &__text-icon {
                max-width: 250px;
                width: 100%;
            }

            &__mobile-item {
                text-align: center;
            }

            &__mobile-apple {
                margin-right: 0;
            }

            &__text-block {
                margin-top: 260px;
            }

            &__bottom {
                width: 316px;
                left: 50%;
                margin-left: -158px;
            }

            &__col-inner {
                padding: 16px 10px;
            }

            &__col-number {
                left: 11px;
                top: 20px;
            }

            &__col-text {
                padding-right: 2px;
                margin-left: 28px;
                font-size: 12px;
                line-height: 18px;
            }
        }
    }
</style>