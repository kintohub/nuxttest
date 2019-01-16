<template>
  <section class="container">
    <div>
      <h1 class="title">
        Github Ajax
      </h1>
      <h2 class="subtitle">
        Ajax Response: {{ message }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  asyncData({ $axios }) {
    $axios.interceptors.request.use(
      request => {
        // console.logl'what', response)
        console.log('REQUEST HEADERS ', request.headers)
        return request
      },
      error => {
        console.log('AXIOS', error.response.request)
        return Promise.reject(error)
      }
    )
    return $axios
      .get(
        'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc'
      )
      .then(res => {
        return { message: res.data.total_count }
      })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
