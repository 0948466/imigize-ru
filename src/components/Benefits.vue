<template>
    <div class="benefits" id="imigize-landing-4">
        <div class="benefits__header">
            {{ $t('benefits.title')}}
        </div>
        <div class="benefits__middle">
            {{ $t('benefits.text')}}
        </div>
        <div class="benefits__bottom">
            <div class="benefits__bottom-col benefits__bottom-col__first">
                <div class="benefits__bottom-col-header">
                    1
                </div>
                <div class="benefits__bottom-col-text">
                    {{ $t('benefits.col1')}}
                </div>
            </div>
            <div class="benefits__bottom-col benefits__bottom-col__second">
                <div class="benefits__bottom-col-header">
                    789064
                </div>
                <div class="benefits__bottom-col-text">
                    {{ $t('benefits.col2')}}
                </div>
            </div>
            <div class="benefits__bottom-col benefits__bottom-col__third">
                <div class="benefits__bottom-col-header">
                    100%
                </div>
                <div class="benefits__bottom-col-text">
                    {{ $t('benefits.col3')}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Benefits'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .benefits {
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding-top: 90px;
        height: 610px;
        font-weight: 300;
        text-align: center;
        color: white;
        background: #535c63 url("../assets/img/benefits/background.jpg");
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;

        &__header {
            font-size: 50px;
            line-height: 60px;
        }

        &__middle {
            max-width: 650px;
            margin: 30px auto 0 auto;
            font-size: 18px;
            line-height: 28px;
        }

        &__bottom {
            position: absolute;
            top: 495px;
            left: 50%;
        }

        &__bottom-col {
            position: absolute;
            top: 0;
        }

        &__bottom-col-header {
            text-align: center;
            font-size: 26px;
            font-weight: bold;
            line-height: 28px;
            height: 40px;
        }

        &__bottom-col__first {
            width: 165px;
            .benefits__bottom-col-header {
                font-size: 38px;
                line-height: 28px;
            }
        }

        &__bottom-col__second {
            width: 200px;
            left: 50%;
            margin-left: -100px;
        }

        &__bottom-col__third {
            width: 180px;
        }

        &__bottom-col-text {
            margin: 10px auto;
            font-size: 15px;
            line-height: 24px;
        }
        @media only screen and (min-device-width: 951px) and (max-device-width: 1630px) {
            &__bottom-col__first {
                left: -460px;
            }

            &__bottom-col__third {
                left: 293px;
            }
        }

        @media only screen and (min-device-width: 1631px) {
            &__bottom-col {
                top: 20px;
            }

            &__bottom-col__first {
                left: -480px;
            }

            &__bottom-col__third {
                left: 311px;
            }
        }

        @media only screen and (max-device-width: 950px) {
            &__bottom-col__first,
            &__bottom-col__third {
                display: none;
            }
        }

        @media only screen and (max-device-width: 760px) {
            & {
                padding: 10% 5% 0 5%;
                width: 90%;
                min-height: inherit;
            }
            &__header {
                font-size: 32px;
                line-height: 36px;
            }
        }
    }
</style>