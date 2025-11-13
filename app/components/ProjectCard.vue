<template>
  <NuxtLink
    :to="projectUrl"
    class="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl card-hover cursor-pointer transform transition-all duration-500 hover:scale-[1.02] block"
  >
    <div class="aspect-[4/3] bg-gradient-to-br overflow-hidden relative" :class="gradient">
      <!-- Project image or placeholder -->
      <NuxtImg 
        v-if="coverImage"
        :src="coverImage"
        :alt="title"
        class="w-full h-full object-cover"
        width="800"
        height="600"
        quality="90"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <svg class="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <span class="text-white font-bold text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          Ver Proyecto →
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 text-sm">{{ description }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  gradient: string
  tags: string[]
  projectUrl: string
  coverImage?: string
}>()
</script>
