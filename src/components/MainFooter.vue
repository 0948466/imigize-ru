<template>
    <section class="main-footer">
        <div class="main-footer__left">
            <div class="main-footer__logo">
                <logo-imigize width="108px" height="28px"/>
            </div>
            <div class="main-footer__copyright">
                Copyright © Imigize Group. All rights reserved
            </div>
        </div>
        <div class="main-footer__right">
            <div class="main-footer__imigize-io">
                <h3 class="main-footer__imigize-io-title">Imigize ICO</h3>
                <a class="main-footer__imigize-io-link" target="_blank" href="https://imigize.io/">imigize.io</a>
            </div>
            <div class="main-footer__menu">
                <h3 class="main-footer__menu-title">{{ $t('mainFooter.menuTitle') }}</h3>
                <router-link :to="{name: 'homepage'}" class="main-footer__menu-link">{{ $t('link.home') }}</router-link>
                <a class="main-footer__menu-link" :href="$url.blog">{{ $t('link.blog') }}</a>
                <router-link class="main-footer__menu-link" :to="{name: 'about'}">{{ $t('link.about') }}</router-link>
                <a class="main-footer__menu-link" :href="$url.catalog">{{ $t('link.catalog') }}</a>
                <router-link class="main-footer__menu-link" :to="{name: 'contacts'}">{{ $t('link.contacts') }}</router-link>
                <a class="main-footer__menu-link" :href="$url.ir">{{ $t('link.ir') }}</a>
            </div>

            <div class="main-footer__social">
                <h3 class="main-footer__social-title">{{ $t('mainFooter.socialTitle') }}</h3>
                <a class="main-footer__social-link__vk" target="_blank" :href="$url.vk">{{ $t('mainFooter.socialVk') }}</a>
                <a class="main-footer__social-link__ytube" target="_blank" :href="$url.youtube">Youtube</a>
                <a class="main-footer__social-link__fb" target="_blank" :href="$url.facebook">Facebook</a>
                <a class="main-footer__social-link__tel" target="_blank" :href="$url.telegram">Telegram</a>
                <a class="main-footer__social-link__tw" target="_blank" :href="$url.twitter">Twitter</a>
            </div>
        </div>
    </section>
</template>

<script>
  import LogoImigize from '@/components/LogoImigize'

  export default {
    name: 'main-footer',
    components: {
      LogoImigize
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .main-footer {
        display: flex;
        padding: 1.4em 2% 7em 5.3%;
        justify-content: space-between;
        font-weight: 600;
        text-align: center;
        background-color: #e9eeef;
        color: rgb(61, 61, 61);
        overflow: hidden;

        &__left {
            padding: 1.8em 0;
            align-self: flex-end;
            flex-basis: 250px;
            flex-shrink: 0;
            text-align: left;
        }

        &__logo {
            display: inline-block;
            vertical-align: top;
            margin-bottom: 1em;
        }

        &__copyright {
            @include responsiveFont(11.76px, 10px);
            line-height: 1.445;
            letter-spacing: -0.025em;
            font-weight: 600;
            color: #000;
        }

        &__right {
            display: flex;
            padding: 1.8em 4%;
            justify-content: flex-end;
        }

        &__imigize-io {
            display: inline-block;
            vertical-align: top;
            margin-right: 7%;
            flex-basis: 193px;
            text-align: left;
        }

        &__imigize-io-link {
            display: inline-block;
            vertical-align: top;
            @include responsiveFont(14.32px, 12px);
            line-height: 2.02;
            font-weight: 600;
            color: #00accd;
            letter-spacing: -0.025em;
            text-decoration: none;
            cursor: pointer;
        }

        &__menu {
            display: inline-block;
            vertical-align: top;
            margin-right: 7%;
            flex-basis: 261px;
            min-width: 238px;
            font-size: 0;
            text-align: left;

        }

        &__menu-link {
            display: inline-block;
            vertical-align: top;
            width: 47%;
            max-width: 90px;
            @include responsiveFont(14.32px, 12px);
            line-height: 2.02;
            font-weight: 600;
            color: #636363;
            letter-spacing: -0.025em;
            text-decoration: none;
            cursor: pointer;
            @include w320-767 {
                margin-right: 6%;
            }

            &:nth-child(even) {
                margin-right: 6%;
                width: 30%;
            }
            &:hover {
                color: #32d0e7;
            }
        }

        &__imigize-io-title,
        &__menu-title,
        &__social-title {
            margin-bottom: 10px;
            font-size: 16px;
            @include responsiveFont(16px, 14px);
            font-weight: 600;
            line-height: 1.4375;
            color: #000;
        }

        &__social {
            display: inline-block;
            vertical-align: top;
            font-size: 0;
            flex-basis: 226px;
            text-align: left;
        }

        &__social a {
            position: relative;
            display: inline-block;
            vertical-align: top;
            padding-left: 25px;
            width: 47%;
            max-width: 105px;
            box-sizing: border-box;
            @include responsiveFont(14.32px, 12px);
            line-height: 2.02;
            font-weight: 600;
            color: #636363;
            letter-spacing: -0.025em;
            text-decoration: none;
            cursor: pointer;
            @include w320-767 {
                margin-right: 3%;
            }
            &:nth-child(even) {
                margin-right: 6%;
                @include w320-767 {
                    margin-right: 3%;
                }
            }

            &:last-child {
                margin-right: 0;
            }
            &:hover {
                color: #32d0e7;
            }
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                margin-top: -8px;
                width: 16px;
                height: 16px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        }

        &__social-link__vk::before {
            background-image: url("../assets/img/footer/icon-vk.svg");
        }

        &__social-link__fb::before {
            background-image: url("../assets/img/footer/icon-fb.svg");
        }

        &__social-link__tw::before {
            background-image: url("../assets/img/footer/icon-tw.svg");
        }

        &__social-link__inst::before {

        }

        &__social-link__ytube::before {
            background-image: url("../assets/img/footer/icon-ytube.svg");
        }

        &__social-link__tel::before {
            background-image: url("../assets/img/footer/icon-tel.svg");
        }
    }

    @media only screen and (max-width: 1140px) {
        .main-footer {
            padding: 1.4em 4% 7em 4%;
            flex-wrap: wrap-reverse;
            @include w320-767 {
                padding-left: 6%;
            }

            &__right {
                padding: 1.8em 0;
                margin: 0 auto;
            }
            &__menu,
            &__imigize-io,
            &__social {
                margin-right: 0;
                margin-bottom: 2em;
            }
        }
    }

    @media only screen and (max-width: 618px) {
        .main-footer__right {
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>