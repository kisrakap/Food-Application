<template>
  <nav>
    <ol>
      <li><router-link to="/">Home</router-link></li>
      <!-- <li v-if="currentRoute.name !== 'home'">
        <router-link :to="{ name: 'meals', params: { id: $route.params.id} }">Meals</router-link>
      </li> -->
      <li v-if="currentRoute.name === 'Mealdetail'">
      {{ route.params.iddetail }}
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    mealName: Object
  },
  computed: {
    currentRoute() {
      return this.$route;
    },
    meal() {
    },
  },
};
</script>
