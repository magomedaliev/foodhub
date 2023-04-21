<script>
import ArrowBackIcon from "./Icons/ArrowBackIcon.vue"

export default {
  components: {
    ArrowBackIcon
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <button class="back-btn" @click="goBack">
    <ArrowBackIcon />
  </button>
</template>

<style>
.back-btn {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  outline: none;
  border: none;
  border-radius: 12px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.1);
}

.back-btn svg {
  transform: translateX(-2px);
}
</style>
