<template>
  <div class="hello">
    <notnull-input v-model="price"/>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('notnull-input', {
  template: `
    <div>
      <input
        :value="value"
        @input="$emit('input', $event.target.value)">
      <p v-if="! value">value is null</p>
    </div>
  `,
  props: ['value']
})

export default {
  data () {
    return {price: 100}
  }
}
</script>
