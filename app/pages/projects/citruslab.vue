<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-violet-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Project Hero -->
    <section class="pt-32 pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <NuxtLink 
          to="/#portfolio" 
          class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver a proyectos
        </NuxtLink>

        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="gradient-text">CitrusLab</span>
          </h1>
          <p class="text-2xl text-gray-600 dark:text-gray-300">
            Startup Tech en IA
          </p>
        </div>
      </div>
    </section>

    <!-- Project Images -->
    <section class="pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="aspect-square bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
            <img src="/projects/citruslab-logo.svg" alt="CitrusLab Logo" class="w-full h-full object-contain" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
            <img src="/projects/citruslab-merch.svg" alt="CitrusLab Merchandising" class="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="pb-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-6 gradient-text">Sobre el Proyecto</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Creé el sistema de identidad visual para CitrusLab, una startup especializada en soluciones de inteligencia artificial. El logo presenta una naranja estilizada que representa frescura, innovación y la naturaleza orgánica de sus soluciones tech. Desarrollé una paleta vibrante en naranjas y amarillos, diseños para merchandising corporativo incluyendo camisetas y bolsas tote, y un manual de marca completo. El branding refleja energía, creatividad y el enfoque fresco que la empresa aporta al sector tecnológico.
          </p>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Áreas de Trabajo</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              Branding
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              Merchandising
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              Startup
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              AI
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'CitrusLab - Startup Tech en IA | Isidora Farías',
  meta: [
    { name: 'description', content: 'Branding y merchandising para empresa tecnológica emergente' }
  ]
})
</script>
