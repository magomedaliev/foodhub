<script>
export default {
  props: ["storeCounter", "sort"],
  data() {
    return {
      sortItems: ["Главная", ...this.sort]
    }
  },
  methods: {
    changeCounter(payload) {
      this.$store.commit("handleCounter", payload)
    }
  }
}
</script>

<template>
  <div class="sort">
    <span 
      class="sort-item" 
      :class="storeCounter === index ? 'active' : ''"
      v-for="(item, index) in sortItems" 
      :key="index" 
      @click="changeCounter(index)"
    >
      {{ item }}
    </span>
  </div>
</template>

<style>
.sort {
  padding-bottom: 10px;
  overflow-x: auto;
}

.sort-item {
  font-size: 16px;
  color: var(--layout-gray);
  user-select: none;
}

.sort-item.active {
  color: var(--layout-black);
}

.sort-item:not(:first-child) {
  margin-left: 38px;
}
</style>
