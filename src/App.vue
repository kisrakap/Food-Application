<template>
  <header class="mb-3 pl-5 fluid position-static">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="#">My Website</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="m-0 pl-5">
    <nav aria-label="breadcrumbm-0 p-0">
    <ol class="breadcrumb m-0 pl-5">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li v-if="$route.path !== '/'" class="breadcrumb-item">
        <router-link to="/meals">Meals</router-link>
      </li>
      <li v-if="$route.path.includes('/meals/')" class="breadcrumb-item active" aria-current="page">
        {{ mealName }}
      </li>
    </ol>
  </nav></div>
  <router-view/>
  <footer class="bg-dark text-light py-3 position-static">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5 class="mb-3">Contact Us</h5>
          <ul class="list-unstyled">
            <li>Address: Jl. Sudirman No. 123</li>
            <li>Phone: 0123-456-789</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h5 class="mb-3">Visit Us</h5>
          <ul class="list-unstyled">
            <li><a href="#">Website</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>&copy; 2023 My Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  computed: {
    mealName() {
      if (this.$route.params.id) {
        return this.$store.state.meals.find(
          (meal) => meal.idMeal === this.$route.params.id
        ).strMeal;
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-left: 10%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
