import axios from 'axios'
import urlJSON from '@/url.json'

let baseUrl = (process.env.NODE_ENV !== 'development') ? '' : 'http://localhost:3004'

export const HTTP = function(urlFrom, params) {
  let url

  switch (urlFrom) {
    case 'changeLocale':
      url = urlJSON.locale_set_action
      break
  }

  return axios.create({
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    params
  }).get(`${baseUrl}${url}`)
}

export const URL = {
  sendForm: `${baseUrl}${urlJSON.contacts_request_action}`
}
