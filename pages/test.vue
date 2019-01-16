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
    return $axios
      .get('https://sportplaces-api-staging.herokuapp.com/api/v1/sports')
      .then(res => {
        return { message: 'yay' }
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
