<template>
    <div class="Movimentacao">
      <Estacionamento/>
        
    <div class="main-content d-flex flex-column align-items-start">
        <div class="page-header d-flex justify-content-between align-items-center">
        <LinkDinamicoComponent routeList="/movimentacoes" routeRegister="/movimentacoes/cadastrar" default-active="register" />
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
              <th scope="col">Tempo Multa</th>
              <th scope="col">Tempo Total</th>
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
            <td>{{ item.horasMulta + " Horas e " + item.minutosMulta + " Minutos" }}</td>
            <td>{{ item.horastempo + " Horas e " + item.minutostempo + " Minutos" }}</td>
            <td>{{ item.valorTotal }}</td>

            <td>
              <div class="d-flex justify-content-center actions">
                <router-link class="btn btn-sm btn-primary me-1" :to="{name: 'MovimentacaoEditar', query: { id: item.id } }">
                  <i class="bi bi-pencil-square"></i> Editar </router-link>


                  <router-link class="btn btn-sm btn-success me-1" :to="{name: 'MovimentacaoCupom', query: { id: item.id } }">
                  <i class="bi bi-pencil-square"></i> Detalhar </router-link>
              </div>
            </td>
          </tr>
        </tbody>

        </table>
    </div>

</div>



  </template>

<style>



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
  import LinkDinamicoComponent from '@/components/LinkDinamicoComponent.vue'; // @ is an alias to /src
import { Movimentacao } from '@/modal/Movimentacao';
import { MovimentacaoClient } from '@/client/MovimentacaoClient';

  export default defineComponent({
    name: 'MovimentacaoVue',
    components: {
      Estacionamento,
      LinkDinamicoComponent
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

      movimentacaoClient.finByAll()
      .then(sucess => {
    
      this.movimentacaoList = sucess
    
    }
    )
    .catch(error => {
      console.log(error);
    });

    console.log(this.movimentacaoList)
}
}


  });
  </script>