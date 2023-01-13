<!--  
   当使用外部url或者系统icons目录下的svgIcon时, 使用 icon='url地址' 或者 icon="icon文件名"
   当使用'@vicons/material'时, 使用:component="Svg名"
-->
<template>
  <div v-if="icon">
    <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      :class="className"
    />
    <svg v-else class="svg-icon" :class="className" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
  </div>
  <n-icon v-else v-bind="$attrs" />
</template>

<script setup>
import { isExternal as external } from '@/utils/validate'
import { computed } from 'vue'
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => external(props.icon))
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
/**
 * 项目内图标
 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
  cursor: pointer;
}
</style>
