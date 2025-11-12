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
            <span class="gradient-text">Atendia</span>
          </h1>
          <p class="text-2xl text-gray-600 dark:text-gray-300">
            Atención al Cliente con IA
          </p>
        </div>
      </div>
    </section>

    <!-- Project Images -->
    <section class="pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
            <img src="/projects/atendia-logo.svg" alt="Atendia Logo" class="w-full h-full object-contain" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
            <img src="/projects/atendia-branding.svg" alt="Atendia Branding" class="w-full h-full object-contain" />
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
            Desarrollé la identidad visual completa para Atendia, una plataforma innovadora de atención al cliente potenciada por inteligencia artificial. El proyecto incluyó el diseño del logotipo con un avión de papel que simboliza la rapidez y eficiencia en la comunicación, paleta de colores en tonos azules y púrpuras que transmiten confianza y tecnología, papelería corporativa, y guías de uso de marca. El resultado es una identidad moderna y profesional que comunica innovación y cercanía con el cliente.
          </p>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Áreas de Trabajo</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              Branding
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              Logo Design
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              IA
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-full">
              Corporate Identity
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Atendia - Atención al Cliente con IA | Isidora Farías',
  meta: [
    { name: 'description', content: 'Identidad de marca completa para plataforma de servicio al cliente con IA' }
  ]
})
</script>
