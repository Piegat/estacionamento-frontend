<template>
      <Estacionamento/>
      <div class="MenuVeiculo">

<div class="row">
  <div class="col-sm-4">
    <div class="card text-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">Marcas</h5>
        <p class="card-text">Redirecionar para a lista de marcas.</p>
        <a href="/marca" class="btn btn-primary p-2">Redirecionar</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 ">
    <div class="card text-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">Veiculos</h5>
        <p class="card-text">Redirecionar para a lista de veiculos.</p>
        <a href="/veiculo" class="btn btn-primary">Redirecionar</a>
      </div>
    </div>
  </div>

  <div class="col-sm-4" >
    <div class="card text-dark mb-3">
      <div class="card-body">
        <h5 class="card-title ">Modelos</h5>
        <p class="card-text">Redirecionar para a lista de modelos.</p>
        <a href="/modelo" class="btn btn-primary">Redirecionar</a>
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
    name: 'VeiculoMenu',
    components: {
      Estacionamento,
    },
  });
  </script>