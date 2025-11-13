<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Project Hero -->
    <section class="pt-32 pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <NuxtLink 
          to="/#portfolio" 
          class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Volver a proyectos
        </NuxtLink>

        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Biblioteca Universitaria</span>
          </h1>
          <p class="text-2xl text-gray-600 dark:text-gray-300">
            Plataforma Digital para Gestión de Recursos Académicos
          </p>
        </div>
      </div>
    </section>

    <!-- Project Images -->
    <section class="pb-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="aspect-video bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <NuxtImg 
              src="/projects/bibliouni/principal.png" 
              alt="Biblioteca Universitaria - Vista Principal" 
              class="w-full h-full object-cover"
              width="800"
              height="600"
              quality="90"
            />
          </div>
          <div class="aspect-video bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <NuxtImg 
              src="/projects/bibliouni/figma.jpeg" 
              alt="Biblioteca Universitaria - Diseño en Figma" 
              class="w-full h-full object-cover"
              width="800"
              height="600"
              quality="90"
            />
          </div>
        </div>

        <!-- Figma Prototype -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl p-8">
          <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Prototipo Interactivo</h3>
          <div class="aspect-video w-full">
            <iframe 
              style="border: 1px solid rgba(0, 0, 0, 0.1);" 
              width="100%" 
              height="100%" 
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBiNxx1qVHJWyrOW0hNtb50%2Fbiblioteca-app%3Fnode-id%3D46-4%26p%3Df%26t%3D9zfenspbUQnxy00S-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A4" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="pb-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sobre el Proyecto</h2>
          
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Biblioteca Universitaria es una plataforma digital integral diseñada específicamente para estudiantes del Instituto Profesional AIEP. Este proyecto surge de la necesidad de modernizar y digitalizar los procesos de gestión bibliotecaria, facilitando el acceso a recursos educativos y optimizando la experiencia de los estudiantes.
          </p>

          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            La aplicación permite a los estudiantes reservar y gestionar material bibliográfico, agendar espacios de estudio, consultar la disponibilidad de recursos en tiempo real, y recibir notificaciones sobre vencimientos y nuevas adquisiciones. El diseño prioriza la usabilidad y la accesibilidad, considerando las necesidades específicas del usuario universitario en su día a día académico.
          </p>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Características Principales</h3>
          <ul class="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-2">
            <li>Sistema de búsqueda y reserva de material bibliográfico</li>
            <li>Gestión de préstamos y devoluciones</li>
            <li>Reserva de espacios de estudio individuales y grupales</li>
            <li>Catálogo digital con filtros avanzados</li>
            <li>Notificaciones push sobre vencimientos y disponibilidad</li>
            <li>Perfil de usuario personalizado con historial académico</li>
            <li>Sistema de renovaciones automáticas</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Proceso de Diseño</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            El proyecto comenzó con una investigación exhaustiva de usuarios, entrevistando a estudiantes y personal bibliotecario para identificar puntos de dolor y necesidades específicas. Se desarrollaron wireframes de baja fidelidad, seguidos de prototipos interactivos en Figma que fueron sometidos a pruebas de usabilidad con usuarios reales. El sistema de diseño incluye una paleta de colores institucional adaptada para interfaces digitales, tipografía optimizada para legibilidad en pantallas, y componentes reutilizables que garantizan coherencia visual en toda la aplicación.
          </p>

          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Áreas de Trabajo</h3>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold rounded-full">
              UI/UX Design
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold rounded-full">
              Prototipado
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold rounded-full">
              Investigación UX
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold rounded-full">
              Diseño de Sistemas
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold rounded-full">
              Figma
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold rounded-full">
              Mobile First
            </span>
            <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold rounded-full">
              Educación
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Biblioteca Universitaria - Gestión de Recursos Académicos | Isidora Farías',
  meta: [
    { name: 'description', content: 'Plataforma digital para estudiantes de AIEP que facilita la gestión de material bibliográfico y espacios de estudio' }
  ]
})
</script>
