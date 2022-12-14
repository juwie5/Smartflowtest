import axios from 'axios'
import router from '../router/index'


export default{
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
      authenticated(state){
        return state.user
    },
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_USER (state, token){
            state.user = token 
          },
      
    },
    actions: {
        async signIn({ commit }, credrentials){
            let username = credrentials.email
            let password = credrentials.password
            const REQENDPOINT = "https://reqres.in/api/login"
            try{
                const res = await axios({
                  method: 'post',
                  url: `${REQENDPOINT}`,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data: {
                    username : username,
                    password: password
                  }
                }) 
                if(res.status == 200){
                  router.push('/home')
                  console.log(res.data)
                  commit('SET_USER', res.data.token)
                  
                } else {
                  return null 
                }
            } catch (err){
              return err
            }
      },
      async signUp({dispatch},credrentials){
              
            let email = credrentials.email
            let firstname = credrentials.firstname
            let password = credrentials.password

            const SIGNENDPOINT  = "https://reqres.in/api/register"
            try{
              const res = await axios({
                method: 'post',
                url: `${SIGNENDPOINT}`,
                headers:{
                  'Content-Type': 'application/json'
                },
                data: {
                  email: email,
                  username: firstname,
                  password: password,
                }
              })
              if(res.status == 200){
                dispatch('signIn', credrentials);
              } else {
                return null
              }
            }catch(err){
              return err
            }
      },
     async logout({commit}){

        const SIGNENDPOINT  = "https://reqres.in/api/logout"
        try {
            const res = await axios ({
                method: 'post',
                url: `${SIGNENDPOINT}`,
                headers: {
                  'Content-Type': 'application/json'
                },
            }) 
            if(res.status == 200){
                commit('SET_USER', 'null')
                router.push('/')
            }    
        } catch (err){
            return err
        }  
      },
    }
}