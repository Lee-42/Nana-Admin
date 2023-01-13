<template>
  <div
    class="theme-item"
    v-for="(theme, index) in BUILDIN_THEMES"
    :key="index"
    :style="{
      background: theme
    }"
    @click="handleThemeSelect(theme)"
  >
    <svg-icon
      v-if="selectTheme === theme"
      :component="CheckOutlined"
      color="white"
    ></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CheckOutlined } from '@vicons/material'
import { BUILDIN_THEMES } from '@/constant/index.js'
import { useStore } from 'vuex'

const store = useStore()

const selectTheme = computed(() => store.getters.theme)
const handleThemeSelect = (theme) => {
  store.commit('app/setTheme', theme)
}
</script>

<style lang="less" scoped>
.theme-item {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border-radius: 2px;
}
</style>
