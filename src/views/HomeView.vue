<script>
import data from "../data.json"
import NavBarLayout from "../layouts/NavBarLayout.vue"
import HeaderLayout from "../layouts/HeaderLayout.vue"
import FoodList from "../components/FoodList.vue"
import FoodListItem from "../components/FoodListItem.vue"
import SortList from "../components/SortList.vue"

export default {
  components: {
    NavBarLayout,
    HeaderLayout,
    FoodList,
    FoodListItem,
    SortList
  },
  data() {
    return {
      foods: data,
      typeFoods: Object.keys(this.$store.state.categories),
      nameFoods: Object.values(this.$store.state.categories)
    }
  },
  methods: {
    goFood(path) {
      this.$router.push({ name: "food", params: { id: path } })
    }
  },
  computed: {
    storeCounter() {
      return this.$store.state.counter
    },
    sortFoods() {
      return this.foods.filter(f => f.type === this.typeFoods[this.storeCounter - 1])
    },
    foodOfDay() {
      return this.foods.filter(f => f.foodOfDay === true)
    },
    fromTheChief() {
      return this.foods.filter(f => f.fromTheChief === true)
    }
  }
}
</script>

<template>
  <NavBarLayout />
  <div class="wrapper home-wrapp">
    <div class="home">
      <div class="home-outer">
        <HeaderLayout />
        <SortList :storeCounter="storeCounter" :sort="nameFoods" />
      </div>
      <template v-if="storeCounter === 0">
        <FoodList :title="'Блюдо дня'">
          <FoodListItem 
            v-for="(item, index) in foodOfDay" 
            :key="index" 
            :food="item" 
            @click="goFood(item.id)" 
          />
        </FoodList>
        <FoodList :title="'От шефа повара'">
          <FoodListItem 
            v-for="(item, index) in fromTheChief" 
            :key="index" 
            :food="item" 
            @click="goFood(item.id)" 
          />
        </FoodList>
      </template>
      <template v-else-if="storeCounter">
        <FoodList>
          <FoodListItem 
            v-for="(item, index) in sortFoods" 
            :key="index" 
            :food="item" 
            @click="goFood(item.id)" 
          />
        </FoodList>
      </template>
    </div>
  </div>
</template>

<style>
.home-outer {
  margin-bottom: 16px;
}
</style>
