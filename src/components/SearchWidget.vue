<script>
import data from "../data.json"
import SearchIcon from "./Icons/SearchIcon.vue"

export default {
  components: {
    SearchIcon
  },
  data() {
    return {
      foods: data,
      searchValue: "",
      isActive: false
    }
  },
  methods: {
    goFood(path) {
      this.$router.push({ name: "food", params: { id: path } })
    },
    searchFocus() {
      this.isActive = true
    },
    removeFocus() {
      this.isActive = false
    }
  },
  computed: {
    searchList() {
      if (this.searchValue.trim().toLowerCase().length > 0) {
        return this.foods.filter(f => {
          return f.name.toLowerCase().includes(this.searchValue.trim().toLowerCase())
        })
      }
    }
  }
}
</script>

<template>
  <div class="search">
    <div class="search-wrapp">
      <div class="search-outer">
        <SearchIcon />
        <input 
          class="search-field" 
          type="search" 
          placeholder="Что вы хотите заказать?"
          v-model="searchValue" 
          @focus="searchFocus" 
        >
      </div>
      <div v-if="isActive" class="search-list">
        <div class="search-list-outer">
          <div v-for="(item, index) in searchList" class="search-item" :key="index" @click="goFood(item.id)">
            <div class="search-item-cover">
            </div>
            <div class="search-item-outer">
              <div class="search-item-outer-desc">
                <span>
                  {{ item.name }}
                </span>
                <span>
                  {{ item.weight }} г.
                </span>
              </div>
              <div class="search-item-outer-price-wrapp">
                <span class="search-item-outer-price">
                  {{ item.price }}₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isActive" class="search-cover" @click="removeFocus">
    </div>
  </div>
</template>

<style>
.search-wrapp {
  position: relative;
}

.search-outer {
  position: relative;
  z-index: 2999;
}

.search-outer svg {
  position: absolute;
  top: 50%;
  transform: scale(1.2) translateY(-50%);
  left: 18px;
}

.search-field {
  font-size: 16px;
  width: 100%;
  padding: 21px 18px;
  padding-left: 42px;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.05);
}

.search-field::placeholder {
  color: var(--layout-black);
  opacity: 0.5;
}

.search-list {
  position: absolute;
  top: calc(100% - 20px);
  width: 100%;
  padding: 10px;
  z-index: 2599;
}

.search-list-outer {
  width: 100%;
  max-height: 320px;
  padding: 10px;
  padding-top: 20px;
  background-color: #FFFFFF;
  border-radius: 0px 0px 15px 15px;
  overflow-y: auto;
}

.search-item {
  display: flex;
  margin-bottom: 10px;
}

.search-item-cover {
  min-width: 60px;
  min-height: 60px;
  max-width: 60px;
  max-height: 60px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: var(--layout-gray);
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.2);
}

.search-item-outer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.search-item-outer-desc span {
  display: block;
}

.search-item-outer-desc span:first-child {
  font-size: 14px;
  font-weight: bold;
}

.search-item-outer-desc span:last-child {
  font-size: 12px;
  color: var(--layout-gray);
}

.search-item-outer-price-wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-item-outer-price {
  font-size: 14px;
  font-weight: bold;
  color: var(--layout-orange);
}

.search-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--layout-black);
  opacity: 0.5;
  z-index: 1999;
}
</style>
