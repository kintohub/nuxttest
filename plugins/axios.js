import Vue from 'vue'
import axios from 'axios'
import VueAxios from '@nuxtjs/axios'

axios.interceptors.response.use(
  response => {
    console.log('AXIOS')
    return response
  },
  error => {
    console.log('AXIOS', error)
    return new Error(error)
  }
)

Vue.use(VueAxios, axios)
