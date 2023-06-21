<template>
    <div class="condutor">
      <Estacionamento/>

      <form>
  <!-- Name input -->

    <label for="categoria-id" class=" d-flex">Nome Completo</label>
  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="wid form-control " placeholder="Nome Completo" />
  </div>

  <label for="categoria-id" class=" d-flex ">CPF</label>
  <div class="form-outline mb-4">
    <input type="text" id="form4Example2" class=" wid form-control " placeholder="CPF" />
  </div>


  <!-- Email input -->
  <label for="categoria-id" class=" d-flex">E-Mail</label>

  <div class="form-outline mb-4">
    <input type="email" id="form4Example2" class="wid form-control " placeholder="E-Mail" />
  </div>

  <label for="categoria-id" class=" d-flex">Telefone</label>

  <div class="form-outline mb-4">
    <input type="text" id="form4Example2" class="wid form-control " placeholder="Telefone" />
  </div>


  <!-- Message input -->

  <!-- Submit button -->
  <a type="submit" href="/condutor" class="espace btn btn-primary btn-block mb-4">Cadastrar</a>

  <a  href="/condutor" class="espace btn btn-danger btn-block mb-4 ">Cancelar</a>

</form>


    </div>
  </template>


<style>


label{

  margin-left: 35vw;
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
    name: 'CondutorCadastrar',
    components: {
      Estacionamento,
    },
  });
  </script>