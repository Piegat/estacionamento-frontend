<template>
    <div class="MovimentacaoNew">
      <Estacionamento/>

      <form>
  <!-- Name input -->

    <label for="categoria-id" class="d-flex">Condutor</label>
  <div class="form-outline mb-4">
    <select  id="form4Example1" class="wid form-control" placeholder="Nome Completo"><option >TESTE </option></select>
  </div>

  <label for="categoria-id" class="d-flex">Veiculo</label>
  <div class="form-outline mb-4">
    <select id="form4Example2" class=" wid form-control "><option>TESTE </option></select>
  </div>


  <!-- Email input -->
  <label for="categoria-id" class="d-flex">Entrada: </label>

  <div class="form-outline mb-4">
    <input type="datetime-local" id="date" class="wid form-control " placeholder="" />
  </div>


  <!-- Message input -->

  <!-- Submit button -->
  <a type="submit" href="/movimentacoes" class="espace btn btn-primary btn-block mb-4">Cadastrar</a>

  <a  href="/movimentacoes" class="espace btn btn-danger btn-block mb-4 ">Cancelar</a>

</form>


    </div>
  </template>


<style>
h1{
    color: #b1b1b1;
}

label{

margin-left: 35vw;
color: white;

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

}
</style>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'MovimentacaoCadastrar',
    components: {
      Estacionamento,
    },
  });
  </script>