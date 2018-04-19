<template>
    <div class="contacts">
        <h1 class="contacts__title">{{ $t('contacts.title') }}</h1>
        <div class="contacts__contacts-list">
            <h2>{{ $t('contacts.spb.title') }}</h2>
            <p>{{ $t('contacts.spb.hours') }}</p>
            <p>{{ $t('contacts.spb.address') }}</p>
            <p>{{ $t('contacts.email') }}: <a href="mailto:sales@imigize.com">sales@imigize.com</a></p>
        </div>
        <div class="contacts__map-wrapper">
            <h2>{{ $t('contacts.mapTitle') }}:</h2>
            <google-map-imigize class="contacts__map"/>
        </div>

        <template v-if="$i18n.locale !== 'ru'">
            <div class="contacts__contacts-list">
                <h2>{{ $t('contacts.hong.title') }}</h2>
                <p>{{ $t('contacts.hong.address') }}</p>
                <p>{{ $t('contacts.hong.street') }}</p>
                <p>{{ $t('contacts.hong.city') }}</p>
                <p>{{ $t('contacts.email') }}: <a href="mailto:IR@imigize.com">IR@imigize.com</a></p>
            </div>
            <div class="contacts__map-wrapper">
                <h2>{{ $t('contacts.mapTitle') }}:</h2>
                <google-map-hong-kong class="contacts__map"/>
            </div>
        </template>

        <template v-if="showForm">
            <h2 class="contacts__form-title">
                {{ $t('contacts.formTitle') }}
            </h2>
            <p class="contacts__form-text">
                {{ $t('contacts.formText1') }}
                <a href="mailto:sales@imigize.com">sales@imigize.com</a><br>
                {{ $t('contacts.formText2') }}
            </p>
            <contact-form @formSend="onFormSend"/>
        </template>
        <transition name="fade">
            <div v-if="showOk" class="contacts__form-message contacts__form-message_ok">
                {{ $t('contacts.formMessageOk') }}
            </div>
        </transition>
        <transition name="fade">
            <div v-if="showError" class="contacts__form-message contacts__form-message_error">
                {{ $t('contacts.formMessageError') }}
            </div>
        </transition>
    </div>
</template>

<script>
  import GoogleMapImigize from '@/components/GoogleMapImigize'
  import GoogleMapHongKong from '@/components/GoogleMapHongKong'
  import ContactForm from '@/components/Form'

  export default {
    name: 'ContactsPage',
    data: () => ({
      showOk: false,
      showError: false
    }),

    computed: {
      showForm() {
        return !(this.showOk || this.showError)
      }
    },
    methods: {
      onFormSend(payload) {
        (payload) ? this.showOk = true : this.showError = true

        setTimeout(() => {
          this.showOk = false
          this.showError = false
        }, 5000)
      }
    },
    components: {
      GoogleMapImigize,
      GoogleMapHongKong,
      ContactForm
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .contacts {
        margin: 0;
        padding: 40px 20px 20px 20px;

        &__send-message {
            padding: 13px;
            margin-bottom: 15px;
            min-height: 55px;
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 1.5px;
            text-align: center;
            color: #4d4d4d;
            box-sizing: border-box;
            background-color: #d4ecba;
        }

        &__title {
            margin-bottom: 57px;
            font-size: 46px;
            font-weight: 400;
            line-height: 46px;
            letter-spacing: 3.8px;
            color: #4d4d4d;
            text-align: center;
        }

        &__contacts-list {
            margin: 0 auto;
            max-width: 1000px;
            width: 100%;
            text-align: left;
            h2 {
                margin-bottom: 10px;
                font-size: 18px;
                line-height: 26px;
                color: #3e3e3e;
                font-weight: 500;
            }
            p {
                font-size: 16px;
                font-weight: 300;
                line-height: 22px;
                color: #3e3e3e;
            }

            a {
                letter-spacing: 0.5px;
                color: #00aecd;
                text-decoration: none;
            }
        }

        &__map-wrapper {
            margin: 0 auto;
            padding: 30px 0;
            max-width: 1000px;
            width: 100%;
            h2 {
                margin-bottom: 10px;
                font-size: 18px;
                line-height: 26px;
                color: #3e3e3e;
                font-weight: 500;
            }
            p {
                font-size: 13px;
                line-height: 16px;
            }
        }

        &__map {
            height: 500px;
            border: 3px solid #fff;
            border-radius: 3px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);

            p {
                margin: 0;
            }
        }

        &__form-title {
            margin-bottom: 30px;
            font-size: 42px;
            font-weight: 300;
            line-height: 50px;
            text-align: center;
            color: #3e3e3e;
        }

        &__form-text {
            position: relative;
            margin-bottom: 40px;
            font-size: 16px;
            font-weight: normal;;
            line-height: 24px;
            text-align: center;
            color: #3e3e3e;
            a {
                color: #3e3e3e;
                &:hover {
                    color: #4cdbef;
                }
            }
        }

        @media only screen and (max-device-width: 640px) {
            &__title {
                font-size: 32px;
                line-height: 38px;
            }
        }

        @media only screen and (max-device-width: 456px) {
            &__map {
                height: 400px;
            }
        }

        @media only screen and (max-device-width: 770px) {
            & h1 {
                font-size: 32px;
                line-height: 36px;
            }
        }

        &__form-message {
            padding: 13px;
            margin-bottom: 15px;
            min-height: 55px;
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 1.5px;
            text-align: center;
            color: #4d4d4d;
            box-sizing: border-box;
            &_ok {
                background-color: #d4ecba;
            }
            &_error {
                background-color: #ffafaf;
            }
        }
    }

    .fade-enter-active {
        animation: fade-in 0.5s;
    }

    .fade-leave-active {
        opacity: 0;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>