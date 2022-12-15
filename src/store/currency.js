import axios from 'axios'

export default{
    namespaced : true,
    state: {
        wallet: null,
        rate: null
    },
    getter: {

    },
    mutations: {
        SET_RATE (state, data){
            state.rate = data
        }
    },
    actions: {
        async getLiveRate({ commit },credrentials ){
            let from = credrentials.incomingCurrency.code
            let to = credrentials.outgoingCurrency.code
            
            const REQENDPOINT = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE"
            try{
              const res = await axios({
                method: 'get',
                url: `${REQENDPOINT}&from_currency=${from}&to_currency=${to}&apikey=c2826f0ca8mshe66a64c16286c03p153e61jsnfb319e65115d`,
              })
              if (res.status == 200){
                console.log(res.data)
                commit('SET_RATE', res.data
                )
              }
            } catch (err){
                return err
            }
          
        }




    }
}