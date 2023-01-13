<template>
  <n-layout-sider
    class="sidebar"
    bordered
    collapse-mode="width"
    show-trigger="bar"
    :collapsed-width="54"
    :width="210"
    :collapsed="collapsed"
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <div class="sider-title">
      <img v-if="!collapsed" src="../../assets/logo.png" alt="" />
    </div>
    <NMenu
      accordion
      :options="naiveMenu"
      :collapsed-width="54"
      :value="activeMenu"
      @update:value="clickMenuItem"
    />
  </n-layout-sider>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  filterRouters,
  generateMenus,
  generateMenusForNaive
} from '@/utils/route.js'
import { getMenu } from '@/api/sys.js'

const naiveMenu = ref([])

onMounted(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  let menus = generateMenus(filterRoutes)
  let mmm = generateMenusForNaive(menus)
  console.log('mmm: ', mmm)
  getMenu().then((res) => {
    let { menu } = res.data
    menu.forEach((item) => {
      item = {
        ...item,
        label: item.menu_name,
        key: item.menu_code,
        path: item.menu_path,
        children: []
      }
      delete item.icon
      if (item.super_code === '') {
        naiveMenu.value.push(item)
      } else {
        naiveMenu.value.forEach((childitem) => {
          if (childitem.menu_code === item.super_code) {
            delete item.children
            childitem.children.push(item)
          }
        })
      }
    })
  })
})
const router = useRouter()
const route = useRoute()

// 菜单项
const menus = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  let menus = generateMenus(filterRoutes)
  let mmm = generateMenusForNaive(menus)
  console.log('mm')
  return mmm
})
// 选中的菜单项
const activeMenu = computed(() => {
  const { path } = route
  return path
})
// 点击菜单项
const clickMenuItem = (key, item) => {
  router.push({ path: item.path })
}
</script>

<style lang="less" scoped>
@headerHei: 46px;
.n-layout-sider {
  :deep(.n-layout-sider-scroll-container) {
    overflow: hidden !important;
  }
  :deep(.n-layout-sider-scroll-container):hover {
    overflow: overlay !important;
  }
  .sider-title {
    height: @headerHei;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: @headerHei;
    }
  }
}
</style>
