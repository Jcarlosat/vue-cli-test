<template>
  <div class="hello">
    <select v-model="company.area_id">
      <option v-for="option in options" v-bind:value="option.id">
        {{ option.name }}
      </option>
    </select>
    <span>Selected: {{ company.area_id }}</span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      company: {
        area_id: 0
      }
    }
  },
  created () {
    axios.get('/static/areas.json').then(res => { this.options = res.data.areas })
    axios.get('/static/company.json').then(res => { this.company = res.data.company })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
