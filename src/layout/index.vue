<template>
  <n-layout has-sider class="app-layout">
    <Sidebar />
    <n-layout class="body-layout">
      <Navbar class="navbar-container" />
      <AppMain class="appmain-container" />
    </n-layout>
  </n-layout>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang="less" scoped>
.app-layout {
  height: 100%;

  .body-layout {
    :deep(.n-layout-scroll-container) {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .navbar-container {
        height: 46px;
      }
      .appmain-container {
        flex: 1;
        overflow-y: overlay;
      }
    }
  }
}
</style>
