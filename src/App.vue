<template>
  <div id="app">
    <div class="navigation">
      <router-link to="/">hello</router-link>
      <router-link to="/select">select</router-link>
      <router-link to="/validation">validation</router-link>
      <router-link to="/child-model">child-model</router-link>
      <router-link to="/vee-validation">vee-validation</router-link>
      <router-link to="/vee-validation-simple">vee-validation-simple</router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
