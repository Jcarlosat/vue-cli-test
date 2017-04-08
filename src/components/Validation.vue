<template>
  <div class="hello">
    <div v-for="account in accounts">
      <input
         v-model="account.email"
         @input="account.validationStarted = true"
         :class="{'has-error': (validationStarted || account.validationStarted ) && getValidationMessage(account, 'required|email')}">
      <p>Inputed: {{ account.email }}</p>
      <p v-if="(validationStarted || account.validationStarted ) && getValidationMessage(account, 'required|email')" class="alert-danger">
        {{ getValidationMessage(account, 'required|email') }}
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
      accounts: [{
        email: '',
        validationStarted: false
      }],
      validationStarted: false
    }
  },
  methods: {
    getValidationMessage (account, rules) {
      var validator = new Validator({
        email: account.email
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
      this.accounts.push({
        email: '',
        validationStarted: false
      })
    },
    register () {
      this.validationStarted = true

      var validationFailed = false
      var validationMessages = []
      this.accounts.forEach(account => {
        var message = this.getValidationMessage(account, 'required|email')
        if (message) {
          validationFailed = true
          validationMessages.push(message)
        }
      })
      if (validationFailed) {
        alert(validationMessages)
        return false
      }
      alert('Hello, ' + this.accounts)
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
