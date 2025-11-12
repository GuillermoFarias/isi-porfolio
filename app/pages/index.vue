<template>
  <main>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center section-padding pt-32">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 font-semibold text-sm">
              Diseñadora Gráfica
            </div>
            <h1 class="text-5xl md:text-7xl font-bold leading-tight">
              <span class="gradient-text">Isiadora Farías</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600">
              Transformando ideas en experiencias visuales que conectan marcas con personas
            </p>
            <p class="text-lg text-gray-500">
              Especializada en branding corporativo moderno para empresas tecnológicas
            </p>
            <div class="flex gap-4 pt-4">
              <a
                href="#portfolio"
                class="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Ver Portafolio
              </a>
              <a
                href="#contact"
                class="px-8 py-3 border-2 border-violet-500 text-violet-600 rounded-full font-semibold hover:bg-violet-50 transition-all"
              >
                Contactar
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-violet-200 to-purple-300 rounded-3xl overflow-hidden shadow-2xl">
              <!-- Placeholder for profile image -->
              <div class="w-full h-full flex items-center justify-center text-violet-600">
                <svg class="w-64 h-64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-violet-400 rounded-full opacity-20 animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section-padding bg-white">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="gradient-text">Mi Portafolio</span>
          </h2>
          <p class="text-xl text-gray-600">
            Proyectos que combinan creatividad y estrategia visual
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
          >
            <div class="aspect-[4/3] bg-gradient-to-br overflow-hidden" :class="project.gradient">
              <!-- Placeholder for project image -->
              <div class="w-full h-full flex items-center justify-center text-white/50">
                <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-900">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 bg-violet-100 text-violet-600 text-sm rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-gradient-to-br from-violet-50 to-purple-50">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="gradient-text">Sobre Mí</span>
            </h2>
            <div class="space-y-4 text-lg text-gray-600">
              <p>
                Soy Isiadora Farías, diseñadora gráfica apasionada por crear identidades visuales 
                que marcan la diferencia en el mundo digital.
              </p>
              <p>
                Me especializo en desarrollar branding corporativo moderno para empresas tecnológicas, 
                fusionando elementos creativos y estéticos con una visión empresarial clara.
              </p>
              <p>
                Mi enfoque combina el arte del diseño con la estrategia de marca, creando 
                soluciones visuales que no solo se ven bien, sino que comunican efectivamente 
                el valor de cada proyecto.
              </p>
            </div>

            <div class="mt-8 space-y-4">
              <h3 class="text-2xl font-bold text-gray-900">Habilidades</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="skill in skills" :key="skill.name" class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="font-semibold text-gray-700">{{ skill.name }}</span>
                    <span class="text-sm text-gray-500">{{ skill.level }}%</span>
                  </div>
                  <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-1000"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 md:order-2">
            <div class="aspect-square bg-gradient-to-br from-violet-200 to-purple-300 rounded-3xl overflow-hidden shadow-2xl">
              <!-- Placeholder for about image -->
              <div class="w-full h-full flex items-center justify-center text-violet-600">
                <svg class="w-64 h-64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-white">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="gradient-text">Trabajemos Juntos</span>
          </h2>
          <p class="text-xl text-gray-600">
            ¿Tienes un proyecto en mente? Me encantaría escucharte
          </p>
        </div>

        <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  class="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  class="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                class="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>

          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="p-6 bg-white rounded-2xl">
              <div class="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Email</h4>
              <p class="text-gray-600">contacto@isifarias.com</p>
            </div>

            <div class="p-6 bg-white rounded-2xl">
              <div class="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Teléfono</h4>
              <p class="text-gray-600">+56 9 1234 5678</p>
            </div>

            <div class="p-6 bg-white rounded-2xl">
              <div class="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Ubicación</h4>
              <p class="text-gray-600">Santiago, Chile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const projects = [
  {
    id: 1,
    title: 'Tech Startup Branding',
    description: 'Identidad corporativa completa para startup tecnológica',
    tags: ['Branding', 'Logo Design', 'Identity'],
    gradient: 'from-violet-400 to-purple-500'
  },
  {
    id: 2,
    title: 'App Design System',
    description: 'Sistema de diseño moderno para aplicación móvil',
    tags: ['UI/UX', 'Design System', 'Mobile'],
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 3,
    title: 'Corporate Identity',
    description: 'Renovación de imagen corporativa empresa tech',
    tags: ['Rebranding', 'Corporate', 'Modern'],
    gradient: 'from-violet-500 to-indigo-600'
  },
  {
    id: 4,
    title: 'Digital Campaign',
    description: 'Campaña visual para lanzamiento de producto',
    tags: ['Marketing', 'Social Media', 'Campaign'],
    gradient: 'from-pink-400 to-purple-500'
  },
  {
    id: 5,
    title: 'E-commerce Platform',
    description: 'Diseño de experiencia de usuario para plataforma',
    tags: ['UX', 'E-commerce', 'Web Design'],
    gradient: 'from-indigo-400 to-violet-500'
  },
  {
    id: 6,
    title: 'Brand Guidelines',
    description: 'Manual de marca para empresa tecnológica',
    tags: ['Branding', 'Guidelines', 'Documentation'],
    gradient: 'from-purple-500 to-violet-600'
  }
]

const skills = [
  { name: 'Branding', level: 95 },
  { name: 'Illustrator', level: 90 },
  { name: 'Photoshop', level: 88 },
  { name: 'Figma', level: 92 },
  { name: 'UI/UX', level: 85 },
  { name: 'Typography', level: 90 }
]

const handleSubmit = () => {
  alert('¡Gracias por tu mensaje! Te contactaré pronto.')
  // Reset form
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
}
</script>
