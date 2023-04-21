<script>
import HomeIcon from "../components/Icons/HomeIcon.vue"
import CatalogIcon from "../components/Icons/CatalogIcon.vue"
import CartIcon from "../components/Icons/CartIcon.vue"
import FavoriteIcon from "../components/Icons/FavoriteIcon.vue"
import AboutIcon from "../components/Icons/AboutIcon.vue"

export default {
  components: {
    HomeIcon,
    CatalogIcon,
    CartIcon,
    FavoriteIcon,
    AboutIcon
  }
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-edge">
      <div class="navbar-edge-box">
        <RouterLink to="/">
          <HomeIcon />
        </RouterLink>
      </div>
      <div class="navbar-edge-box">
        <RouterLink to="/catalog">
          <CatalogIcon />
        </RouterLink>
      </div>
    </div>
    <div class="navbar-bell">
      <div class="navbar-bell-action">
        <RouterLink to="/cart">
          <CartIcon />
        </RouterLink>
      </div>
    </div>
    <div class="navbar-edge">
      <div class="navbar-edge-box">
        <FavoriteIcon />
      </div>
      <div class="navbar-edge-box">
        <RouterLink to="/about">
          <AboutIcon />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: var(--height-navbar);
  z-index: 999;
}

.navbar-edge {
  flex: 1;
  display: flex;
  background-color: #FFFFFF;
  border-radius: 8px 8px 0px 0px;
}

.navbar-edge-box {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-bell {
  position: relative;
  width: 60px;
  background-color: #FFFFFF;
}

.navbar-bell-action {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 4px;
  border-radius: 50%;
  background-color: #F6F7FC;
  box-shadow: 0px 0px 10px 4px #F6F7FC;
  transform: translateY(-50%);
}

.navbar-bell-action a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--layout-orange);
}

.navbar-bell-action svg {
  transform: translateY(-3px);
}

.navbar-bell-action svg path {
  fill: #FFFFFF !important;
}

.router-link-exact-active svg path,
.router-link-exact-active svg rect {
  fill: var(--layout-orange);
}
</style>
