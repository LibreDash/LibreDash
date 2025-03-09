<script lang="ts" setup>
const time = useDateFormat(useTimestamp({ interval: 1000 }), "HH:mm:ss");
</script>

<template>
  <div class="grid h-svh w-full grid-rows-[4rem_1fr]">
    <div class="bg-accent/50 flex items-center justify-center text-lg">
      <ClientOnly>
        {{ time }}
        <template #fallback>
          <Skeleton class="h-4 w-20" />
        </template>
      </ClientOnly>
    </div>
    <div
      class="grid auto-rows-[100px] grid-cols-[repeat(auto-fill,_100px)] gap-4 p-4"
    >
      <slot />
    </div>
  </div>
</template>
