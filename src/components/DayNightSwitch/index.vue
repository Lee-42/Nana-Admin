<template>
  <n-switch
    :rail-style="railStyle"
    :value="dayOrNight"
    @update:value="handleThemeUpdate"
  >
    <template #checked>
      <n-icon :component="WbSunnySharp" color="rgb(255, 217, 59)"></n-icon>
    </template>
    <template #unchecked>
      <n-icon :component="NightsStaySharp" color="rgb(255, 217, 59)"></n-icon>
    </template>
  </n-switch>
</template>

<script setup>
import { computed } from 'vue'
import { WbSunnySharp, NightsStaySharp } from '@vicons/material'
import { useStore } from 'vuex'

const store = useStore()

const railStyle = ({ focused, checked }) => {
  return {
    background: '#000e1c',
    boxShadow: '0 0 0 2px #000e1c40'
  }
}

const dayOrNight = computed(() => {
  return store.getters.dayOrNight === 'day' ? true : false
})

const handleThemeUpdate = (isDay) => {
  store.commit('app/setDayOrNight', isDay ? 'day' : 'night')
}
</script>
