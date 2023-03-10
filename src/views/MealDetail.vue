<template>
  <div class="container border rounded">
    <div class="row justify-content-center">
      <div class="col-sm-12 p-5">
        <div class="row">
            <div class="text-start"> 
              <h1 class="text-start p-4">{{meal.strMeal}}</h1>
            
              <div class="row mt-5">
                <div class="col"> 
                  <img :src="meal.strMealThumb" class="card-img-top" :alt="meal.strMeal" />
                </div>
                <div class="col text-left">
                  <div>
                    <h3 class="text-left">Instruction</h3>
                    <p v-for="(paragrap, index) in paragraph" :key="index">{{ paragrap}}.</p>
                  </div>
                  <div>
                    <h3>Ingredients</h3>
                    <div class="text-left" v-for="(ing, index) in filteredArr" :key="index">
                      <span v-show="ing !== ''"> {{ing}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="row mt-4">
          <div>
            <section>
              <video ref="player" class="w-100" autoplay controls>
                <source :src="meal.strYoutube" type="video/mp4">
              </video>
            </section>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      meal: {},
      filteredArr : [],
      paragraph : []
    }
  },
  created() {
    const mealId = this.$route.params.iddetail
    axios.get(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${mealId}`)
      .then(resp => {
        console.log(resp.data)
        this.meal = resp.data.meals[0]
        for (let i = 1; i <= 20; i++) {
            const ingredient = this.meal[`strIngredient${i}`];
            const measure = this.meal[`strMeasure${i}`];
            if (ingredient) {
            this.filteredArr.push(`${measure} ${ingredient}`)
          }
          this.paragraph= this.meal.strInstructions.split('. ')
      }
      })
      .catch(error => {
        console.error(error)
      })
  },
}
</script>
