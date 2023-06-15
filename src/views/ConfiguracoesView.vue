<template>
    <div class="configuracoes">
      <Estacionamento/>
    </div>
  </template>

<style>
h1{
    color: #b1b1b1;
}
</style>


  <script lang="ts">
  import { defineComponent } from 'vue';
  import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'ConfiguracoesView',
    components: {
      Estacionamento,
    },
  });
  </script>