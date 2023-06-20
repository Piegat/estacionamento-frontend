<template>
    <div class="condutor">
      <Estacionamento/>

      <form>
  <!-- Name input -->

    <label for="categoria-id" class="text-primary">Nome Completo</label>
  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="wid form-control bg-secondary" placeholder="Nome Completo" />
  </div>

  <label for="categoria-id" class="text-primary">CPF</label>
  <div class="form-outline mb-4">
    <input type="text" id="form4Example2" class=" wid form-control bg-secondary" placeholder="CPF" />
  </div>


  <!-- Email input -->
  <label for="categoria-id" class="text-primary">E-Mail</label>

  <div class="form-outline mb-4">
    <input type="email" id="form4Example2" class="wid form-control bg-secondary" placeholder="E-Mail" />
  </div>

  <label for="categoria-id" class="text-primary">Telefone</label>

  <div class="form-outline mb-4">
    <input type="text" id="form4Example2" class="wid form-control bg-secondary" placeholder="Telefone" />
  </div>


  <!-- Message input -->

  <!-- Submit button -->
  <a type="submit" href="/condutor" class="espace btn btn-primary btn-block mb-4">Cadastrar</a>

  <a  href="/condutor" class="espace btn btn-danger btn-block mb-4 ">Cancelar</a>

</form>


    </div>
  </template>


<style>
h1{
    color: #b1b1b1;
}


.espace{

    margin-left: 10px;
    border: none;

}

.wid{

    margin: auto;
    width: 50%;
    border: none;

}

form{

    margin-top: 50px;

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