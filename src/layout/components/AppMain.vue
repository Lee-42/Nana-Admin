<template>
  <div class="appmain">
    <transition
      :name="useTransition ? transitionType : ''"
      mode="out-in"
      appear
    >
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const useTransition = computed(() => store.getters.useTransition)
const transitionType = computed(() => store.getters.transitionType)
</script>

<style lang="less" scoped>
.appmain {
  height: 100%;
  padding: 10px;
}
</style>
