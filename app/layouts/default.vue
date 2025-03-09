<template>
  <div class="grid h-svh w-full grid-rows-[1fr_5px_6rem]">
    <div class="relative overflow-hidden">
      <VolumeBar class="bottom-3 left-3 top-3" />
      <slot />
    </div>
    <div class="bg-accent/50 border">
      <div class="bg-foreground h-full" :style="{ width: '80%' }"></div>
    </div>
    <div class="bg-accent flex items-center gap-3">
      <div class="flex h-full flex-1 items-center gap-3 p-3">
        <img src="https://picsum.photos/100/100" class="h-full" />
        <div class="flex-1">
          <div class="text-xl font-semibold">Sandstorm</div>
          <div class="text-muted-foreground">Darude</div>
        </div>
      </div>
      <NavigationButton icon="lucide:skip-back" />
      <NavigationButton icon="lucide:play" />
      <NavigationButton icon="lucide:skip-forward" />
      <NuxtLink to="/app">
        <NavigationButton icon="lucide:layout-grid" />
      </NuxtLink>
    </div>
  </div>
</template>
