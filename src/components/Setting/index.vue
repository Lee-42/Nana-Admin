<template>
  <n-icon :component="SettingsSharp" :size="20" @click="show = true"></n-icon>
  <n-drawer v-model:show="show" :width="300">
    <n-drawer-content closable>
      <template #header>
        <span style="font-weight: 600">项目配置</span>
      </template>
      <n-divider title-placement="center"> 主题 </n-divider>
      <div class="setting-item-container"><DayNightSwitch /></div>
      <n-divider title-placement="center"> 系统主题 </n-divider>
      <div class="setting-item-container"><ThemeSelect /></div>
      <n-divider title-placement="center"> 导航栏风格 </n-divider>
      <n-divider title-placement="center"> 界面功能 </n-divider>
      <n-divider title-placement="center"> 界面显示 </n-divider>
      <n-divider title-placement="center"> 动画 </n-divider>
      <div class="setting-item-container">
        <span class="setting-item-label">使用动画</span>
        <TransitionSwitch />
      </div>
      <div class="setting-item-container">
        <span class="setting-item-label">动画类型</span>
        <TransitionType />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { SettingsSharp } from '@vicons/ionicons5'
import DayNightSwitch from '../DayNightSwitch'
import TransitionSwitch from '../Transition/TransitionSwitch'
import TransitionType from '../Transition/TransitionType'
import ThemeSelect from '../ThemeSelect'

const show = ref(false)
</script>

<style lang="less" scoped>
.setting-item-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .setting-item-label {
    font-size: 15px;
  }
}
</style>
