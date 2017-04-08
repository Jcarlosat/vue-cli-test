<template>
  <div class="hello">
    <div v-for="(account, i) in accounts">
      <input
         :name="'email' + i"
         v-model="account.email"
         v-validate="'required|email'"
         :class="{'has-error': errors.has('email' + i)}">
      <p>value: {{ account.email }}</p>
      <p v-if="errors.has('email' + i)" class="alert-danger">
        {{ errors.first('email' + i) }}
      </p>
    </div>

    <button @click="addAccount">Add Account</button>

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
      accounts: [{
        email: ''
      }]
    }
  },
  methods: {

    addAccount () {
      this.accounts.push({
        email: ''
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
