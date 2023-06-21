<template>
    <div class="Modelo">
      <Estacionamento/>

      <form>
  <!-- Name input -->

    <label for="categoria-id" class="mtop d-flex">Nome do Modelo:</label>
  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="wid form-control " placeholder="Nome do Modelo" />
  </div>

  <label for="categoria-id" class=" d-flex">Marca do Modelo::</label>
  <div class="form-outline mb-4">
    <select id="form4Example1" class="wid form-control " placeholder="Selecione"><option> TESTE </option> </select>
  </div>


  <!-- Message input -->

  <!-- Submit button -->
  <a type="submit" href="/modelo" class="espace btn btn-primary btn-block mb-4">Cadastrar</a>

  <a  href="/modelo" class="espace btn btn-danger btn-block mb-4 ">Cancelar</a>

</form>


    </div>
  </template>


<style>

.mtop{

  margin-top: 8rem;

}

label{

  margin-left: 35vw;
  margin-bottom: 8px;
  color: white;

}

h1{
    color: #b1b1b1;
}


.espace{

    margin-left: 10px;
    border: none;

}

.wid{

    margin: auto;
    width: 30%;
    border: none;
    background-color: #cfe2ff;

}

form{

    margin-top: 50px;
    padding: 10px;
    

}

</style>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'MarcaCadastrar',
    components: {
      Estacionamento,
    },
  });
  </script>