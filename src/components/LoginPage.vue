<template>
    <div>
          <section>  
             <div class="signup-container">
                      <form action="#">
                          <h4 class="create-acct-title">Sign in to your account</h4>
                          <div>
                              <input type="text" name="email" id="email" placeholder="email" v-model="form.email" required>
                              <div class="pass">
                                  <input type="password" name="password" id="password" placeholder="password" v-model="form.password" required ref="password">
                                  <p class="pass-toggle" v-if="hide" @click="showPassword">SHOW</p>
                                  <p class="pass-toggle" v-if="!hide" @click="showPassword">HIDE</p>
                              </div>
                          </div>
                          <p class="pass-forgot">Forgot Password?</p>
                          <button type="button" class="btn signin-acct-btn" @click="loginIn">Sign in</button>
                          <p class="dont-have-acct">
                              <router-link to="/signup">Create account</router-link> 
                              if you don't have an account.
                          </p>
                      </form>
                  </div>       
  
          </section>
    </div>
</template>
  
  
<script>
  import { mapActions } from 'vuex'
  import { show }  from '@/services/show.js'
  export default {
   name : 'LoginPage',
   data : () => {
    return {
       show: true,
       hide: true,
      form: {
        email: '',
        password: '',
      }
    }
   },
    methods:{
          showPassword(){
                  show()
                  this.hide = !this.hide    
          },
          ...mapActions({
            signIn: 'auth/signIn',
          }),
           loginIn(){
              this.signIn(this.form)
          }  
    }
    
  }
</script>
  
  
<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/login';
</style>