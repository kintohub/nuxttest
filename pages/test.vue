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
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQtaWQiOiI1NTg2ZDVjYTc5YWU0MjQ1OTBmOTgwNTExNDEyMzAzMiIsInNlc3Npb24taWQiOiIxMzlmNTAyYy1iZjA4LTQzMGUtYjEyYi02ZjY0ZDNhMmM4MDIiLCJuYmYiOjE1NDUxMjM0OTAsImV4cCI6MTU0NjMzMzA5MCwiaWF0IjoxNTQ1MTIzNDkwLCJpc3MiOiJNaWRkbGV3YXJlIiwiYXVkIjoiTWlkZGxld2FyZSJ9.YCY27B3-Oxu3L5EP0pjP9os02NKwDmz4FUAEQyfpa88`,
      'Bearer'
    )
    return $axios
      .get(
        'https://api.kintohub.com/sportfitservice/places?sw=114.13217668473249%2C22.269075035782254&ne=114.20856331526761%2C22.33879626352389&sports=134&anybuddyorigin=114.1751471%2C22.276022&limit=99'
      )
      .then(res => {
        console.log(res)
        return { message: res.data.data.type }
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
