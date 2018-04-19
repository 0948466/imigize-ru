<template>
    <div class="header-about">
        <div class="header-about__inner">
            <logo-imigize
                    width="90px"
                    height="20px"
                    class="header-about__logo-imigize"></logo-imigize>
            <div class="header-about__buttons-block">
                <div class="header-about__button" v-scroll-to="'.technology'">
                    {{ $t('headerAbout.linkTechnology')}}
                </div>
                <div class="header-about__button" v-scroll-to="'.how-it-works'">
                    {{ $t('headerAbout.linkHowItWorks')}}
                </div>
                <div class="header-about__button" v-scroll-to="'.benefits'">
                    {{ $t('headerAbout.linkBenefits')}}
                </div>
                <router-link :to="{name: 'homepage', hash: '#imigize-landing-howToConnect'}"
                             class="header-about__button header-about__button-for-reg">
                    {{ $t('headerAbout.linkHowToConnect')}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
  import LogoImigize from '@/components/LogoImigize'

  export default {
    name: 'HeaderAbout',
    mounted() {
      document.addEventListener('scroll', this.onWindowScroll)
    },

    beforeDestroy() {
      document.removeEventListener('scroll', this.onWindowScroll)
    },
    methods: {
      onWindowScroll() {
        const HEADER_INNER_FIXED = 'header-about__inner_fixed'
        const header = document.querySelector('.header-about')
        const headerInner = document.querySelector('.header-about__inner')

        const headerTop = header.getBoundingClientRect().top + window.pageYOffset

        if (headerInner.classList.contains(HEADER_INNER_FIXED) && window.pageYOffset < headerTop) {
          headerInner.classList.remove(HEADER_INNER_FIXED)
        } else if (window.pageYOffset > headerTop) {
          headerInner.classList.add(HEADER_INNER_FIXED)
        }
      }
    },
    components: {
      LogoImigize
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .header-about {
        height: 50px; // need!

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            height: 50px;
            line-height: 50px;
            user-select: none;
        }
        &__inner_fixed {
            position: fixed;
            top: 0;
            max-width: 1690px;
            width: 100%;
            z-index: 100;
        }

        &__logo-imigize {
            float: left;
            margin-left: 33px;
        }

        &__buttons-block {
            float: right;
            height: 100%;
        }

        &__button {
            font-weight: 300;
            font-size: 16px;
            display: inline-block;
            margin: 0 15px 0 10px;
            color: #5a5a5a;
            cursor: pointer;

            &:hover {
                color: #0fc8e9;
            }
        }

        &__button-for-reg {
            padding: 0 30px;
            color: #fff;
            background-color: #5bd0ea;
            margin-right: 0;
            &:hover {
                color: #fff;
                background-color: #4cdbef;
            }
        }

        @media only screen and (max-device-width: 926px) {
            &__button:nth-child(1) {
                display: none;
            }
        }

        @media only screen and (max-device-width: 766px) {
            &__button:nth-child(1),
            &__button:nth-child(2) {
                display: none;
            }
        }

        @media only screen and (max-device-width: 521px) {
            &__button:nth-child(1),
            &__button:nth-child(2),
            &__button:nth-child(3) {
                display: none;
            }
        }

        @media only screen and (max-device-width: 380px) {
            & {
                display: none;
            }
        }
    }
</style>