<template>
      <Estacionamento/>
      <div class="Inicio">

  <div class="col-sm-4 ">
    <div class="card text-dark bg-secondary mb-4">
      <div class="card-body">
        <h5 class="card-title">Nova Movimentação</h5>
        <p class="card-text">Inicar nova movimentação.</p>
        <a href="/movimentacoes/cadastrar" class="btn btn-primary p-2">Cadastrar</a>
      </div>
    </div>
  </div>
    </div>


    <div class="table-display mt-4 w-100">

<table class="table table-primary table-striped  table-sm w-100 table-bordered border-light">
       <thead class="text-white">
         <tr >
           <th scope="col">Id</th>
            <th scope="col">Veiculo</th>
            <th scope="col">Placa</th>
            <th scope="col">Condutor</th>
            <th scope="col">Entrada</th>
            <th scope="col">Saida</th>
            <th scope="col">Temp Multa</th>
            <th scope="col">Valor Total</th>
            <th scope="col" style="width:250px">Ação</th>

          </tr>
        </thead>
        <tbody class="text-white">
          <tr v-for="item in movimentacaoList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.veiculo.modelo.nome }}</td>
          <td>{{ item.veiculo.placa }}</td>
          <td>{{ item.condutor.nome }}</td>
          <td>{{ item.entrada }}</td>
          <td>{{ item.saida }}</td>
          <td>
          {{ item.horasMulta + " Horas e " + item.minutosMulta + " Minutos" }} 
          </td>
          <td>{{ item.valorTotal }}</td>

          <td>
            <div class="d-flex justify-content-center actions">
              <button class="btn btn-sm btn-primary me-1">
                <i class="bi bi-pencil-square"></i> Editar </button>


              <button class="btn btn-sm btn-danger" >
                <i class="bi bi-trash"></i> Excluir </button>
            </div>
          </td>
        </tr>
      </tbody>

      </table>
  </div>



</template>

<style>
h1{
    color: #b1b1b1;
}

.col-sm-4{

    
    margin: 0px;
    margin-left: 32rem;
}

.card-body{


border-radius: 11px;
background-color: #bacbe6;


}

table{


background-color: #6c757d;

}

.custom-hr {
height: 1.5px;
width: 250px;
margin: 10px 0;
border: none;
background-color: #c3c3b5;
}

.page-header {
width: 100%;
}


th {
text-align: center;
height: 30px;
font-weight: 200;
font-size: 18px;
color: #ffffff;
}

td {
text-align: center;
padding: 8px;
}

.actions {
gap: 5px;
}


</style>


  <script lang="ts">
  import { defineComponent } from 'vue';
  import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
import { Movimentacao } from '@/modal/Movimentacao';
import { MovimentacaoClient } from '@/client/MovimentacaoClient';
  
  export default defineComponent({
    name: 'inicioView',
    components: {
      Estacionamento,
    },
    
    data() {
    return {
        movimentacaoList: new Array<Movimentacao>()
    }
  },
    mounted() {
    this.findAll();
  },


    methods: {

    findAll() {

      const movimentacaoClient = new MovimentacaoClient

      movimentacaoClient.findByAbertas()
      .then(sucess => {
    
      this.movimentacaoList = sucess
    
    }
    )
    .catch(error => {
      console.log(error);
    });
}
}


  });
  </script>