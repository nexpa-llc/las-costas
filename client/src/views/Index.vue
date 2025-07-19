<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-5">
      <div class="py-3">
        <div
          class="font-londrina from-primary to-secondary bg-linear-to-r via-white bg-clip-text pb-6 text-center text-6xl font-extrabold tracking-wide text-transparent"
        >
          <p>BIENVENIDO</p>
          <p>WELCOME</p>
        </div>

        <div class="flex justify-center">
          <img class="animate-bounce-scale w-1/2" src="/assets/logo.png" alt="logo" />
        </div>
      </div>

      <div class="w-full pb-2">
        <div class="divider m-0"></div>

        <div
          class="font-londrina from-primary to-secondary bg-linear-to-r via-white bg-clip-text text-center text-5xl font-extrabold tracking-wide text-transparent"
        >
          <p>MENU</p>
        </div>

        <div class="divider m-0"></div>
      </div>

      <div>
        <img id="combos" src="/assets/menu/combos.jpg" class="h-full w-full" />

        <div class="h-4" style="background: linear-gradient(to bottom, #151515, #111)" />

        <img id="mariscos" src="/assets/menu/mariscos.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #0f0f0f, #020001)"
        />

        <img id="tacos" src="/assets/menu/tacos.jpg" class="h-full w-full" />

        <div class="h-4" style="background: linear-gradient(to bottom, #111, #141414)" />

        <img id="caldos" src="/assets/menu/caldos.jpg" class="h-full w-full" />

        <img id="antojitos" src="/assets/menu/antojitos.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #0f0f0f, #020001)"
        />

        <img id="platillos" src="/assets/menu/platillos.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #1e1e1e, #141414)"
        />

        <img id="burritos" src="/assets/menu/burritos.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #020202, #121212)"
        />

        <img id="tortas" src="/assets/menu/tortas.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #0a0a0a, #0a0a0a)"
        />

        <img id="ensalada" src="/assets/menu/ensalada.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #020202, #020202)"
        />

        <img id="ninos" src="/assets/menu/ninos.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #121212, #1e1e1e)"
        />

        <img id="desayunos" src="/assets/menu/desayunos.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #010101, #010101)"
        />

        <img id="postres" src="/assets/menu/postres.jpg" class="h-full w-full" />

        <div
          class="h-4"
          style="background: linear-gradient(to bottom, #070707, #121212)"
        />

        <img id="drinks" src="/assets/menu/drinks.jpg" class="h-full w-full" />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes bounce-scale {
  0%,
  100% {
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: scale(1.3);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce-scale {
  animation: bounce-scale 1.2s ease-in-out infinite;
}

.text-banner {
  background-color: var(--color-secondary);
  color: var(--color-secondary-content);
  text-align: center;
  padding: 0.2em 0.7em;
  display: inline-block;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%);
}
</style>
