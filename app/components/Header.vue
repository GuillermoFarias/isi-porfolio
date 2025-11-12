<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50 border-b border-purple-100">
    <nav class="container mx-auto px-4 py-5 md:px-8">
      <div class="flex items-center justify-between">
        <a href="#home" class="text-2xl md:text-3xl font-bold gradient-text hover:scale-105 transition-transform">
          Isidora Farías
        </a>
        
        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop menu -->
        <ul class="hidden md:flex space-x-8 items-center">
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg relative group"
              @click="scrollToSection"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <ul v-if="isMenuOpen" class="md:hidden mt-4 space-y-3 pb-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="block py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-white transition-all font-semibold rounded-xl"
              @click="handleMobileClick"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleMobileClick = () => {
  isMenuOpen.value = false
  scrollToSection()
}

const scrollToSection = (event?: Event) => {
  if (event) {
    event.preventDefault()
    const target = event.target as HTMLAnchorElement
    const id = target.getAttribute('href')
    if (id) {
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
