<template>
  <main class="bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute top-20 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 left-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div class="container mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full text-purple-700 dark:text-purple-300 font-semibold text-sm backdrop-blur-sm">
              ✨ Diseñadora Gráfica
            </div>
            <div class="flex items-center gap-6">
              <NuxtImg 
                src="/images/profile.png" 
                alt="Isidora Farías" 
                class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-200 dark:border-purple-700 shadow-lg"
                width="160"
                height="160"
                quality="80"
              />
              <h1 class="text-6xl md:text-7xl font-bold leading-tight">
                <span class="block text-gray-900 dark:text-white">Isidora</span>
                <span class="block gradient-text">Farías</span>
              </h1>
            </div>
            <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light">
              Comenzando mi camino en el diseño gráfico para marcas tecnológicas
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Aprendiendo y desarrollando proyectos de branding e identidad visual
            </p>
            <div class="flex gap-4 pt-6">
              <a
                href="#portfolio"
                class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-1"
              >
                Ver Proyectos
              </a>
              <a
                href="#contact"
                class="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-700 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all hover:scale-105"
              >
                Contacto
              </a>
            </div>
          </div>
          <div class="relative scale-[0.80] hidden md:block">
            <div class="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-3 transition-transform duration-500">
              <!-- Placeholder for profile image -->
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                <svg class="w-64 h-64 text-white opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            </div>
            <!-- Decorative floating elements -->
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl opacity-80 shadow-xl animate-float"></div>
            <div class="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-80 shadow-xl animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section-padding bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="gradient-text">Mis Primeros Proyectos</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explorando el diseño gráfico y aprendiendo a crear experiencias visuales para marcas tecnológicas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            v-for="project in projects"
            :key="project.id"
            @click="openModal(project)"
            class="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl card-hover cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
          >
            <div class="aspect-[4/3] bg-gradient-to-br overflow-hidden relative" :class="project.gradient">
              <!-- Placeholder for project image -->
              <div class="w-full h-full flex items-center justify-center">
                <svg class="w-40 h-40 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver Proyecto →
                </span>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedProject"
          @click="closeModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div
            @click.stop
            class="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            <!-- Close button -->
            <button
              @click="closeModal"
              class="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all shadow-lg hover:scale-110"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="overflow-y-auto max-h-[90vh] custom-scrollbar">
              <!-- Image Gallery -->
              <div class="relative">
                <div class="aspect-[16/9] bg-gradient-to-br overflow-hidden" :class="selectedProject.gradient">
                  <img
                    v-if="selectedProject.images[currentImageIndex]"
                    :src="selectedProject.images[currentImageIndex]"
                    :alt="`${selectedProject.title} - Imagen ${currentImageIndex + 1}`"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center">
                    <svg class="w-48 h-48 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <!-- Navigation arrows -->
                <button
                  v-if="currentImageIndex > 0"
                  @click="previousImage"
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all shadow-xl hover:scale-110"
                >
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  v-if="currentImageIndex < selectedProject.images.length - 1"
                  @click="nextImage"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all shadow-xl hover:scale-110"
                >
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <!-- Image counter -->
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {{ currentImageIndex + 1 }} / {{ selectedProject.images.length }}
                </div>
              </div>

              <!-- Project Details -->
              <div class="p-8 md:p-12">
                <h3 class="text-4xl font-bold mb-4 gradient-text">{{ selectedProject.title }}</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{{ selectedProject.fullDescription }}</p>
                
                <div class="flex flex-wrap gap-2 mb-8">
                  <span
                    v-for="tag in selectedProject.tags"
                    :key="tag"
                    class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Thumbnails -->
                <div class="flex gap-3 overflow-x-auto pb-2">
                  <div
                    v-for="(image, index) in selectedProject.images"
                    :key="index"
                    @click="currentImageIndex = index"
                    class="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-105"
                    :class="currentImageIndex === index ? 'ring-4 ring-purple-500' : 'opacity-60 hover:opacity-100'"
                  >
                    <div class="w-full h-full bg-gradient-to-br" :class="selectedProject.gradient">
                      <img
                        v-if="image"
                        :src="image"
                        :alt="`Thumbnail ${index + 1}`"
                        class="w-full h-full object-cover"
                      />
                      <div v-else class="w-full h-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- About Section -->
    <section id="about" class="section-padding bg-white dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-5xl md:text-6xl font-bold mb-6">
              <span class="gradient-text">Sobre Mí</span>
            </h2>
            <div class="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Soy <strong>Isidora Farías</strong>, diseñadora gráfica en formación, apasionada por crear identidades visuales 
                que marquen la diferencia en el mundo digital.
              </p>
              <p>
                Estoy <strong>comenzando mi camino en el branding para empresas tecnológicas</strong>, 
                aprendiendo a fusionar elementos creativos y estéticos con una visión empresarial clara.
              </p>
              <p>
                Mi enfoque busca combinar el arte del diseño con la estrategia de marca, desarrollando 
                soluciones visuales que no solo se vean bien, sino que <strong>comuniquen efectivamente 
                el valor de cada proyecto</strong>.
              </p>
            </div>

            <div class="mt-10 space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Habilidades en Desarrollo</h3>
              <div class="space-y-4">
                <div v-for="skill in skills" :key="skill.name" class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="font-semibold text-gray-800 dark:text-gray-200">{{ skill.name }}</span>
                    <span class="text-sm text-gray-600 dark:text-gray-400 font-bold">{{ skill.level }}%</span>
                  </div>
                  <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 md:order-2">
            <div class="relative">
              <div class="aspect-square bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                <!-- Placeholder for about image -->
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                  <svg class="w-64 h-64 text-white opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl opacity-80 shadow-xl animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div class="container mx-auto max-w-5xl">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="gradient-text">Contáctame, estoy disponible</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estoy buscando nuevas oportunidades laborales o proyectos como freelancer
          </p>
        </div>

        <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div class="space-y-8">
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-purple-100 text-sm mb-1">Email</p>
                  <a
                    href="mailto:isiforafarias@gmail.com"
                    class="text-xl font-semibold hover:text-yellow-300 transition-colors"
                  >
                    isiforafarias@gmail.com
                  </a>
                </div>
              </div>

              <!-- LinkedIn -->
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p class="text-purple-100 text-sm mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/isidora-farias"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xl font-semibold hover:text-yellow-300 transition-colors"
                  >
                    linkedin.com/in/isidora-farias
                  </a>
                </div>
              </div>

              <!-- Behance -->
              <div class="flex items-start gap-4">
                <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-purple-100 text-sm mb-1">Behance</p>
                  <a
                    href="https://www.behance.net/isidorafaras1"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xl font-semibold hover:text-yellow-300 transition-colors"
                  >
                    behance.net/isidorafaras1
                  </a>
                </div>
              </div>
            </div>

            <!-- Decorative element -->
            <div class="hidden md:flex items-center justify-center">
              <div class="relative">
                <div class="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-[3rem] flex items-center justify-center">
                  <svg class="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div class="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-3xl opacity-80 animate-float"></div>
                <div class="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400 rounded-3xl opacity-80 animate-float animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// SEO metadata para la página principal
