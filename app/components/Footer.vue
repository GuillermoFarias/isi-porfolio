<template>
  <footer class="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-gray-900 text-white py-16">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div class="space-y-4">
          <h3 class="text-3xl font-bold text-white mb-4">Isidora Farías</h3>
          <p class="text-purple-200 dark:text-gray-300 leading-relaxed">
            Diseñadora Gráfica especializada en branding para empresas tecnológicas
          </p>
          <div class="flex items-center gap-2 text-purple-200 dark:text-gray-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:isiforafarias@gmail.com" class="hover:text-yellow-300 transition-colors">
              isiforafarias@gmail.com
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-bold mb-6">Navegación</h4>
          <ul class="space-y-3">
            <li v-for="item in links" :key="item.href">
              <a
                :href="item.href"
                class="text-purple-200 dark:text-gray-300 hover:text-yellow-300 transition-colors flex items-center gap-2 group"
              >
                <span class="w-0 h-0.5 bg-yellow-300 group-hover:w-4 transition-all duration-300"></span>
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="text-xl font-bold mb-6">Conecta Conmigo</h4>
          <div class="flex gap-4">
            <a
              href="https://linkedin.com/in/isidora-farias"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6 group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/isidorafarias"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
              aria-label="Instagram"
            >
              <svg class="w-6 h-6 group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://behance.net/isidorafarias"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
              aria-label="Behance"
            >
              <svg class="w-6 h-6 group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>
          <p class="text-purple-200 dark:text-gray-300 text-sm mt-6">
            Disponible para proyectos freelance
          </p>
        </div>
      </div>

      <div class="border-t border-purple-700/50 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-purple-200 dark:text-gray-300 text-sm">
          &copy; {{ new Date().getFullYear() }} Isidora Farías
        </p>
        <p class="text-purple-300 dark:text-gray-400 text-sm">
          Diseñado con <span class="text-pink-400">♥</span>, si ves un error, estoy aprendiéndo.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { label: 'Inicio', href: '#home' },
  { label: 'Proyectos', href: '#portfolio' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' }
]
</script>

<style scoped>
.gradient-text-light {
  background: linear-gradient(135deg, #fbbf24 0%, #fde047 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
