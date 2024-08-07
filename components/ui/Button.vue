<template>
    <div>
    <button class="btn rounded-1" :class="`btn-${variant}`">
      <slot></slot>    
    </button>
    </div>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: "primary"
  }
})
</script>

<style lang="scss" scoped>

</style>
