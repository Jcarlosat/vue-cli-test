<template>
  <div class="hello">
    <div v-for="account in accounts">
      <input v-model="account.email" :class="{'has-error': getValidationMessage(account.email, 'required|email')}">
      <p>Inputed: {{ account.email }}</p>
      <p v-if="getValidationMessage(account.email, 'required|email')" class="alert-danger">
        {{ getValidationMessage(account.email, 'required|email') }}
      </p>
    </div>

    <button @click="addAccount">Add Account</button>

    <button @click="register">Register</button>
  </div>
</template>

<script>
import Validator from 'validatorjs'

export default {
  data () {
    return {
      accounts: [{email: ''}]
    }
  },
  methods: {
    getValidationMessage (value, rules) {
      var validator = new Validator({
        email: value
      }, {
        email: rules
      })

      if (validator.check()) {
        return null
      } else {
        return validator.errors.first('email')
      }
    },
    addAccount () {
      this.accounts.push({email: ''})
    },
    register () {
      var message = this.getValidationMessage(this.accounts[0].email, 'required|email')
      if (message) {
        alert(message)
        return false
      }
      alert('Hello, ' + this.email)
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
