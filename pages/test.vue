<template>
  <section class="container">
    <div>
      <h1 class="title">
        Test Ajax
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
    $axios.setToken(
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQtaWQiOiIzMGViYzVkNjZkNDE0ZTEzYjM1ZDNiYTQ5YTY4YzhkMyIsInNlc3Npb24taWQiOiJkYTg5NTJlMy02ZGIwLTRkOGYtOTZiYS04NDVkMWM4OTBiMTMiLCJuYmYiOjE1NDUyMTEwOTYsImV4cCI6MTU0NjQyMDY5NiwiaWF0IjoxNTQ1MjExMDk2LCJpc3MiOiJNaWRkbGV3YXJlIiwiYXVkIjoiTWlkZGxld2FyZSJ9.6u6azMXGJvh9wfsX3kXkN37AK-s1pJp79GTRqTHnY8o`,
      'Bearer'
    )
    return $axios
      .get('https://api.kintohub.com/helloworld/hello/world')
      .then(res => {
        return { message: res.data.message }
      })
      .catch(err => {
        console.log('Request errored:', err)
        return {
          message: 'request errored, check logs'
        }
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
