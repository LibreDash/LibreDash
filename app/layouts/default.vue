<template>
  <div class="grid h-svh w-full grid-rows-[1fr_5px_6rem]">
    <div class="no-scrollbar relative z-0 overflow-y-hidden">
      <VolumeBar class="bottom-28 left-3 top-3" />
      <slot />
    </div>
    <div class="fixed bottom-0 left-0 right-0">
      <div class="bg-accent/50 h-1 border">
        <div class="bg-foreground z-20 h-full" :style="{ width: '80%' }"></div>
      </div>
      <div class="bg-accent z-10 flex h-24 items-center gap-3">
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
  </div>
</template>
<style lang="css">
.no-scrollbar::--webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
