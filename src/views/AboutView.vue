<script>
import NavBarLayout from "../layouts/NavBarLayout.vue"
import LogoIcon from "../components/Icons/LogoIcon.vue"
import VerifiedIcon from "../components/Icons/VerifiedIcon.vue"

export default {
  components: {
    NavBarLayout,
    LogoIcon,
    VerifiedIcon
  }
}
</script>

<template>
  <NavBarLayout />
  <div class="wrapper">
    <div class="about">
      <div class="about-cover">
        <div class="about-verify">
          <div class="about-verify-outer">
            <LogoIcon />
            <VerifiedIcon />
          </div>
        </div>
      </div>
      <div class="about-desc">
        <div class="about-title">
          <h3 class="title">
            Colectivo
          </h3>
          <p>
            ул. Халилова, 12/3, Каспийск
          </p>
          <span>
            +7 (988) 293-92-22
          </span>
        </div>
        <div class="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error explicabo exercitationem saepe voluptatum
            laboriosam numquam excepturi rem omnis quasi cumque, ipsam
            nulla doloribus corporis! Ex iusto minima autem
            provident? Velit!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about-cover {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 145px;
  margin-bottom: 65px;
  border-radius: 15px;
  background-color: var(--layout-gray);
}

.about-verify {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 12px;
  border-radius: 50%;
  background-color: #F6F7FC;
  transform: translateY(50%);
}

.about-verify-outer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #FFC529;
}

.about-verify-outer svg:first-child {
  width: 60px;
}

.about-verify-outer svg:last-child {
  position: absolute;
  right: 2px;
  bottom: 2px;
  padding: 3px;
  border-radius: 50%;
  background-color: #FFFFFF;
  box-sizing: content-box;
}

.about-desc {
  text-align: center;
}

.about-title {
  margin-bottom: 20px;
}

.about-title p {
  font-size: 14px;
  color: var(--layout-gray);
}

.about-title span {
  font-size: 14px;
  color: var(--layout-green);
}

.about-text {
  font-size: 16px;
  font-weight: bold;
  color: var(--layout-gray);
}
</style>
