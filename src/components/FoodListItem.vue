<script>
import WeightIcon from './Icons/WeightIcon.vue';
import ClockIcon from './Icons/ClockIcon.vue';

export default {
  components: {
    WeightIcon,
    ClockIcon
  },
  props: ["title", "counter", "food"],
  methods: {
    goHome(payload) {
      if (this.title && typeof this.counter === "number") {
        this.$store.commit("handleCounter", (payload + 1))
        this.$router.push("/")
      }
    }
  }
}
</script>

<template>
  <div class="food-item" @click="goHome(counter)">
    <div class="food-item-wrapp">
      <div class="food-item-outer"></div>
    </div>
    <div class="food-item-desc">
      <template v-if="title">
        <span class="food-item-title">
          {{ title }}
        </span>
      </template>
      <template v-else>
        <span class="food-item-name">
          {{ food.name }}
        </span>
        <div class="food-item-subdesc">
          <span>
            <WeightIcon /> {{ food.weight }} г.
          </span>
          <span>
            <ClockIcon /> {{ food.time }} мин.
          </span>
        </div>
        <span class="food-item-price">
          {{ food.price }}₽
        </span>
      </template>
    </div>
  </div>
</template>

<style>
.food-item {
  flex-basis: calc(50% - 5px);
  padding: 14px;
  border-radius: 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.food-item-wrapp {
  position: relative;
  width: 100%;
  padding-top: 90%;
  margin-bottom: 10px;
}

.food-item-outer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: var(--layout-gray);
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.2);
}

.food-item-title,
.food-item-name,
.food-item-price {
  font-size: 14px;
  font-weight: bold;
  color: var(--layout-black);
}

.food-item-title {
  display: block;
  text-align: center;
}

.food-item-subdesc {
  font-size: 10px;
  display: flex;
  gap: 10px;
}

.food-item-subdesc span {
  display: flex;
  align-items: flex-start;
  gap: 5px;
  color: var(--layout-black);
}

.food-item-subdesc span svg {
  width: 10px;
}
</style>
