<script lang="ts" setup>
const colapse = ref<boolean>(true);
</script>

<template>
  <div class="pointer-events-auto fixed z-50 flex w-16 flex-col-reverse">
    <div
      class="bg-accent/50 flex w-full flex-1 flex-col rounded-full border transition-all"
      :class="colapse ? 'max-h-16' : 'max-h-full'"
    >
      <div class="flex-1"></div>
      <div
        class="bg-accent/50 flex aspect-square w-full items-center justify-center rounded-full border"
        @click="colapse = !colapse"
      >
        <Icon name="lucide:volume-2" class="text-accent-foreground size-6" />
      </div>
    </div>
  </div>
</template>
