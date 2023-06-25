<template>
    <div class="configuracoes">
      <Estacionamento/>
        
    <div class="main-content d-flex flex-column align-items-start">
        <LinkDinamicoComponent routeList="/modelo" routeRegister="/modelo/cadastrar" default-active="register" />


        <div class="table-display mt-4 w-100">

          <table class="table table-primary table-striped  table-sm w-100 table-bordered border-light">
         <thead class="text-white">
           <tr>
             <th scope="col">Id</th>
             <th scope="col">Modelo</th>
              <th scope="col">Marca</th>
              <th scope="col" style="width:250px">Ação</th>
            </tr>
          </thead>
          <tbody class="text-white">
            <tr v-for="item in modeloList" :key="item.id">
            <td> {{ item.id }}</td>
            <td>{{ item.nome }}</td>
            <td>{{ item.marca.nome }}</td>

            <td>
              <div class="d-flex justify-content-center actions">
                <button class="btn btn-sm btn-primary me-1">
                  <i class="bi bi-pencil-square"></i> Editar </button>



                <button class="btn btn-sm btn-danger" @click="excluir(item.id)" >
                  <i class="bi bi-trash"></i> Excluir </button>
              </div>
            </td>
          </tr>
        </tbody>


        </table>
    </div>


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
import { Modelo } from '@/modal/Modelo';
import { ModeloClient } from '@/client/ModeloClient';
import { Marca } from '@/modal/Marca';
import { MarcaClient } from '@/client/MarcaClient';

  export default defineComponent({
    name: 'ModeloView',
    components: {
      Estacionamento,
      LinkDinamicoComponent
    },
    data() {
    return {
      modeloList: new Array<Modelo>(),
    }
  },
    mounted() {
    this.findAll();
  },


    methods: {
    

    findAll() {

      const modeloClient = new ModeloClient

      modeloClient.findByAll()
      .then(sucess => {
    
      this.modeloList = sucess
    
    }
    )
    .catch(error => {
      console.log(error);
    });
},

async excluir(id: number){
    const confirmation = confirm("Você tem certeza de que deseja excluir essa marca?");
      if (!confirmation) {
        return;
      }

      try {

        const modeloClient = new ModeloClient();
        await modeloClient.delete(id);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }



  }


  }});
  </script>