<template>
      <Estacionamento/>
      <div class="Inicio">

<div class="row d-flex align-itens-center">
  <div class="col-sm-4">
    <div class="card text-dark bg-secondary mb-4">
      <div class="card-body">
        <h5 class="card-title">Finalizar Movimentação</h5>
        <p class="card-text">Finalizar movimentação existente.</p>
        <a href="/movimentacoes/editar" class="btn btn-primary p-2">Redirecionar</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card text-dark bg-secondary mb-4">
      <div class="card-body">
        <h5 class="card-title">Nova Movimentação</h5>
        <p class="card-text">Inicar nova movimentação.</p>
        <a href="/movimentacoes/cadastrar" class="btn btn-primary p-2">Redirecionar</a>
      </div>
    </div>
  </div>
    </div>
  </div>

</template>

<style>
h1{
    color: #b1b1b1;
}

.row{

    
    margin: 0px;
    margin-top: 15rem;
    margin-left: 24rem;
}

.card-body{

border-radius: 11px;
background-color: #bacbe6;


}

</style>


  <script lang="ts">
  import { defineComponent } from 'vue';
  import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'inicioView',
    components: {
      Estacionamento,
    },
  });
  </script>