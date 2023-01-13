<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <div class="square-avatar">
      <span>{{ store.getters.userInfo.account_id }}</span>
    </div>
  </n-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { Person } from '@vicons/ionicons5'

const store = useStore()

const options = ref([
  {
    label: '退出登录',
    key: 'logout',
    callback: () => {
      store.dispatch('user/logout')
    }
  }
])
const handleSelect = (key, option) => {
  option.callback()
}
</script>

<style lang="less" scoped>
.square-avatar {
  display: flex;
  align-items: center;
}
</style>
