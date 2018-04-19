<template>
    <section class="main-header">
        <logo-imigize class="main-header__logo"/>
        <nav class="main-header__main-navigation">
            <ul class="main-header__main-menu">
                <li>
                    <router-link class="main-header__link" :to="{name: 'about'}">{{ $t('link.about') }}</router-link>
                </li>
                <li><a class="main-header__link" :href="$url.catalog">{{ $t('link.catalog') }}</a></li>
                <li><a class="main-header__link" :href="$url.blog">{{ $t('link.blog') }}</a></li>
                <li><a class="main-header__link" :href="$url.ir">{{ $t('link.ir') }}</a></li>
                <li><router-link class="main-header__link" :to="{name: 'contacts'}">{{ $t('link.contacts') }}</router-link></li>
            </ul>
        </nav>

        <div class="main-header__user-block">
            <local-change class="main-header__local-change" :isFlex="true"/>
            <a class="main-header__icon main-header__personal" :href="$url.profile">{{ $t('link.profile') }}</a>
            <sandwich/>
        </div>

    </section>
</template>

<script>
  import LogoImigize from '@/components/LogoImigize'
  import LocalChange from '@/components/LocalChange'
  import Sandwich from '@/components/Sandwich'

  export default {
    name: 'main-header',
    components: {
      LogoImigize,
      LocalChange,
      Sandwich
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .main-header {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        min-height: 90px;
        background-color: #fff;
        border-bottom: 1px solid #e4e4e4;
        z-index: 2;
        text-align: center;

        &__logo {
            margin: 33px 10px 0 32px;
        }

        &__main-navigation {
            display: inline-block;
            vertical-align: top;
        }

        &__main-menu {
            list-style: none;
            margin: 0;
            padding: 0;
            color: #fff;
            & > li {
                display: inline-block;
                vertical-align: top;
            }
            a {
                display: inline-block;
                vertical-align: top;
                padding: 35px 20px 35px 20px;
                font-size: 13px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 2.5px;
                color: #5f5f5f;
                text-decoration: none;
                text-align: center;
                text-transform: uppercase;
                &:hover {
                    color: #32d0e7;
                    padding: 34px 20px 33px 20px;
                    border-bottom: 3px solid #84e1ee;
                }
            }
        }

        &__local-change {
            margin-right: 10px;
        }

        &__icon {
            display: inline-block;
            padding: 50px 0 10px 0;
            margin-top: 5px;
            width: 77px;
            height: 80px;
            box-sizing: border-box;
            font-size: 11px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 19px;
            color: #3d3d3d;
            &:hover {
                background-color: #84e1ee;
                border-radius: 6px;
            }
        }

        &__personal {
            background-image: url("../assets/img/header/profile.svg");
            background-position: 25px 15px;
            background-repeat: no-repeat;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            letter-spacing: 0.5px;
        }

        @media only screen and (max-width: 1140px) {
            &__main-navigation {
                display: none;
            }
        }

        @media only screen and (max-width: 407px) {

            &__user-block {
                position: relative;
                display: flex;
                float: right;
                min-width: 107px;
                text-align: left;
            }
        }

        @media only screen and (min-width: 408px) {
            &__user-block {
                position: relative;
                display: flex;
                float: right;
                min-width: 168px;
                text-align: left;
            }
        }
    }
</style>