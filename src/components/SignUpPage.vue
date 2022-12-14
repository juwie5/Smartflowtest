<template>
    <div>
        <section>
             <div class="signup-container">
                <form @submit.prevent="reqUser">
                    <h4 class="create-acct-title">Create your account</h4>
                    <p class="create-acct-paragraph">Fill the form below to register</p>
                    <input type="text" name="username"  placeholder="Firstname" v-model="form.username" maxlength="30" required>
                    <input type="email" name="email" placeholder="Email address" v-model="form.email" required>
                    <div class="pass">
                            <input type="password" name="password" id="password" placeholder="Password" v-model="form.password" required ref="password">
                            <p class="pass-toggle" v-if="hide" @click="showPassword">SHOW</p>
                            <p class="pass-toggle" v-if="!hide" @click="showPassword">HIDE</p>
                        </div>
                    <button type="submit" class="btn create-acct-btn">Create account</button>
                    <p><router-link class="acct" to="/">Sign in</router-link> if you already have an account.</p>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { show } from "@/services/show.js"
export default {
    name : 'SignUpPage',
    data: () => {
        return {
           form: {
            email: '',
            username: '',
            password: '',
        },
        show: true,
        hide: true                                   
     }
    },
    methods:{
        showPassword(){
            show()
            this.hide = !this.hide 
        },
        ...mapActions({
            signUp: 'auth/signUp'
        }),
        reqUser(){
            this.signUp(this.form)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/login';
</style>