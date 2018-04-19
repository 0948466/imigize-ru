<template>
    <div class="how-to-connect__wrapper" id="imigize-landing-howToConnect">
        <div class="how-to-connect">
            <div class="how-to-connect__title">
                {{ $t('howToConnect.title') }}
            </div>
            <div class="how-to-connect__text">
                {{ $t('howToConnect.text') }}
            </div>

            <div class="how-to-connect__shop-wrapper">
                <div class="how-to-connect__left">
                    <div class="how-to-connect__shop-img how-to-connect__shop-img_imigize"></div>
                </div>
                <div class="how-to-connect__right">
                    <div class="how-to-connect__shop">
                        <div class="how-to-connect__shop-logo how-to-connect__shop-logo_imigize"></div>
                        <div class="how-to-connect__shop-title how-to-connect__shop-title_imigize">
                            {{ $t('howToConnect.shop1.title') }}
                        </div>
                        <div class="how-to-connect__shop-address">
                            {{ $t('howToConnect.shop1.city') }}<br>
                            {{ $t('howToConnect.shop1.metro') }}<br>
                            {{ $t('howToConnect.shop1.address') }}<br>
                            +7 921 962 78 44<br>
                            {{ $t('howToConnect.shop1.time') }}
                        </div>
                        <a class="how-to-connect__shop-link" :href="$url.signUpDemonstration" target="_blank">{{ $t('howToConnect.shop1.link') }}</a>
                    </div>
                </div>
            </div>

            <i18n path="howToConnect.textBottom" class="how-to-connect__text how-to-connect__text__bottom" tag="p">
                <a class="how-to-connect__text-link" :href="$url.signUpDemonstration" target="_blank">{{ $t('howToConnect.textBottomLink') }}</a>
            </i18n>

            <div class="how-to-connect__shop-wrapper how-to-connect__shop-wrapper__vertical">
                <div class="how-to-connect__shop-img how-to-connect__shop-img_runlab"></div>
                <div class="how-to-connect__shop how-to-connect__shop">
                    <div class="how-to-connect__shop-logo how-to-connect__shop-logo_runlab"></div>
                    <div class="how-to-connect__shop-title">{{ $t('howToConnect.shop2.title') }}</div>
                    <div class="how-to-connect__shop-address">
                        {{ $t('howToConnect.shop2.city') }}<br>
                        {{ $t('howToConnect.shop2.metro') }}<br>
                        {{ $t('howToConnect.shop2.address') }}<br>
                        +7 812 385 59 56<br>
                        {{ $t('howToConnect.shop2.time') }}
                    </div>
                </div>
            </div>

            <div class="how-to-connect__shop-wrapper how-to-connect__shop-wrapper__vertical">
                <div class="how-to-connect__shop-img how-to-connect__shop-img_wildberries">
            </div>
            <div class="how-to-connect__shop">
                <div class="how-to-connect__shop-logo how-to-connect__shop-logo_wildberries">
            </div>
            <div class="how-to-connect__shop-title">{{ $t('howToConnect.shop3.title') }}</div>
            <div class="how-to-connect__shop-address">
                {{ $t('howToConnect.shop3.city') }}<br>
                {{ $t('howToConnect.shop3.metro') }}<br>
                {{ $t('howToConnect.shop3.address') }}<br>
                +7 812 309 80 91<br>
                {{ $t('howToConnect.shop3.time') }}
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
  export default {
    name: 'how-to-connect'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .how-to-connect {
        position: relative;
        padding: 6em 4% 4.6em;
        margin: 0 auto;
        max-width: 1140px;
        box-sizing: border-box;
        width: 100%;
        min-height: 515px;
        text-align: center;
        color: #3a3535;

        &__wrapper {
            background-color: #FFFEFF;
        }

        &__title {
            margin-bottom: 2em;
            @include responsiveFont(37px, 25px);
            line-height: 1.2;
            color: $landing3a3535;
        }

        &__text {
            margin: 0 auto 3.2em auto;
            max-width: 978px;
            @include responsiveFont(19px, 16px);
            line-height: 1.875;
            letter-spacing: -0.020em;
            text-align: center;
            color: $landing5f5f5f;
            &__bottom {
                margin-bottom: 3.5em;
                max-width: 770px;
                @include responsiveFont(19px, 16px);
            }
        }

        &__text-link {
            font-weight: 600;
            font-style: italic;
            letter-spacing: -0.025em;
            color: $landing3a3535;
            cursor: pointer;
            text-decoration: none;
            &:hover {
                color: #03cce5;
            }
        }

        &__shop-wrapper {
            padding: 3em 0 3.5em;
            margin-bottom: 4.7em;
            text-align: center;
            border-top: 1px solid #9a9a9a;
            border-bottom: 1px solid #9a9a9a;
            &__vertical {
                display: inline-block;
                vertical-align: top;
                padding: 0;
                margin-bottom: 0;
                margin-right: 48px;
                max-width: 475px;
                width: 100%;
                border: none;
                &:last-child {
                    margin-right: 0;
                }
                @include w320-767 {
                    margin-right: 0;
                }
            }
        }

        &__left,
        &__right {
            display: inline-block;
            vertical-align: top;
            width: 100%;
            max-width: 490px;
            font-size: 0;
        }

        &__shop-img {
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin: 0 20px 3.4em 0;
            height: 290px;
            width: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            &__text {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -150px;
                margin-top: -34px;
                width: 300px;
                min-height: 68px;
                font-size: 36px;
                font-weight: 600;
                line-height: 68px;
                color: #fff;
                text-transform: uppercase;
            }
            &_imigize {
                margin: 0 20px 0 0;
                height: 305px;
                max-width: 486px;
                width: 100%;
                background-image: url("../assets/img/howToConnect/img-imigize.jpg");
            }
            &_runlab {
                background-image: url("../assets/img/howToConnect/img-runlab.jpg");
            }
            &_wildberries {
                background-image: url("../assets/img/howToConnect/img-wildberries.jpg");
            }
        }

        &__shop {
            display: inline-block;
            vertical-align: top;
            min-height: 305px;
            max-width: 440px;
            min-width: 300px;
            width: 100%;
            box-sizing: border-box;
        }

        &__shop-title {
            margin-bottom: 1em;
            @include responsiveFont(19.47px, 16px);
            line-height: 1.85;
            font-weight: 600;
            letter-spacing: -0.025em;
            color: $landing3a3535;
            &_imigize {
                @include responsiveFont(16px, 14px);
                margin-bottom: 1em;
            }
        }

        &__shop-address {
            margin-bottom: 1em;
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            letter-spacing: -0.035em;
            color: $landing5f5f5f;
        }

        &__shop-link {
            font-size: 15.48px;
            line-height: 35px;
            font-style: italic;
            letter-spacing: -0.02em;
            color: #3a3535;
            cursor: pointer;
            text-decoration: none;
            &:hover {
                color: #03cce5;
            }
        }

        &__shop-logo {
            margin-bottom: 2em;
            width: 100%;
            height: 76px;
            background-repeat: no-repeat;
            background-position: center;

            &_imigize {
                margin-bottom: 19px;
                height: 50px;
                background-image: url("../assets/img/howToConnect/logo-imigize.png");
            }
            &_runlab {
                height: 59px;
                background-size: contain;
                background-image: url("../assets/img/howToConnect/logo-runlab.png");
            }
            &_wildberries {
                height: 59px;
                background-size: 40%;
                background-image: url("../assets/img/howToConnect/logo-wildberries.png");
            }
        }

        @media only screen and (max-width: 767px) {
            &__link {
                margin-left: 0;
            }

            &__shop-img {
                margin-right: 0;
                height: 220px;
            }
        }
    }

</style>