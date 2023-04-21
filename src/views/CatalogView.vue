<script>
import NavBarLayout from "../layouts/NavBarLayout.vue"
import HeaderLayout from "../layouts/HeaderLayout.vue"
import FoodList from "../components/FoodList.vue"
import FoodListItem from "../components/FoodListItem.vue"

export default {
  components: {
    NavBarLayout,
    HeaderLayout,
    FoodList,
    FoodListItem
  },
  data() {
    return {
      nameFoods: Object.values(this.$store.state.categories)
    }
  }
}
</script>

<template>
  <NavBarLayout />
  <div class="wrapper catalog-wrapp">
    <div class="catalog">
      <HeaderLayout />
      <FoodList>
        <FoodListItem 
          v-for="(item, index) in nameFoods" 
          :key="index" 
          :title="item" 
          :counter="index" 
        />
      </FoodList>
    </div>
  </div>
</template>
