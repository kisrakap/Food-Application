import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  state: {
    ings : [],
    meals : [],
    meal : {}, 
    temp : []
  },
  getters: {
  },
  mutations: {
    setIngs(state, payload) {
        state.ings = payload;
        state.temp = payload
    },
    setSearchIngs(state, payload){
      console.log(payload)
      if (payload.query !== '') {
        const ings = state.temp.filter(item => item.strIngredient.toLowerCase().includes(payload.query.toLowerCase()))
        state.ings = ings
      } else {
        state.ings = []
        console.log('masuk sini')
        state.ings = temp
      }
    },
    setMeals(state, payload) {
      state.meals = payload;
    },
    reset(state) {
      state.ings = state.temp
    }
  },
  actions: {
    fetchIng(context) {
      Axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list', 
       {
       headers: {
         'accept': '*/*',
         'Content-Type': 'application/json'
       }})
       .then((resp) => {
        const ings = resp.data?.meals
        context.commit('setIngs', ings)
       })
       .catch((err) => {
        console.error(err)
      })
    }, 
    search(context, payload) {
      console.log(payload)
      Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${payload}`)
        .then(resp => {
          const meals = resp.data.meals
          context.commit('setMeals', meals)
        })
        .catch(error => {
          console.error(error)
        })
    },
    searchIng(context, payload) {
      if(payload.query === "") {
        context.commit('reset', payload)
      } else {
        context.commit('setSearchIngs', payload)
       }
    },
    fetchMeals(context, payload) {
      Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${payload}`)
      .then(resp => {
        const meals = resp.data.meals
        context.commit('setMeals', meals)

      })
      .catch(error => {
        console.error(error)
      })
    }
  }
})
