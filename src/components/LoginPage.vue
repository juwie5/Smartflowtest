<template>
    <div>
          <section>  
             <div class="bg-white w-2/5 p-24">
                      <form @submit.prevent="loginIn">
                          <h4 class="text-base text-black font-medium">Sign in to your account</h4>
                          <div>
                              <input class="sm:[17.75rem] w-full h-12 border-solid border border-gray-300 rounded-lg px-3 mb-5" type="text" name="email" id="email" placeholder="email" v-model="form.email" required >
                              <div class="pass">
                                  <input class="sm:[17.75rem] w-full h-12 border-solid border border-gray-300 rounded-lg px-3 mb-5" type="password" name="password" id="password" placeholder="password" v-model="form.password" required ref="password">
                                  <p class="pass-toggle" v-if="hide" @click="showPassword">SHOW</p>
                                  <p class="pass-toggle" v-if="!hide" @click="showPassword">HIDE</p>
                              </div>                                
                          </div>
                          <div class="flex w-full">
                            <div>
                              <label>Incoming Currency</label>
                              <v-select :options="currency" label="name" v-model="code.incomingCurrency"/> 
                            </div>
                            <div>
                              <label>Outgoing Currency</label>
                              <v-select :options="currency" label="name" v-model="code.outgoingCurrency"/> 
                            </div>
                          </div>
                          
                          <p class="pass-forgot">Forgot Password?</p>
                          <button type="submit" class="btn signin-acct-btn" >Sign in</button>
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
  import currency from '@/utils/currency.js'
  export default {
   name : 'LoginPage',
   data : () => {
    return {
       show: true,
       hide: true,
      form: {
        email: '',
        password: '',
      }, 
      currency,
      code:{
        incomingCurrency: '',
        outgoingCurrency: ''
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
            getLiveRate: 'currency/getLiveRate'
          }),
           loginIn(){
              this.signIn(this.form)
              this.sendRate()
          } , 
          sendRate(){
            this.getLiveRate(this.code)
          }
          
    }
    
  }
</script>
  
  
<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/login';
</style>

<style scoped>
>>> {
  --vs-controls-color: #000000;
  --vs-border-color: "#E5E9F2";

  --vs-dropdown-bg: #fff;
  --vs-dropdown-color: #000000;
  --vs-dropdown-option-color: "#6E717C";

  --vs-selected-bg: "#53FF6E";
  --vs-selected-color: #000000;

  --vs-search-input-color: #000000;

  --vs-dropdown-option--active-bg: "#53FF6E";
  --vs-dropdown-option--active-color: #000000;

  --vs-actions-padding: 16px;
  --vs-border-radius: 8px;
  --vs-font-size: 0.75rem;
}
</style>