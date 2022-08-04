<template>
  <div p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
    <div m="t-20">
      <RouterLink to="/" class="bg-green-400 px-4 py-2 text-white">
        返回
      </RouterLink>
    </div>
  </div>
</template>
