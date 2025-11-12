<template>
  <header
    class="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm z-50 border-b border-purple-100 dark:border-gray-700"
  >
    <nav class="container mx-auto px-4 py-5 md:px-8">
      <div class="flex items-center justify-between">
        <a
          href="#home"
          class="text-2xl md:text-3xl font-bold transition-all duration-500 ease-in-out"
          :class="
            isScrolled
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2'
          "
        >
          <span class="text-gray-900 dark:text-white">Isidora</span>
          <span class="gradient-text ms-1">Farías</span>
        </a>

        <div class="flex items-center gap-4">
          <!-- Dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            <svg
              v-if="isDark"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <!-- Mobile menu button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
        </div>

        <!-- Desktop menu -->
        <ul
          class="hidden md:flex space-x-8 items-center absolute left-1/2 -translate-x-1/2"
        >
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-semibold text-lg relative group"
              @click="scrollToSection"
            >
              {{ item.label }}
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"
              ></span>
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
        <ul
          v-if="isMenuOpen"
          class="md:hidden mt-4 space-y-3 pb-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4"
        >
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-600 transition-all font-semibold rounded-xl"
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
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const isDark = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { label: "Inicio", href: "#home" },
  { label: "Portafolio", href: "#portfolio" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const handleScroll = () => {
  // Mostrar el nombre cuando se hace scroll más de 100px
  isScrolled.value = window.scrollY > 100;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// Initialize dark mode from localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  // Add scroll listener
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleMobileClick = () => {
  isMenuOpen.value = false;
  scrollToSection();
};

const scrollToSection = (event?: Event) => {
  if (event) {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target.getAttribute("href");
    if (id) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>
