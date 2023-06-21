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
              <th scope="col">Condutor</th>
              <th scope="col">Entrada</th>
              <th scope="col">Saida</th>
              <th scope="col">Temp Multa</th>
              <th scope="col">Valor Total</th>
              <th scope="col" style="width:250px">Ação</th>

            </tr>
          </thead>
          <tbody class="text-white">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td>
              <div class="d-flex justify-content-center actions">
                <button class="btn btn-sm btn-primary me-1">
                  <i class="bi bi-pencil-square"></i> Editar </button>

                  <button class="btn btn-sm btn-success me-1">
                  <i class="bi bi-pencil-square"></i> Detalhar </button>


                <button class="btn btn-sm btn-danger" >
                  <i class="bi bi-trash"></i> Excluir </button>
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

  export default defineComponent({
    name: 'MovimentacaoVue',
    components: {
      Estacionamento,
      LinkDinamicoComponent
    },
  });
  </script>