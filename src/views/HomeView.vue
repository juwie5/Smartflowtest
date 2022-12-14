<template>
    <div class="p-12">
        <div class="flex float-right">
            <h3 class="pr-2">User <span class="text-lime-500" >{{user}}</span></h3>
            <h3 class="text-red-500 cursor-pointer" @click="logoutUser">Logout</h3>   
        </div>
    </div>
</template>

<script>
//import axios from 'axios' 
import { mapGetters, mapActions } from 'vuex'

export default{
    name: 'HomeView',
    data: () => {
        return {

        }
    },
    computed:{
    ...mapGetters({
      user : 'auth/user'
    })
    },
    methods:{
        ...mapActions({
        logout : 'auth/logout',
        }),
        logoutUser(){
            this.logout()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>