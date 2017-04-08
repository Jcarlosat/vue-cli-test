<template>
  <div class="hello">

    <input
       name="email"
       v-model="account.email"
       v-validate="'required|email'"
       :class="{'has-error': errors.has('email')}">
    <p>value: {{ account.email }}</p>
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
      account: {
        email: ''
      }
    }
  },
  methods: {

    addAccount () {
      this.accounts.push({
        email: '',
        validationStarted: false
      })
    },

    register () {
      this.$validator.validateAll().then(() => {
        alert('Hello, ' + this.accounts)
      }).catch(() => {
        alert(this.errors.all())
        return false
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
