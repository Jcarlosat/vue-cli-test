<template>
  <div>
    <input
       name="email"
       v-model="email"
       v-validate="'required|email'"
       :class="{'has-error': errors.has('email')}">
    <p>value: {{ email }}</p>
    <p v-if="errors.has('email')" class="alert-danger">
      {{ errors.first('email') }}
    </p>

    <button @click="register">Register</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    register () {
      this.$validator.validateAll().then(() => {
        alert('Hello, ' + this.email)
      }).catch(() => {
        alert(this.errors.all())
      })
    }
  }
}
</script>

<style>
.alert-danger {
  color: red;
}
.has-error {
  border-color: red;
}
</style>
