<template>
  <nut-config-provider :theme-vars="themeVars">
    <slot></slot>
    <!-- <nut-toast /> -->
  </nut-config-provider>
</template>

<script lang="ts" setup>
const themeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>
