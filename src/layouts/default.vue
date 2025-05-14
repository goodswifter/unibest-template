<template>
  <nut-config-provider :theme-vars="themeVars">
    <slot></slot>
    <!-- 打开这一行代码报错 -->
    <nut-toast />
  </nut-config-provider>
</template>

<script lang="ts" setup>
const themeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>
