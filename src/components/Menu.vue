<template>
  <section class="d-flex f-10 side-menu">
    <aside class="d-flex direction-column f-100">
      <HamburgerIcon @click="toggleMenu" />
      <Logotipo />
      <nav class="d-flex f-100" :class="showMenuStyle">
        <ul>
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link</a>
          </li>
          <li>
            <a class="submenu">Submenu</a>
            <ul>
              <li>
                <a>Link</a>
              </li>
              <li>
                <a>Link</a>
              </li>
              <li>
                <a>Link</a>
              </li>
              <li>
                <a>Link</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="submenu">Submenu</a>
            <ul>
              <li>
                <a>Link</a>
              </li>
              <li>
                <a>Link</a>
              </li>
              <li>
                <a>Link</a>
              </li>
              <li>
                <a>Link</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  </section>
</template>
<script>
import Logotipo from "@/components/Logotipo.vue";
export default {
  name: "Menu",
  components: {
    Logotipo
  },
  data: () => ({
    showMenu: false
  }),
  computed: {
    showMenuStyle() {
      return this.showMenu ? "show" : "none";
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors";
@import "@/styles/breakpoints";

.side-menu {
  background-color: $GreenRaze;
  @media (max-width: $laptop) {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .hambuger-menu {
    display: none;
    cursor: pointer;

    @media (max-width: $laptop) {
      display: block;
      position: absolute;
      align-self: center;
      left: 15px;
    }
  }

  aside {
    margin-left: 22px;

    @media (max-width: $laptop) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    nav {
      @media (max-width: $laptop) {
        display: block;
        position: fixed;
        top: 80px;
        bottom: 0;
        width: 200px;
        background: $GreenRaze;
        padding-left: 23px;
        &.none {
          left: -250px;
          transition: 1s;
        }
        &.show {
          display: block;
          transition: 1s;
          left: 0;
        }
      }
    }

    ul {
      list-style: none;
      padding: 0px;

      li {
        color: #ffffff;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 8px;

        .submenu {
          color: $Aquamarine;
          display: block;
          font-size: 16px;
          font-weight: bold;
          margin: 23px 0 11px 0;
        }
      }
    }
  }
}
</style>