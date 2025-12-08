<template>
  <div class="container border rounded p-5">
    <div class="row row justify-content-center mb-5">
      <div class="col-sm-6">
        <form @submit.prevent="search">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search meals by ingredient"
              v-model="query"
            />
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div v-if="meals.length < 1" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div
        v-else
        class="col-sm-3 mb-4"
        v-for="card in paginatedMeals"
        :key="card.idIngredient"
      >
        <div class="card" style="height: 30rem">
          <div class="my-auto border-0 py-5 px-5 align-items-center">
            <div
              class="card-img-bg"
              :style="{ backgroundImage: `url(${card.strThumb})` }"
            ></div>

            <h1 class="card-title text-bold">
              <router-link
                :to="{
                  name: 'meals',
                  params: { id: card.strIngredient || '1' },
                }"
                class="text-darks text-decoration-none fw-bold"
              >
                {{ card.strIngredient }}
              </router-link>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click="previousPage"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
        >
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
  name: "HomeView",
  components: {},
  data() {
    return {
      currentPage: 1,
      cardsPerPage: 50,
      query: "",
      loading: false,
    };
  },
  computed: {
    meals() {
      return this.$store.state.ings;
    },
    paginatedMeals() {
      const start = (this.currentPage - 1) * this.cardsPerPage;
      const end = start + this.cardsPerPage;
      return this.meals.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.meals.length / this.cardsPerPage);
    },
  },
  created() {
    this.fetchdata();
  },
  methods: {
    async fetchdata() {
      await this.$store.dispatch("fetchIng");
    },
    async search() {
      const payload = { searching: true, query: this.query };
      await this.$store.dispatch("searchIng", payload);
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
    },
  },
};
</script>

<style>
/* Bootstrap styling */
.card {
  border: none;
}
.card-img-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

.card-title {
  position: relative;
  z-index: 2;
  color: #000 !important; /* hitam pekat */
}
.card-title a {
  color: #000 !important;
}
.bggray {
  background-color: #262a2e;
}
</style>
