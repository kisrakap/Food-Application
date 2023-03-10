<template>
  <div class="container border rounded p-5">
    <div class="row row justify-content-center mb-5">
      <div class="col-sm-6">
        <form @submit.prevent="search">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search meals by ingredient" v-model="query" />
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 mb-4" v-for="card in meals" :key="card.idIngredient">
        <div class="card" style="height: 9rem;">
          <div class="card-img-overlay my-auto py-auto align-items-center">
            <h3 class="card-title">
              <router-link :to="{ name: 'meals', params: { id: card.strIngredient || '1' } }" class="text-dark">
                {{ card.strIngredient }}
              </router-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click="previousPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
          <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" aria-label="Next" @click="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      currentPage: 1,
      cardsPerPage: 50,
      query: ''
    };
  },
  computed: {
    meals () {
      return this.$store.state.ings
    },
    totalPages() {
    const totalCards = this.meals.length;
    return Math.ceil(totalCards / this.cardsPerPage);
  }
  },
  created(){
    this.fetchdata()
  },
  methods : {
    async fetchdata() {
      await this.$store.dispatch('fetchIng')
    },
    async search() {
      const payload = {searching : true, query : this.query}
      await this.$store.dispatch('searchIng', payload)
  },
  changePage(pageNumber) {
    this.currentPage = pageNumber;
  },
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  },
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }



  }
}
</script>

<style>
/* Bootstrap styling */
.card {
  border: none;
}

.bggray {
  background-color: #262a2e;
}
</style>
