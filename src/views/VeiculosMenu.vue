<template>
      <Estacionamento/>
      <div class="MenuVeiculo">

      <div class="row align-items-center">

    <div class="col">

<div class="card" style="width: 17rem">
    <div class="card-body">
    <h5 class="card-title">Veiculos</h5>
        <div class="container overflow-hidden">
                <div class="row gx-5">
                    <div class="col">
                        <a href="#" class="btn btn-primary p-1 border">Cadastrar</a>
                    </div>
                </div>

            <a href="#" class="btn btn-primary border">Listar</a>
            
            </div>
    </div>
    </div>
</div>

<div class="col">

    <div class="card" style="width: 17rem;">
    <div class="card-body">
        <h5 class="card-title">Marca</h5>
        <div class="container overflow-hidden">
            <div class="row gx-5">
                <div class="col">
                    <a href="#" class="btn btn-primary p-1 border">Cadastrar</a>
                </div>
            </div>

        <a href="#" class="btn btn-primary border">Listar</a>
        
        </div>
    </div>
  </div>
</div>

<div class="col">

<div class="card" style="width: 17rem;">
  <div class="card-body">
    <h5 class="card-title">Modelos</h5>
    <div class="container overflow-hidden">
            <div class="row gx-5">
                <div class="col">
                    <a href="#" class="btn btn-primary p-1 border">Cadastrar</a>
                </div>
            </div>

        <a href="#" class="btn btn-primary border">Listar</a>
        
        </div>
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