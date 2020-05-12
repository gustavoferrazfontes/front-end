<template>
  <section class="d-flex f-10 side-menu">
    <aside class="d-flex f-100 wrapped">
      <Logotipo />
      <nav class="d-flex f-100">
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
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors";
.side-menu {
  background-color: $GreenRaze;

  aside {
    margin-left: 22px;

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