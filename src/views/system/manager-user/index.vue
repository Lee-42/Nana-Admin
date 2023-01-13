<template>
  <div>
    <div v-for="icon of AllIcons" :key="icon">
      {{ icon.name }}
      <n-icon size="30">
        <component :is="icon"></component>
      </n-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as AllIcons from '@vicons/ionicons5'
// 阿弥陀佛, 菩萨保佑, 阿门
</script>
