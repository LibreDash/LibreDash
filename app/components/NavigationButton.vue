<script lang="ts" setup>
interface Props {
  icon: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex h-full w-20 items-center justify-center">
    <Icon :name="icon" class="size-8" />
  </div>
</template>
