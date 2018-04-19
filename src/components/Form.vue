<template>
    <form class="form" @submit.prevent="onFormSubmit" ref="form">
        <div class="form__inner">
            <h3 class="form__title">{{ $t('form.title') }}</h3>

            <label class="form__label" for="name">*{{ $t('form.name') }}</label>
            <input class="form__input" type="text" name="name" id="name" required
                   @change="onInput">

            <label class="form__label" for="email">*{{ $t('form.email') }}</label>
            <input class="form__input" type="email" name="email" id="email" required
                   @change="onInput">

            <label class="form__label" for="emailImigize">{{ $t('form.emailImigize') }}</label>
            <input class="form__input" type="email" name="emailImigize" id="emailImigize"
                   @change="onInput">

            <label class="form__label" for="skype">{{ $t('form.skype') }}</label>
            <input class="form__input" type="text" name="skype" id="skype"
                   @change="onInput">

            <label class="form__label" for="phone">{{ $t('form.phone') }}</label>
            <input class="form__input form__input-phone" type="text" name="phone" id="phone"
                   @change="onInput">

            <label class="form__label" for="message">*{{ $t('form.message') }}</label>
            <textarea class="form__input form__input-message" rows="6" name="message" id="message"
                      :placeholder="$t('form.placeholder')" required
                      @change="onInput">
        </textarea>
            <input class="form__btn" :value="$t('form.btn')" type="submit">
        </div>
    </form>
</template>

<script>
  import {URL} from '@/api/http-common.js'
  import axios from 'axios'

  export default {
    name: 'Form',
    data: () => ({
      localStorageName: 'ContactForm-imigize',
      dataForLocalStorage: null
    }),

    mounted() {
      this.getFromLocalStorage()
    },
    methods: {
      onFormSubmit() {
        const formData = new FormData(this.$refs.form)
        this.sendForm(formData)
      },

      sendForm(params) {
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        axios.post(URL.sendForm, params, config)
          .then((response) => {
            const result = response.data.result
            if (result) {
              localStorage.removeItem(this.localStorageName)
            }
            this.$emit('formSend', result)
          })
          .catch(() => {
            alert('Ошибка отправки файлов')
          })
      },

      onInput(e) {
        this.saveInLocalStorage(e.target)
      },

      getFromLocalStorage() {
        const inputs = Object.assign(this.$refs.form.querySelectorAll('input'))
        if (!localStorage.getItem(this.localStorageName)) {
          return
        }
        const data = JSON.parse(localStorage.getItem(this.localStorageName))

        for (let inputItem of inputs) {
          const name = inputItem.name
          if (name) {
            inputItem.value = data[name] || ''
          }
        }
        const textArea = this.$refs.form.querySelector('textarea')
        textArea.value = data[textArea.name] || ''
      },

      saveInLocalStorage(target) {
        try {
          const data = {[target.name]: target.value}
          if (!this.dataForLocalStorage) {
            this.dataForLocalStorage = localStorage.getItem(this.localStorageName) ? JSON.parse(localStorage.getItem(this.localStorageName)) : {}
          }
          this.dataForLocalStorage = Object.assign(this.dataForLocalStorage, data)
          localStorage.setItem(this.localStorageName, JSON.stringify(this.dataForLocalStorage))
        } catch (e) {
          console.log(e.message)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .form {
        position: relative;
        margin: 0 auto;
        padding: 39px 53px;
        max-width: 600px;
        width: 100%;
        min-height: 463px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.22);
        text-align: left;

        &__inner {
            margin: 0 auto;
            width: 100%;
            max-width: 350px;
            @include w320-767 {
                text-align: center;
            }
        }

        &__title {
            margin: 0 auto;
            margin-bottom: 24px;
            max-width: 300px;
            width: 100%;
            font-size: 28px;
            font-weight: 600;
            line-height: 38px;
            color: #4d4d4d;
        }

        &__label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            color: #4d4d4d;
        }

        &__input {
            margin-bottom: 15px;
            padding: 0 15px;
            display: inline-block;
            vertical-align: top;
            width: 100%;
            height: 40px;
            box-sizing: border-box;
            border-radius: 4px;
            background-color: #f3f3f3;
            border: solid 1px #d2d2d2;
            font-size: 14px;
            font-weight: normal;
            line-height: 22px;
            color: #4d4d4d;
            text-align: left;
            &:active, &:focus, &:hover {
                padding: 0 14px;
                border: 2px solid #4cdbef;
                outline: none;
            }
        }

        &__input-phone {
            width: 200px;
            padding: 1px 15px;
        }

        &__input-message {
            min-height: 136px;
            padding: 1px 15px;
        }

        &__btn {
            display: block;
            margin: 0 auto;
            margin-top: 10px;
            padding: 0 25px;
            width: auto;
            height: 40px;
            border-radius: 4px;
            background-color: #00c4dc;
            border: none;
            font-size: 18px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            white-space: normal;
            &:hover {
                background-color: #4cdbef;
            }
            &:active, &:focus {
                outline: none;
            }
        }

        @media only screen and (max-device-width: 640px) {
            & {
                padding: 8% 6%;
                max-width: 450px;
            }

            &__title {
                text-align: center;
            }
        }

        @media only screen and (max-device-width: 456px) {
            &__input {
                width: 250px;
                height: 38px;
            }
            &__btn {
                display: block;
                font-size: 15px;
            }
        }
    }
</style>