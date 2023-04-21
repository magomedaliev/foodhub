<script>
export default {
  data() {
    return {
      mediaValue: null,
      mediaQuery: window.matchMedia("(max-width: 550px)")
    }
  },
  methods: {
    handleMatchMedia(event) {
      this.mediaValue = event.matches
    }
  },
  mounted() {
    this.mediaValue = this.mediaQuery.matches
    this.mediaQuery.addEventListener("change", this.handleMatchMedia)
  },
  unmounted() {
    this.mediaQuery.removeEventListener("change", this.handleMatchMedia)
  }
}
</script>

<template>
  <template v-if="mediaValue">
    <RouterView />
  </template>
  <template v-else>
    <div class="stopper">
      <div class="stopper-outer">
        <h1>
          Работает на 550px
        </h1>
      </div>
    </div>
  </template>
</template>

<style>
.stopper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  color: #FFFFFF;
  background-color: #000000;
  overflow: hidden;
}

.stopper-outer {
  margin: auto;
}
</style>
