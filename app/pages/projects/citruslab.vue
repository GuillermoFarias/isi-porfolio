<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Project Hero -->
    <section class="pt-32 pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <NuxtLink 
          to="/#portfolio" 
          class="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-8 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver a proyectos
        </NuxtLink>

        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">CitrusLab</span>
          </h1>
          <p class="text-2xl text-gray-600 dark:text-gray-300">
            Software Factory de Nueva Generación
          </p>
          <a 
            href="http://citruslab.cl/" 
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mt-4 transition-colors"
          >
            <span class="text-lg">Visitar sitio web</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Project Images -->
    <section class="pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="aspect-video bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <NuxtImg 
              src="/projects/citruslab/principal.png" 
              alt="CitrusLab - Página Principal" 
              class="w-full h-full object-cover"
              width="800"
              height="600"
              quality="90"
            />
          </div>
          <div class="aspect-video bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <NuxtImg 
              src="/projects/citruslab/secondary.png" 
              alt="CitrusLab - Vista de Servicios" 
              class="w-full h-full object-cover"
              width="800"
              height="600"
              quality="90"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="pb-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Sobre el Proyecto</h2>
          
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            CitrusLab es una startup tecnológica chilena especializada en desarrollo de software, inteligencia artificial y transformación digital. Como arquitectos de la innovación, se dedican a construir el futuro digital de las empresas mediante soluciones tecnológicas de vanguardia.
          </p>

          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Participé en el desarrollo de la identidad visual y el diseño web de CitrusLab, creando una presencia digital que refleja su enfoque innovador y profesional. El proyecto incluyó el diseño de la interfaz de usuario, la paleta de colores corporativa en tonos cítricos que transmiten frescura y energía, y la estructura visual del sitio web que comunica claramente sus servicios especializados.
          </p>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Servicios de CitrusLab</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2">💻 Software Factory</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Desarrollo de aplicaciones web, móviles y sistemas empresariales personalizados</p>
            </div>
            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2">🤖 Especialistas en IA</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Machine learning, procesamiento de lenguaje natural y visión por computadora</p>
            </div>
            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2">🏗️ Asesoría Tecnológica</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Arquitecturas modernas, microservicios, Kubernetes y optimización en la nube</p>
            </div>
            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2">📚 Mentoría & Capacitación</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Desarrollo ágil, DevOps y gestión eficiente de proyectos tecnológicos</p>
            </div>
            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2">🔄 Migración Tecnológica</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Actualización de sistemas heredados a tecnologías de última generación</p>
            </div>
            <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2">🔒 Auditoría y Seguridad</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Protección digital integral y cumplimiento de estándares internacionales</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mi Contribución al Proyecto</h3>
          <ul class="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-2">
            <li>Diseño de la identidad visual corporativa</li>
            <li>Desarrollo de la paleta de colores y tipografías</li>
            <li>Diseño UI/UX del sitio web corporativo</li>
            <li>Creación de elementos gráficos y recursos visuales</li>
            <li>Diseño de secciones informativas y de servicios</li>
            <li>Optimización de la experiencia de usuario</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Áreas de Trabajo</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 text-orange-700 dark:text-orange-300 font-semibold rounded-full">
              Diseño Web
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 text-orange-700 dark:text-orange-300 font-semibold rounded-full">
              UI/UX
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 text-orange-700 dark:text-orange-300 font-semibold rounded-full">
              Branding
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 text-orange-700 dark:text-orange-300 font-semibold rounded-full">
              Startup Tech
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 text-orange-700 dark:text-orange-300 font-semibold rounded-full">
              Inteligencia Artificial
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 text-orange-700 dark:text-orange-300 font-semibold rounded-full">
              Diseño Corporativo
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'CitrusLab - Software Factory & IA | Isidora Farías',
  meta: [
    { name: 'description', content: 'Diseño web y branding para startup tecnológica especializada en IA, desarrollo de software y transformación digital' }
  ]
})
</script>
