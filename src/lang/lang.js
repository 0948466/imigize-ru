import en from './translate/en.js'
import ru from './translate/ru.js'

let locale = document.querySelector('html').getAttribute('lang') || 'en'

export default {
  locale,
  messages: {
    en,
    ru
  }
}
