<template>
  <header class="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
    <nav class="container mx-auto px-4 py-4 md:px-8">
      <div class="flex items-center justify-between">
        <a href="#home" class="text-2xl font-bold gradient-text">
          Isiadora Farías
        </a>
        
        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 text-gray-700 hover:text-primary"
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
        <ul class="hidden md:flex space-x-8">
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="text-gray-700 hover:text-primary transition-colors font-medium"
              @click="scrollToSection"
            >
              {{ item.label }}
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
        <ul v-if="isMenuOpen" class="md:hidden mt-4 space-y-2 pb-4">
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
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
