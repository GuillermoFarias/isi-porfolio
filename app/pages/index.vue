<template>
  <main class="relative overflow-hidden">
    <!-- Global animated gradient background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-purple-900/40 dark:to-pink-900/30 -z-10"
    ></div>

    <!-- Hero Section -->
    <section
      id="home"
      class="min-h-screen flex items-center justify-center section-padding pt-20 md:pt-32 relative"
    >
      <!-- Geometric shapes floating -->
      <div
        class="absolute top-10 right-20 w-16 h-16 border-4 border-purple-400/40 dark:border-purple-400/30 rotate-12 animate-float-slow"
      ></div>
      <div
        class="absolute top-1/4 left-10 w-12 h-12 bg-pink-400/30 dark:bg-pink-400/20 rounded-full animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-1/4 right-32 w-20 h-20 border-4 border-yellow-400/40 dark:border-yellow-400/30 rounded-full animate-spin-slow"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-8 h-8 bg-purple-300/40 dark:bg-purple-300/25 rotate-45 animate-bounce-slow"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/4 w-14 h-14 border-4 border-pink-300/40 dark:border-pink-300/25 rotate-45 animate-float"
      ></div>

      <!-- Background decorative blobs -->
      <div
        class="absolute top-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob"
      ></div>
      <div
        class="absolute top-40 left-10 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"
      ></div>

      <!-- Sparkle effects -->
      <div
        class="absolute top-1/4 left-1/3 w-3 h-3 bg-purple-400 dark:bg-purple-300 rounded-full animate-twinkle"
      ></div>
      <div
        class="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-400 dark:bg-pink-300 rounded-full animate-twinkle animation-delay-1000"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/4 w-3 h-3 bg-yellow-400 dark:bg-yellow-300 rounded-full animate-twinkle animation-delay-2000"
      ></div>
      <div
        class="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-twinkle animation-delay-3000"
      ></div>
      <div
        class="absolute bottom-1/4 right-2/3 w-2 h-2 bg-pink-300 rounded-full animate-twinkle animation-delay-4000"
      ></div>

      <div class="container mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 flex flex-col items-center md:items-start">
            <div
              class="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full text-purple-700 dark:text-purple-300 font-semibold text-sm backdrop-blur-sm"
            >
              ✨ Diseñadora Gráfica
            </div>
            <!-- Mobile layout: foto grande arriba -->
            <div class="flex md:hidden flex-col items-center gap-6">
              <div class="relative group">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 animate-pulse-slow"
                ></div>
                <NuxtImg
                  src="/images/profile.png"
                  alt="Isidora Farías"
                  class="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
                  width="128"
                  height="128"
                  quality="80"
                />
              </div>
              <h1 class="text-5xl font-bold leading-tight text-center">
                <span class="isi-regular text-gray-900 dark:text-white">Isidora</span>
                <span class="isi-regular gradient-text ms-4">Farías</span>
              </h1>
            </div>
            <!-- Desktop layout: original -->
            <div class="hidden md:flex items-center gap-6">
              <div class="relative group hidden xl:block">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 animate-pulse-slow"
                ></div>
                <NuxtImg
                  src="/images/profile.png"
                  alt="Isidora Farías"
                  class="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
                  width="160"
                  height="160"
                  quality="80"
                />
              </div>
              <h1 class="text-6xl md:text-7xl font-bold leading-tight">
                <span class="block isi-regular text-gray-900 dark:text-white">Isidora</span>
                <span class="block isi-regular gradient-text">Farías</span>
              </h1>
            </div>
            <p
              class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light text-center md:text-left"
            >
              Comenzando mi camino en el diseño gráfico para marcas tecnológicas
            </p>
            <p
              class="text-lg text-gray-600 dark:text-gray-400 text-center md:text-left"
            >
              Aprendiendo y desarrollando proyectos de branding e identidad
              visual
            </p>

            <!-- Social Media Links -->
            <div class="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.behance.net/isidorafaras1"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30"
                aria-label="Behance"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/isidora-far%C3%ADas-55239132a/"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30"
                aria-label="LinkedIn"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/estudiocrea12/"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-110 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30"
                aria-label="Instagram"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>

            <div class="flex gap-4 pt-6 justify-center md:justify-start">
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
            <div
              class="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-3 transition-transform duration-500"
            >
              <!-- Placeholder for profile image -->
              <div
                class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
              >
                <svg
                  class="w-64 h-64 text-white opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.5"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
            </div>
            <!-- Decorative floating elements -->
            <div
              class="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl opacity-80 shadow-xl animate-float"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-80 shadow-xl animate-float animation-delay-2000"
            ></div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          class="w-6 h-6 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section-padding relative">
      <!-- Additional floating elements for this section -->
      <div
        class="absolute top-10 left-10 w-12 h-12 border-4 border-purple-400/30 dark:border-purple-400/20 rounded-full animate-spin-slow"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-16 h-16 bg-pink-400/20 dark:bg-pink-400/15 rotate-45 animate-float"
      ></div>

      <div class="container mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="gradient-text">Mis Primeros Proyectos</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Diseño de identidad visual para startups y empresas tech que buscan
            destacar en el mercado digital
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <ProjectCard
            title="Biblioteca Universitaria AIEP"
            description="Plataforma para gestión de material bibliográfico y espacios de estudio para estudiantes universitarios"
            gradient="from-blue-500 to-indigo-600"
            :tags="['UI/UX', 'Prototipado', 'Educación', 'Mobile First']"
            project-url="/projects/bibliotecauniversitaria"
            cover-image="/projects/bibliouni/cover.jpeg"
          />
          <ProjectCard
            title="CitrusLab - Startup Tech en IA"
            description="Branding y merchandising para empresa tecnológica emergente"
            gradient="from-orange-400 to-amber-500"
            :tags="['Branding', 'Merchandising', 'Startup', 'AI']"
            project-url="/projects/citruslab"
          />
          <ProjectCard
            title="EnlaceTerrestre - Recurso Educativo Interactivo"
            description="Plataforma interactiva para educar sobre la fauna nativa de la región de O'Higgins"
            gradient="from-green-400 to-emerald-500"
            :tags="['UI/UX', 'Educación', 'Diseño Interactivo', 'Figma']"
            project-url="/projects/enlaceterrestre"
            cover-image="/projects/enlace-terrestre/cover.png"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding relative">
      <!-- Additional floating elements for this section -->
      <div
        class="absolute top-1/4 right-10 w-10 h-10 bg-yellow-400/25 dark:bg-yellow-400/15 rounded-full animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-1/3 left-20 w-14 h-14 border-4 border-pink-300/30 dark:border-pink-300/20 rotate-12 animate-float-slow"
      ></div>

      <div class="container mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-5xl md:text-6xl font-bold mb-6">
              <span class="gradient-text">Sobre Mí</span>
            </h2>
            <div
              class="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              <p>
                Soy <strong>Isidora Farías</strong>, diseñadora gráfica en
                formación, apasionada por crear identidades visuales que marquen
                la diferencia en el mundo digital.
              </p>
              <p>
                Estoy
                <strong
                  >comenzando mi camino en el branding para empresas
                  tecnológicas</strong
                >, aprendiendo a fusionar elementos creativos y estéticos con
                una visión empresarial clara.
              </p>
              <p>
                Mi enfoque busca combinar el arte del diseño con la estrategia
                de marca, desarrollando soluciones visuales que no solo se vean
                bien, sino que
                <strong
                  >comuniquen efectivamente el valor de cada proyecto</strong
                >.
              </p>
            </div>

            <div class="mt-10 space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Habilidades en Desarrollo
              </h3>
              <div class="space-y-4">
                <div
                  v-for="skill in skills"
                  :key="skill.name"
                  class="space-y-2"
                >
                  <div class="flex justify-between items-center">
                    <span
                      class="font-semibold text-gray-800 dark:text-gray-200"
                      >{{ skill.name }}</span
                    >
                    <span
                      class="text-sm text-gray-600 dark:text-gray-400 font-bold"
                      >{{ skill.level }}%</span
                    >
                  </div>
                  <div
                    class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                  >
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
              <div
                class="aspect-square bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform duration-500"
              >
                <!-- Placeholder for about image -->
                <div
                  class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
                >
                  <svg
                    class="w-64 h-64 text-white opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0.5"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl opacity-80 shadow-xl animate-float"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding relative">
      <!-- Additional floating elements for this section -->
      <div
        class="absolute top-20 right-1/4 w-8 h-8 bg-purple-300/30 dark:bg-purple-300/20 rotate-45 animate-bounce-slow"
      ></div>
      <div
        class="absolute bottom-10 left-1/3 w-12 h-12 border-4 border-yellow-400/30 dark:border-yellow-400/20 animate-float"
      ></div>

      <div class="container mx-auto max-w-5xl relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold mb-4">
            <span class="gradient-text">Contáctame, estoy disponible</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estoy buscando nuevas oportunidades laborales o proyectos como
            freelancer
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div class="space-y-8">
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div
                  class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
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
                <div
                  class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
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
                <div
                  class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                    />
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
                <div
                  class="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-[3rem] flex items-center justify-center"
                >
                  <svg
                    class="w-32 h-32 text-white/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div
                  class="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-3xl opacity-80 animate-float"
                ></div>
                <div
                  class="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400 rounded-3xl opacity-80 animate-float animation-delay-2000"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

// SEO metadata para la página principal
useHead({
  title: "Isidora Farías | Diseñadora Gráfica",
  meta: [
    {
      name: "description",
      content:
        "Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas. Proyectos de identidad visual, UI/UX y campañas digitales.",
    },
    { property: "og:title", content: "Isidora Farías | Diseñadora Gráfica" },
    {
      property: "og:description",
      content:
        "Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas.",
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/og-image.svg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Isidora Farías | Diseñadora Gráfica" },
    {
      name: "twitter:description",
      content:
        "Portafolio de Isidora Farías — diseñadora gráfica especializada en branding para empresas tecnológicas.",
    },
    { name: "twitter:image", content: "/og-image.svg" },
  ],
});

const skills = [
  { name: "Branding", level: 70 },
  { name: "Adobe Illustrator", level: 65 },
  { name: "Adobe Photoshop", level: 68 },
  { name: "Figma", level: 72 },
  { name: "UI/UX Design", level: 60 },
  { name: "Typography", level: 66 },
];
</script>

<style scoped>
@keyframes blob {
  0%,
  100% {
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
  0%,
  100% {
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
