<template>
  <n-breadcrumb class="breadcrumb">
    <transition-group name="breadcrumb">
      <n-breadcrumb-item
        v-for="(item, index) in breadCrumbData"
        :key="item.path"
      >
        <span v-if="index === breadCrumbData.length - 1" class="no-redirect">
          {{ item.meta.title }}
        </span>
        <a v-else class="redirect" @click.prevent="handleLinkClick(item)">
          {{ item.meta.title }}
        </a>
      </n-breadcrumb-item>
    </transition-group>
  </n-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { DriveEtaFilled } from '@vicons/material'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
// 生成路由数组数据
const breadCrumbData = ref([])
const getBreadCrumbData = () => {
  breadCrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadCrumbData()
  },
  {
    immediate: true
  }
)

// 点击面包屑
const handleLinkClick = (item) => {
  router.push({
    path: item.path
  })
}
</script>

<style lang="less" scoped>
.breadcrumb {
  :deep(.redirect) {
    font-weight: 600;
  }
}
</style>
