<template>
  <n-switch
    :value="useTransition"
    @update:value="handleUseTransition"
  ></n-switch>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const useTransition = computed(() => store.getters.useTransition)
const handleUseTransition = (isUsed) => {
  store.commit('app/setUseTransition', isUsed)
}
</script>
