<template>
  <n-select
    v-model:value="transitionType"
    :options="TRANSITION_TYPES"
    @update:value="handleTransitionType"
    style="width: 130px"
  />
</template>

<script setup>
import { computed } from 'vue'
import { TRANSITION_TYPES } from '@/constant/index.js'
import { useStore } from 'vuex'

const store = useStore()

const transitionType = computed(() => store.getters.transitionType)
const handleTransitionType = (type) => {
  store.commit('app/setTransitionType', type)
}
</script>
