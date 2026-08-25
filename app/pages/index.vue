<template>
  <ion-page class="bg-amber-950">
    <ion-header class="p-0 bg-amber-300">
      <ion-toolbar class="p-0">
        <ion-title class="underline bg-amber-950 p-2 text-white font-extrabold"
          >Home</ion-title
        >
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding bg-amber-950">
      <ion-button
        class="bg-amber-300 text-white hover:bg-amber-400 hover:scale-105 hover:transition-transform"
        @click="changeTheme"
      >
        Click me
      </ion-button>
      <ion-row class="p-2" style="--ion-grid-column-padding: 8px">
        <ion-col
          size="12"
          size-sm="6"
          size-md="4"
          size-lg="3"
          class="p-2"
          v-for="item in 5"
          :key="item"
        >
          <ion-card
            color="dark"
            class="p-2 cursor-pointer hover:scale-103 hover:transition-transform text-center"
            @click="hello"
          >
            <ion-img class="w-30 object-cover mx-auto" src="/favicon.ico" />
            <ion-card-title>This is title</ion-card-title>
            <ion-card-subtitle>This is subtitle</ion-card-subtitle>
          </ion-card>
        </ion-col>
      </ion-row>
      <p class="bg-red-800">Welcome to your app</p>
      <div>
        <ion-input
          label="Enter your name"
          class="border rounded-xs my-3 mx-auto max-w-[97%]"
        />
      </div>
      <ion-row>
        <ion-col>
          <ion-list>
            <ion-list-header>
              <h1>Header list</h1>
            </ion-list-header>
            <h1>content</h1>
            <h1>content</h1>
            <h1>content</h1>
          </ion-list>
          <ion-item>
            <ion-item-divider />
            <h1>Hite</h1>
            <ion-item-divider />
            <h1>Hite</h1>
            <ion-item-divider />
          </ion-item>
          <ion-loading>
            <h1></h1>
          </ion-loading>
          <ion-card class="text-center ion-card">
            <ion-card-header>
              <ion-button>click</ion-button>
              <ion-img src="/favicon.ico" class="w-20 h-20 bg-cover" />
              <h1>hello</h1>
            </ion-card-header>
            <ion-card-content>
              <ion-card-title> This is title </ion-card-title>
              <ion-card-subtitle> This is subtitle </ion-card-subtitle>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup>
function hello() {
  console.log("hello");
}

function changeTheme() {
  document.documentElement.classList.toggle("ion-palette-light");
}
</script>
