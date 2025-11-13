<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Project Hero -->
    <section class="pt-32 pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <NuxtLink 
          to="/#portfolio" 
          class="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver a proyectos
        </NuxtLink>

        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">EnlaceTerrestre</span>
          </h1>
          <p class="text-2xl text-gray-600 dark:text-gray-300">
            Recurso Educativo Interactivo sobre Fauna Regional
          </p>
        </div>
      </div>
    </section>

    <!-- Project Images -->
    <section class="pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="aspect-video bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <NuxtImg 
              src="/projects/enlace-terrestre/principal.jpeg" 
              alt="EnlaceTerrestre - Vista Principal" 
              class="w-full h-full object-cover"
              width="800"
              height="600"
              quality="90"
            />
          </div>
          <div class="aspect-video bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <NuxtImg 
              src="/projects/enlace-terrestre/figma.jpeg" 
              alt="EnlaceTerrestre - Diseño en Figma" 
              class="w-full h-full object-cover"
              width="800"
              height="600"
              quality="90"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Figma Prototype Section -->
    <section class="pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center">
          <h2 class="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Prototipo Interactivo
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Explora el diseño completo y las interacciones en Figma
          </p>
          <a
            href="https://www.figma.com/proto/zvRWfD2P6YVds6hhiixea0/Untitled?node-id=34-4&p=f&t=bdZeuMkZT30ncyr1-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A4"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
            </svg>
            Ver Prototipo en Figma
          </a>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="pb-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Sobre el Proyecto
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Diseñé y desarrollé un recurso interactivo educativo para la empresa <strong>Enlace Terrestre</strong>, enfocado en presentar las especies nativas de la <strong>región de O'Higgins</strong> de manera atractiva y didáctica.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            El objetivo principal es educar a estudiantes de la región sobre la fauna local, promoviendo la conciencia ambiental y el conocimiento de la biodiversidad regional a través de una experiencia visual e interactiva diseñada específicamente para el público estudiantil.
          </p>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Áreas de Trabajo</h3>
          <div class="flex flex-wrap gap-3 mb-8">
            <span class="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 font-semibold rounded-full">
              UI/UX Design
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 font-semibold rounded-full">
              Educación
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 font-semibold rounded-full">
              Diseño Interactivo
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 font-semibold rounded-full">
              Figma
            </span>
          </div>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Características del Proyecto</h3>
          <ul class="space-y-3 text-lg text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Diseño visual centrado en la experiencia del usuario estudiantil</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Interfaz interactiva e intuitiva para facilitar el aprendizaje</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Prototipado completo en Figma con navegación funcional</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Contenido educativo sobre fauna regional de O'Higgins</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'EnlaceTerrestre - Recurso Educativo Interactivo | Isidora Farías',
  meta: [
    { name: 'description', content: 'Plataforma interactiva educativa sobre la fauna nativa de la región de O\'Higgins, diseñada para estudiantes.' }
  ]
})
</script>
