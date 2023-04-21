<script>
import NavBarLayout from "../layouts/NavBarLayout.vue"
import BackButton from "../components/BackButton.vue"
import CartItem from "../components/CartItem.vue"

export default {
  components: {
    NavBarLayout,
    BackButton,
    CartItem
  },
  data() {
    return {
      isActive: true,
      day: new Date().getUTCDate(),
      month: new Date().getUTCMonth() + 1,
      year: new Date().getUTCFullYear()
    }
  },
  methods: {
    acceptOrder() {
      if (this.$store.state.cartItems.length) {
        this.$store.state.historyCartItems.push({
          cartItems: [...this.$store.state.cartItems],
          totalItems: this.totalItems,
          totalPrice: this.totalPrice,
          time: this.currentDate
        })

        this.$store.state.cartItems.length = 0
        this.isActive = false
      }
    }
  },
  computed: {
    wrapp() {
      return { "cart-wrapp": this.isActive }
    },
    currentDate() {
      return `${this.day}.${this.month >= 10 ? this.month : "0" + this.month}.${this.year}`
    },
    totalItems() {
      return this.$store.state.cartItems.length
    },
    totalPrice() {
      return this.$store.state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.count
      }, 0)
    }
  }
}
</script>

<template>
  <NavBarLayout />
  <button v-if="totalItems" class="btn-accept-order" @click="acceptOrder">
    Вызвать официанта
  </button>

  <div class="wrapper" :class="wrapp">
    <div class="cart">
      <div class="cart-title">
        <BackButton />
        <h3 class="title">
          Заказ
        </h3>
      </div>
      <div class="cart-container">
        <div class="cart-sort">
          <span :class="isActive ? 'active' : ''" @click="() => isActive = true">
            К заказу
          </span>
          <span :class="isActive ? '' : 'active'" @click="() => isActive = false">
            История
          </span>
        </div>
        <div class="cart-list" :class="isActive ? '' : 'reverse'">
          <template v-if="isActive">
            <CartItem v-for="(item, index) in this.$store.state.cartItems" :key="index" :food="item" />
            <div class="cart-list-total">
              <span>
                Всего <b>({{ totalItems }} позиции)</b>
              </span>
              <span>
                {{ totalPrice }}₽
              </span>
            </div>
          </template>
          <template v-else>
            <template v-if="this.$store.state.historyCartItems.length">
              <div v-for="(item, index) in this.$store.state.historyCartItems" :key="index">
                <CartItem v-for="(el, i) in item.cartItems" :key="i" :food="el" :history="true" />
                <div class="cart-list-total">
                  <span>
                    Заказ от {{ item.time }} <b>({{ item.totalItems }} позиции)</b>
                  </span>
                  <span>
                    {{ item.totalPrice }}₽
                  </span>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper.cart-wrapp {
  padding-bottom: calc(var(--height-navbar) + 120px);
}

.btn-accept-order {
  font-size: 14px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 110px;
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: var(--layout-orange);
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  color: #FFFFFF;
  z-index: 100;
}

.cart-title {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
}

.cart-sort {
  font-size: 14px;
  display: flex;
  justify-content: center;
  color: var(--layout-gray);
  gap: 40px;
  margin-bottom: 30px;
}

.cart-sort span.active {
  font-weight: bold;
  color: var(--layout-black);
}

.cart-list.reverse {
  display: flex;
  flex-direction: column-reverse;
}

.cart-list-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
  margin-bottom: 60px;
  border-top: 1px solid var(--layout-gray);
}

.cart-list-total b {
  font-size: 14px;
  font-weight: normal;
  color: var(--layout-gray);
}
</style>
