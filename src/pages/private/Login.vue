<template>
  <div class="form--wrapper">
    <form @submit.prevent="submitLoginFormData()" class="form">
      <FormTitle title="Login" />
      <FormFieldset>
        <div v-show="false">
          <FormInput
            typeName="email"
            :valueName="loginFormData[0].email"
            isRequired="true"
            autocompleteName="email"
          />
        </div>
        <FormLabel forName="login-form-password-input" title="Password" />
        <FormInput
          typeName="password"
          placeholderName="Password"
          :valueName="loginFormData[0].password"
          idName="login-form-password-input"
          isRequired="true"
          v-model="loginFormData[0].password"
          autocompleteName="current-password"
        />
      </FormFieldset>
      <FormFieldset>
        <FormButton text="Login" typeName="submit" />
      </FormFieldset>
    </form>
  </div>
</template>

<script>
import { auth } from '@/main'

export default {
  name: 'PagePrivateLogin',
  components: {
    FormTitle: () => import('@/components/form/Title'),
    FormFieldset: () => import('@/components/form/Fieldset'),
    FormLabel: () => import('@/components/form/Label'),
    FormInput: () => import('@/components/form/Input'),
    FormButton: () => import('@/components/form/Button')
  },
  data() {
    return {
      isAdminLoggedIn: false, // Is the admin logged in?
      loginFormData: [
        {
          email: 'admin@cass-theatre.web.app', // Login email form data
          password: '' // Login password form data
        }
      ]
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/admin')
      }
    })
  },
  methods: {
    submitLoginFormData() {
      auth
        .signInWithEmailAndPassword(this.loginFormData[0].email, this.loginFormData[0].password)
        .then((user) => {
          this.$router.push('/admin')
        }).catch(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>