useHead({
  title: 'Isidora Farías | Diseñadora Gráfica',
  meta: [
    { name: 'description', content: 'Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas. Proyectos de identidad visual, UI/UX y campañas digitales.' },
    { property: 'og:title', content: 'Isidora Farías | Diseñadora Gráfica' },
    { property: 'og:description', content: 'Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.svg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Isidora Farías | Diseñadora Gráfica' },
    { name: 'twitter:description', content: 'Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas.' },
    { name: 'twitter:image', content: '/og-image.svg' }
  ]
})

// Types
interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  tags: string[]
  gradient: string
  images: (string | null)[]
}

// Modal state
const selectedProject = ref<Project | null>(null)
const currentImageIndex = ref(0)

// Projects data with full descriptions and image arrays
const projects = [
  {
    id: 1,
    title: 'NexaTech - Rebranding Completo',
    description: 'Transformación de identidad visual para startup de IA',
    fullDescription: 'Desarrollé una identidad de marca completa para NexaTech, una startup especializada en inteligencia artificial. El proyecto incluyó la creación de un logotipo moderno y minimalista, paleta de colores vibrante que refleja innovación tecnológica, y un sistema de diseño escalable. El resultado es una marca que comunica confianza, modernidad y vanguardia tecnológica, perfecta para atraer inversores y clientes del sector tech.',
    tags: ['Branding', 'Logo Design', 'Identity', 'AI'],
    gradient: 'from-violet-400 to-purple-500',
    images: [null, null, null, null, null] // Placeholders para 5 imágenes
  },
  {
    id: 2,
    title: 'CloudFlow - Sistema de Diseño',
    description: 'Sistema de diseño para plataforma SaaS',
    fullDescription: 'Creé un sistema de diseño completo para CloudFlow, una plataforma SaaS de gestión empresarial. El proyecto abarcó desde la creación de componentes UI reutilizables, hasta la definición de patrones de interacción y guías de estilo. Implementé una biblioteca de componentes en Figma que facilita la consistencia visual en todo el producto, mejorando significativamente la experiencia del usuario y acelerando el proceso de desarrollo.',
    tags: ['UI/UX', 'Design System', 'SaaS', 'Figma'],
    gradient: 'from-purple-400 to-pink-500',
    images: [null, null, null, null, null]
  },
  {
    id: 3,
    title: 'DevHub - Plataforma Colaborativa',
    description: 'Diseño UX/UI para comunidad de desarrolladores',
    fullDescription: 'Diseñé la experiencia completa de usuario para DevHub, una plataforma que conecta desarrolladores con proyectos open source. El enfoque estuvo en crear una interfaz intuitiva que facilite la colaboración, con un diseño moderno que refleja la cultura tech. Incluye sistema de perfiles, tableros de proyectos, chat integrado y herramientas de gestión de código, todo con una estética limpia y profesional.',
    tags: ['UX', 'UI Design', 'Community', 'Tech'],
    gradient: 'from-indigo-400 to-violet-500',
    images: [null, null, null, null, null]
  },
  {
    id: 4,
    title: 'TechVision - Campaña Visual',
    description: 'Identidad visual para conferencia tecnológica',
    fullDescription: 'Desarrollé la identidad visual completa para TechVision, una conferencia anual de tecnología e innovación. El proyecto incluyó diseño de marca del evento, material promocional digital y físico, señalética, presentaciones, y toda la comunicación visual en redes sociales. Creé un lenguaje visual dinámico y futurista que captura el espíritu innovador del evento, utilizando gradientes vibrantes y tipografía moderna.',
    tags: ['Event Branding', 'Marketing', 'Social Media', 'Print'],
    gradient: 'from-pink-400 to-purple-500',
    images: [null, null, null, null, null]
  }
]

const skills = [
  { name: 'Branding', level: 70 },
  { name: 'Adobe Illustrator', level: 65 },
  { name: 'Adobe Photoshop', level: 68 },
  { name: 'Figma', level: 72 },
  { name: 'UI/UX Design', level: 60 },
  { name: 'Typography', level: 66 }
]

// Modal functions
const openModal = (project: Project) => {
  selectedProject.value = project
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  currentImageIndex.value = 0
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (selectedProject.value && currentImageIndex.value < selectedProject.value.images.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

// Close modal on ESC key
if (process.client) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedProject.value) {
      closeModal()
    }
  })
}
</script>

<style scoped>
/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
}

/* Custom scrollbar for modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #9333ea, #ec4899);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7e22ce, #db2777);
}

/* Animations */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Line clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
