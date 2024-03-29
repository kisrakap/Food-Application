import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  state: {
    ings : [],
    meals : [],
    meal : {}, 
    temp : [],
    loading : false
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
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {
    fetchIng(context) {
      context.commit('setLoading', true)
      Axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list', 
       {
       headers: {
         'accept': '*/*',
         'Content-Type': 'application/json'
       }})
       .then((resp) => {
        const ings = resp.data?.meals
        context.commit('setIngs', ings)
        context.commit('setLoading', false)
       })
       .catch((err) => {
        console.error(err)
        context.commit('setLoading', false)
      })
    }, 
    search(context, payload) {
      // console.log(payload)
      context.commit('setLoading', true)
      Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${payload}`)
        .then(resp => {
          const meals = resp.data.meals
          context.commit('setMeals', meals)
      context.commit('setLoading', false)

        })
        .catch(error => {
          console.error(error)
      context.commit('setLoading', false)

        })
    },
    searchIng(context, payload) {
      context.commit('setLoading', true)
      if(payload.query === "") {
        context.commit('reset', payload)
      context.commit('setLoading', false)
      } else {
        context.commit('setSearchIngs', payload)
      context.commit('setLoading', false)
       }
    },
    fetchMeals(context, payload) {
      context.commit('setLoading', true)
      Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${payload}`)
      .then(resp => {
        const meals = resp.data.meals
        context.commit('setMeals', meals)
      context.commit('setLoading', false)


      })
      .catch(error => {
        console.error(error)
        context.commit('setLoading', false)
      })
    }
  }
})
