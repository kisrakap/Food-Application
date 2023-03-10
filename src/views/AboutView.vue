<template>
  <div class="container p-5 rounded border">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <form @submit.prevent="search">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search meals by ingredient" v-model="query" />
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
      </div>
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-3 mb-4" v-for="card in meals" :key="card.idMeal">
            <div class="card" @click.prevent="gotodetail(card.idMeal)">
              <img :src="card.strMealThumb" class="card-img-top" style="opacity: 0.5;" :alt="card.strMeal" />
              <div class="card-body card-img-overlay d-flex align-items-center text-decoration-none">
                <h5 class="card-title text-dark text-decoration-none fw-bold">
                    {{ card.strMeal }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'


export default {

  data() {
    return {
      query : ''
    }
  },
  created() {
    this.fetchMeals()
  },
  computed: {
    meals () {
      return this.$store.state.meals
    },
  },
  methods : {
    async fetchMeals() {
      const mealId = this.$route.params.id
      await this.$store.dispatch('fetchMeals', mealId)
    },
    async search() {
      const payload = this.query
      await this.$store.dispatch('search', payload)
    },

    gotodetail(id) {
      this.$router.push({ name: 'mealDetail', params: { iddetail: id } })
    }
  }
}
</script>
