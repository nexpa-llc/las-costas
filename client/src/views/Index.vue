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
          <img
            class="animate-bounce-scale w-1/2 duration-75"
            src="/assets/logo.png"
            alt="logo"
          />
        </div>
      </div>

      <div>
        <img id="combos" src="/assets/menu/combos.jpg" class="h-full w-full" />
        <div class="blend-gray" />
        <img id="mariscos" src="/assets/menu/mariscos.jpg" class="h-full w-full" />
        <div class="blend-gray-on-black" />
        <img id="tacos" src="/assets/menu/tacos.jpg" class="h-full w-full" />

        <img id="caldos" src="/assets/menu/caldos.jpg" class="h-full w-full" />

        <img id="antojitos" src="/assets/menu/antojitos.jpg" class="h-full w-full" />
        <div class="blend-gray-on-black" />
        <img id="platillos" src="/assets/menu/platillos.jpg" class="h-full w-full" />

        <img id="burritos" src="/assets/menu/burritos.jpg" class="h-full w-full" />
        <div class="blend-black-on-gray" />
        <img id="tortas" src="/assets/menu/tortas.jpg" class="h-full w-full" />

        <img id="ensalada" src="/assets/menu/ensalada.jpg" class="h-full w-full" />
        <img id="ninos" src="/assets/menu/ninos.jpg" class="h-full w-full" />
        <img id="desayunos" src="/assets/menu/desayunos.jpg" class="h-full w-full" />

        <img id="postres" src="/assets/menu/postres.jpg" class="h-full w-full" />
        <div class="blend-black-on-gray" />
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
  animation: bounce-scale 1s ease-in-out infinite;
}

.blend-gray {
  height: 10px;
  background: linear-gradient(to bottom, #1b1b1b, #161616);
}

.blend-gray-on-black {
  height: 20px;
  background: linear-gradient(to bottom, #161616, #020001);
}

.blend-black-on-gray {
  height: 20px;
  background: linear-gradient(to bottom, #020001, #161616);
}
</style>
