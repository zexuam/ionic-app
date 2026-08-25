<template>
  <IonApp>
    <NuxtRouteAnnouncer />
    <IonRouterOutlet>
      <NuxtPage />
    </IonRouterOutlet>
  </IonApp>
</template>

<script setup>
const colorMode = useColorMode();
console.log((colorMode.value = "light"));

onMounted(() => {
  // document.documentElement.classList.add("ion-palette-light", false);
});
</script>
