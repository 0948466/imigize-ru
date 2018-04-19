<template>
    <div class="how-work__wrapper" id="imigize-landing-howWork">
        <div class="how-work">
            <div class="how-work__title">
                {{ $t('howWork.title') }}
            </div>
            <div class="how-work__text-wrap">
                <i18n path="howWork.text1" class="how-work__text how-work__text-icon1" tag="p">
                    <span class="how-work__text__span">{{ $t('howWork.text1Bold1') }}</span>
                    <span class="how-work__text__span">{{ $t('howWork.text1Bold2') }}</span>
                </i18n>
                <i18n path="howWork.text2" class="how-work__text how-work__text-icon2" tag="p">
                    <span class="how-work__text__span">{{ $t('howWork.text2Bold') }}</span>
                </i18n>

                <p class="how-work__text how-work__text-icon3">
                    {{ $t('howWork.text3') }}
                </p>
            </div>
            <div class="how-work__link-wrapper">
                <a class="how-work__link" :href="$url.telegram" target="_blank">{{ $t('howWork.link') }}
                    <span class="how-work__text__span how-work__text-link-telegram">Telegram</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'how-work'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .how-work {
        padding: 6em 4% 6.1%;
        min-height: 515px;
        text-align: center;
        color: #3a3535;
        position: relative;
        max-width: 934px;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;

        &__wrapper {
            background-color: #e9eeef;
        }

        &__title {
            margin-bottom: 1.8em;
            @include responsiveFont(37px, 25px);
            line-height: 1.2;
            color: $landing3a3535;
        }

        &__text-wrap {
            margin: 0 auto 4.6em auto;
            padding-left: 5%;
            @include responsiveFont(20px, 18px);
            text-align: left;
        }

        &__text {
            position: relative;
            padding-left: calc(70px + 12%);
            margin-bottom: 3.2em;
            max-width: 615px;
            @include responsiveFont(19.34px, 17px);
            line-height: 1.48;
            color: $landing3a3535;
            letter-spacing: -0.02em;
            &::before {
                content: '';
                position: absolute;
                background-repeat: no-repeat;
                background-size: contain;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }

        &__text-icon1::before {
            top: 14px;
            left: 0;
            width: 62px;
            height: 61px;
            background-image: url("../assets/img/howWork/icon-foot.svg");
        }

        &__text-icon2::before {
            top: 6px;
            left: 0;
            width: 72px;
            height: 73px;
            background-image: url("../assets/img/howWork/icon-sneakers.svg");
        }

        &__text-icon3::before {
            top: 6px;
            left: 0;
            width: 64px;
            height: 71px;
            background-image: url("../assets/img/howWork/icon-toogler.svg");
        }

        &__text__span {
              color: $landing3a3535;
              font-weight: 600;
              letter-spacing: -0.025em;
        }

        &__text-link-telegram {
            position: relative;
            padding-left: 45px;
            cursor: pointer;
            &:hover {
                color: #03cce5;
            }
            &::before {
                content: '';
                position: absolute;
                top: 7px;
                left: 14px;
                width: 18px;
                height: 16px;
                background-size: contain;
                background: url("../assets/img/howWork/icon-tel-blue.svg") no-repeat;
            }
        }

        &__link-wrapper {
            padding-left: 5%;
        }

        &__link {
            padding-left: calc(70px + 12%);
            max-width: 615px;
            @include responsiveFont(19.34px, 18px);
            line-height: 1.5;
            font-style: italic;
            font-weight: 300;
            letter-spacing: -0.02em;
            color: $landing5f5f5f;
            cursor: pointer;
            text-align: left;
            text-decoration: none;
            @include w320-767 {
                padding-left: 0;
            }
        }
    }

</style>