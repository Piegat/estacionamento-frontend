<template>
    <div class="condutor">
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
    name: 'CondutorEditarView',
    components: {
      Estacionamento,
    },
    

    computed: {

      id(){

        return this.$route.query.Id
      }

    }

  });
  </script>