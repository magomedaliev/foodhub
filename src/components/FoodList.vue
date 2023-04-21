<script>
export default {
  props: ["title"],
  data() {
    return {
      nowrap: { nowrap: this.title ? true : false }
    }
  }
}
</script>

<template>
  <div class="food-list">
    <h3 v-if="title">
      {{ title }}
    </h3>
    <div class="food-list-outer" :class="nowrap">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.food-list {
  margin-bottom: 30px;
}

.food-list-outer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.food-list-outer.nowrap {
  flex-wrap: nowrap;
  overflow: auto;
}

.food-list-outer.nowrap .food-item {
  min-width: 180px;
}

.food-list h3 {
  display: block;
  font-size: 18px;
  margin-bottom: 15px;
}
</style>
