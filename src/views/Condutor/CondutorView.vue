<template>
<Estacionamento/>
<div class="condutor">
        
    <div class="main-content d-flex flex-column align-items-start">
        <div class="page-header d-flex justify-content-between align-items-center">
        <LinkDinamicoComponent routeList="/condutor" routeRegister="/condutor/cadastrar" default-active="register" />
         </div>           
    </div>


<div class="table-display mt-4 w-100">
        <table class="table table-primary table-striped  table-sm w-100 table-bordered border-light">
         <thead class="text-white">
           <tr >
             <th scope="col">Id</th>
              <th scope="col">Nome Completo</th>
              <th scope="col">CPF</th>
              <th scope="col">Telefone</th>
              <th scope="col">Horas Pagas</th>
              <th scope="col">Horas Desc</th>
              <th scope="col">Ativo</th>
              <th scope="col" style="width:250px">Ação</th>


            </tr>
          </thead>
          <tbody class="">
          <tr v-for="item in condutorList" :key="item.id">
            <td> {{ item.id }}</td>
            <td>{{ item.nome }}</td>
            <td>{{ item.cpf }}</td>
            <td>{{ item.telefone }}</td>
            <td>{{ item.horasPagas }}</td>
            <td>{{ item.horasDesconto }}</td>
            <td>
              <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
              <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
            </td>

            <td>
              <div class="d-flex justify-content-center actions">
                <router-link class="btn btn-sm btn-primary me-1" :to="{name: 'CondutorEditar', query: { id: item.id } }">
                  <i class="bi bi-pencil-square"></i> Editar </router-link>


                  <button class="btn btn-sm btn-danger" @click="excluir(item.id)" >
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
import { Condutor } from '@/modal/Codutor';
import { CondutorClient } from '@/client/CondutorClient';


  export default defineComponent({
    name: 'CondutorView',
    components: {
      Estacionamento,
      LinkDinamicoComponent
    },

    data() {
    return {
        condutorList: new Array<Condutor>()
    }
  },
    mounted() {
    this.findAll();
  },


    methods: {

    findAll() {

      const condutorClient = new CondutorClient

      condutorClient.findByAll()
      .then(sucess => {
    
      this.condutorList = sucess
    
    }
    )
    .catch(error => {
      console.log(error);
    });
},

  async excluir(id: number){
    const confirmation = confirm("Você tem certeza de que deseja excluir esse condutor?");
      if (!confirmation) {
        return;
      }

      try {

        const condutorClient = new CondutorClient();
        await condutorClient.delete(id);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }



  }

}


  });
  </script>