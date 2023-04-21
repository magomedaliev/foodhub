<script>
export default {
  props: ["food", "history"],
  methods: {
    Increment(foodItem) {
      foodItem.count += 1
    },
    Decrement(foodItem) {
      if (foodItem.count > 1) {
        foodItem.count -= 1
      }
    },
    removeItem(foodItem) {
      this.$store.state.cartItems = this.$store.state.cartItems.filter(f => f.id !== foodItem.id)
    }
  }
}
</script>

<template>
  <div class="cart-item">
    <button v-if="!history" class="cart-item-remove" @click="removeItem(food)">
      <span>
        +
      </span>
    </button>
    <div class="cart-item-cover">
    </div>
    <div class="cart-item-outer">
      <div class="cart-item-outer-desc">
        <span>
          {{ food.name }}
        </span>
        <span>
          {{ food.weight }} г.
        </span>
      </div>
      <div class="cart-item-outer-price-wrapp">
        <span class="cart-item-outer-price">
          {{ food.price * food.count }}₽
        </span>
        <div v-if="!history" class="cart-item-outer-price-actions">
          <button @click="Decrement(food)">
            -
          </button>
          <span>
            <b v-show="food.count < 10">0</b>{{ food.count }}
          </span>
          <button @click="Increment(food)">
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cart-item {
  position: relative;
  display: flex;
  margin-bottom: 20px;
}

.cart-item-cover {
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  margin-right: 20px;
  border-radius: 20px;
  background-color: var(--layout-gray);
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.2);
}

.cart-item-remove {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  outline: none;
  border: none;
  background: transparent;
  color: var(--layout-orange);
}

.cart-item-remove span {
  transform: rotate(45deg);
}

.cart-item-outer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.cart-item-outer-desc span {
  display: block;
}

.cart-item-outer-desc span:first-child {
  font-size: 16px;
  font-weight: bold;
}

.cart-item-outer-desc span:last-child {
  font-size: 16px;
  color: var(--layout-gray);
}

.cart-item-outer-price-wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item-outer-price {
  font-size: 14px;
  font-weight: bold;
  color: var(--layout-orange);
}

.cart-item-outer-price-actions {
  display: flex;
  align-items: center;
  gap: 7px;
}

.cart-item-outer-price-actions span {
  font-size: 16px;
  font-weight: bold;
}

.cart-item-outer-price-actions button {
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

.cart-item-outer-price-actions button:last-child {
  background-color: var(--layout-orange);
  color: #FFFFFF;
}
</style>
