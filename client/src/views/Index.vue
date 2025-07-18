<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-5">
      <div class="py-3">
        <div class="font-londrina pb-6 text-center text-6xl tracking-wide">
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

      <img id="menu-1" src="/assets/menu-1.jpg" class="h-full w-full" />
      <img id="menu-2" src="/assets/menu-2.jpg" class="h-full w-full" />
      <img id="menu-3" src="/assets/menu-3.jpg" class="h-full w-full" />
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
</style>
