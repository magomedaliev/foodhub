<script>
import LogoIcon from "../components/Icons/LogoIcon.vue"
import SearchWidget from "../components/SearchWidget.vue"

export default {
  components: {
    LogoIcon,
    SearchWidget
  },
  data() {
    return {
      currentPath: this.$route.path
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="header-title">
      <template v-if="currentPath === '/catalog'">
        Категории
      </template>
      <template v-else>
        <LogoIcon />
      </template>
    </div>
    <SearchWidget />
  </div>
</template>

<style>
.header {
  margin-bottom: 20px;
}

.header-title {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  height: 70px;
  user-select: none;
}

.header-title svg {
  height: 40px;
}
</style>
