<script lang="ts" setup>
definePageMeta({
  layout: "overview",
});

const { apps } = useAppConfig();
</script>

<template>
  <NuxtLink
    v-for="app of apps"
    :key="app.id"
    :to="app.entry"
    class="bg-accent/20 flex items-center justify-center rounded-lg border"
  >
    <img :src="app.icon" class="size-3/4" />
  </NuxtLink>
</template>
