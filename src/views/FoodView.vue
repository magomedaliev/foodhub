<script>
import data from "../data.json"
import BackButton from "../components/BackButton.vue"
import FoodList from "../components/FoodList.vue"
import FoodListItem from "../components/FoodListItem.vue"
import WeightIcon from '../components/Icons/WeightIcon.vue';
import RatingIcon from '../components/Icons/RatingIcon.vue';
import ClockIcon from '../components/Icons/ClockIcon.vue';
import CartIcon from '../components/Icons/CartIcon.vue';

export default {
  components: {
    BackButton,
    FoodList,
    FoodListItem,
    WeightIcon,
    RatingIcon,
    ClockIcon,
    CartIcon
  },
  data() {
    return {
      count: 1,
      food: null,
      foodAlso: null
    }
  },
  methods: {
    Increment() {
      this.count += 1
    },
    Decrement() {
      if (this.count > 1) {
        this.count -= 1
      }
    },
    addCart() {
      if (!this.$store.state.cartItems.find(f => f.id == this.$route.params.id)) {
        this.$store.state.cartItems.push({
          id: this.$route.params.id,
          name: this.food.name,
          type: this.food.type,
          price: this.food.price,
          weight: this.food.weight,
          count: this.count
        })
      } else {
        alert("Заказ уже добавлен")
      }
      this.count = 1
      this.$router.push("/")
    },
    goFood(path) {
      window.scroll(0, 0)
      this.$router.push({ name: "food", params: { id: path } })
      this.food = data.find(food => food.id == path)
      this.foodAlso = data.filter(f => f.type === this.food.type).filter(f => f.id !== path)
      this.count = 1
    }
  },
  created() {
    window.scroll(0, 0)
    const foodData = data.find(food => food.id == this.$route.params.id)
    if (foodData) {
      this.food = foodData
      this.foodAlso = data.filter(f => f.type === foodData.type).filter(f => f.id !== foodData.id)
    }
  }
}
</script>

<template>
  <button class="btn-add-cart" @click="addCart">
    <div>
      <CartIcon />
    </div>
    <span>
      Добавить заказ
    </span>
  </button>

  <div class="wrapper food-wrapp">
    <div class="food">
      <div class="food-cover">
        <div class="food-cover-outer">
          <BackButton />
        </div>
        <template v-if="food.type === 'salad'">
          <img src="../assets/salad.png" alt="image">
        </template>
        <template v-else-if="food.type === 'drink'">
          <img src="../assets/drink.png" alt="image">
        </template>
        <template v-else-if="food.type === 'dessert'">
          <img src="../assets/dessert.png" alt="image">
        </template>
        <template v-else-if="food.type === 'breakfast'">
          <img src="../assets/breakfast.png" alt="image">
        </template>
      </div>
      <div class="food-desc">
        <h2>
          {{ food.name }}
        </h2>
        <div class="food-subdesc">
          <span>
            <RatingIcon /> <b>{{ food.rating }}</b> (30+)
          </span>
          <span>
            <WeightIcon /> {{ food.weight }} г.
          </span>
          <span>
            <ClockIcon /> {{ food.time }} мин.
          </span>
        </div>
        <span class="food-price-wrapp">
          <span class="food-price">
            {{ food.price }}<span>₽</span>
          </span>
          <div class="food-price-actions">
            <button @click="Decrement">-</button>
            <span>
              <b v-show="count < 10">0</b>{{ count }}
            </span>
            <button @click="Increment">+</button>
          </div>
        </span>
        <p class="food-text">
          {{ food.desc }}
        </p>
      </div>
      <div class="food-also">
        <h3>
          С этим заказывают
        </h3>
        <FoodList>
          <FoodListItem v-for="(item, index) in foodAlso" :key="index" :food="item" @click="goFood(item.id)" />
        </FoodList>
      </div>
    </div>
  </div>
</template>

<style>
.btn-add-cart {
  font-size: 14px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px;
  padding-right: 16px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: var(--layout-orange);
  color: #FFFFFF;
  z-index: 100;
}

.btn-add-cart div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFFFFF;
}

.btn-add-cart div svg {
  transform: scale(0.7);
}

.btn-add-cart div svg path {
  fill: var(--layout-orange);
}

.food-cover {
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: var(--layout-gray);
  overflow: hidden;
}

.food-cover img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.food-cover-outer {
  position: relative;
  top: 0;
  left: 0;
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  margin: 12px;
}

.food-cover-outer button {
  z-index: 100;
}

.food-desc {
  margin-bottom: 30px;
}

.food-desc h2,
.food-price {
  font-size: 24px;
  font-weight: bold;
}

.food-subdesc {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0px;
}

.food-subdesc span {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  color: var(--layout-gray);
}

.food-subdesc span b {
  color: var(--layout-black);
}

.food-subdesc span svg {
  width: 20px;
}

.food-price-wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.food-price {
  color: var(--layout-orange);
}

.food-price span {
  font-size: 16px;
}

.food-price-actions {
  display: flex;
  align-items: center;
  gap: 7px;
}

.food-price-actions span {
  font-size: 16px;
  font-weight: bold;
}

.food-price-actions button {
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  outline: none;
  border: 1px solid var(--layout-orange);
  border-radius: 50%;
  background-color: transparent;
  color: var(--layout-orange);
}

.food-price-actions button:last-child {
  background-color: var(--layout-orange);
  color: #FFFFFF;
}

.food-text {
  font-size: 16px;
  font-weight: bold;
  color: var(--layout-gray);
}

.food-also h3 {
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
