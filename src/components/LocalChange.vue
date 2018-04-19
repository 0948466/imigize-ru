<template>
    <div :class="['local-change',{'local-change_flex': isFlex}]">
        <a class="local-change__link local-change__link__active"
           @click.prevent="changeLocal('en')"
           data-locale="en">en
        </a>
        <a class="local-change__link"
           @click.prevent="changeLocal('ru')"
           data-locale="ru">ru
        </a>
        <a class="local-change__link"
           @click.prevent="changeLocal('ch')"
           data-locale="ch">中文
        </a>
        <div class="local-change__china-coming-soon" v-if="showComingSoon">
            <div>Скоро</div>
            <div>Coming soon</div>
            <div>快来了</div>
        </div>
    </div>
</template>

<script>
  import {HTTP} from '@/api/http-common.js'

  export default {
    name: 'local-change',
    props: ['isFlex'],
    data: () => ({
      showComingSoon: false
    }),
    methods: {
      changeLocal(lang) {
        if (lang === 'ch') {
          this.showComingSoon = true
          setTimeout(() => {
            this.showComingSoon = false
          }, 4000)
          return
        }
        this.$i18n.locale = lang
        history.pushState(null, null, event.target.getAttribute('href'))
        document.querySelector('html').setAttribute('lang', lang)

        this.httpChangeLocal(this.getParams({'l': lang}))

        switch (lang) {
          case 'ru':
            document.title = 'Бесконтактная примерка обуви в интернете'
            break
          default:
            document.title = 'Contactless shoe fitting in on-line shopping'
        }
      },

      httpChangeLocal(params) {
        HTTP('changeLocale', params)
          .then((response) => {
            if (response.data.error) {
              console.log('changeLocale error')
            }
          })
          .catch(() => {
            console.log('changeLocale error')
          })
      },

      getParams(data) {
        let params = new URLSearchParams()

        for (let prop in data) {
          if (data.hasOwnProperty(prop)) {
            params.append(prop, data[prop])
          }
        }
        return params
      }
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .local-change {
        font-size: 0;
        &_flex {
            display: flex;
            align-items: center;
            @include w320-767 {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .link-local-change::after {
                @include w320-767 {
                    width: 0 !important;

                }
            }
        }

        &__link {
            position: relative;
            padding: 6px;
            @include responsiveFont(13px, 11px);
            font-weight: 400;
            letter-spacing: 1px;
            line-height: 14px;
            color: #4A4A4A;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                color: #32d0e7;
            }

            &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -5px;
                width: 1px;
                height: 12px;
                background-color: #d8d6d6;
                @include w320-767 {
                    top: auto;
                    bottom: 0;
                    left: 0;
                    margin-top: 0;
                    width: 100%;
                    height: 1px;
                }
            }

            &:last-child {
                &::after {
                    background-color: transparent;
                }
            }
        }

        &__china-coming-soon {
            width: 100px;
            height: 80px;
            margin: auto;
            padding: 20px;
            background-color: #f7e8ca;
            border: 1px solid #a8a8a8;
            position: absolute;
            z-index: 2500;
            text-align: center;
            font-size: 15px;
            line-height: 28px;
            cursor: default;
        }
    }
</style>