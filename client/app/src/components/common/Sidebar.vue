<template>
  <div
    id="sidebar"
    :class="{ active: isActive }"
  >
    <div class="sidebar-header">
      <img
        src="../../assets/logo_mkcl_w.svg"
        class="logo"
      >
    </div>

    <div class="custom-menu">
      <button
        type="button"
        id="sidebarCollapse"
        class="btn btn-primary"
        @click="toggleSideBar()"
      >
        <i class="mdi mdi-menu" />
        <span class="sr-only">Toggle Menu</span>
      </button>
    </div>

    <div v-bar>
      <div class="sidebar-vbar">
        <ul>
          <!-- <template v-for="(page, i) in this.$router.options.routes">
            <li :key="i">
              <b-link :to="page.path"
                ><i class="sidebar-icon" :class="page.meta.icon"></i>
                {{ page.name }}</b-link
              >
            </li>
          </template> -->

          <li>
            <router-link to="/">
              <i class="mdi mdi-home-outline sidebar-icon" /> Home
            </router-link>
          </li>

          <li>
            <router-link to="/login"><i class="mdi mdi-account-key sidebar-icon"></i> Login</router-link>
          </li>

          <li>
            <router-link to="/vendorHome"><i class="mdi mdi-store sidebar-icon"></i> Vendor</router-link>
          </li>

          <li>
            <router-link to="/receiveMaterial"><i class="mdi mdi-call-received sidebar-icon"></i> Receive Material</router-link>
          </li>

          <li>
            <router-link to="/dispatch"><i class="mdi mdi-cube-send sidebar-icon"></i> Dispatch</router-link>
          </li>
          
          <!-- <li>
            <router-link to="/login">
              <i class="mdi mdi-account sidebar-icon" /> Login
            </router-link>
          </li>

          <li>
            <router-link to="/registration">
              <i class="mdi mdi-account-edit sidebar-icon" /> Registration
            </router-link>
          </li>

          <li>
            <router-link to="/mqlRequestDemo">
              <i class="mdi mdi-presentation-play sidebar-icon" /> mqlRequestDemo
            </router-link>
          </li>

          <li>
            <router-link to="/i18Demo">
              <i class="mdi mdi-eject-outline sidebar-icon" /> i18Demo
            </router-link>
          </li>

          <li>
            <router-link to="/validator">
              <i class="mdi mdi-check-all sidebar-icon" /> Validator
            </router-link>
          </li>

          <li>
            <router-link to="/encryption">
              <i class="mdi mdi-laptop sidebar-icon" /> Encryption
            </router-link>
          </li>

          <li>
            <router-link to="/cdnUpload">
              <i class="mdi mdi-upload sidebar-icon" /> CdnUpload
            </router-link>
          </li>

          <li>
            <router-link to="/tableDemo">
              <i class="mdi mdi-file-table-outline sidebar-icon" /> TableDemo
            </router-link>
          </li>

          <li>
            <router-link to="/veuMetaExample/:title">
              <i class="mdi mdi-arrow-expand sidebar-icon" /> VeuMetaExample
            </router-link>
          </li>

          <li>
            <router-link to="/MqlAssetFDBDemo">
              <i class="mdi mdi-database-plus sidebar-icon" /> MqlAssetFDBDemo
            </router-link>
          </li> -->

          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleSideBar () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style></style>
