<template>
    <div class="Modelo">
      <Estacionamento/>

      <form  @submit.prevent="submitForm">

        <div class="aviso">
  <div v-if="mensagem.ativo" :class= "mensagem.css" role="alert">
      <h4 class="alert-heading">{{mensagem.titulo}}</h4>
      <p>{{ mensagem.texto }}</p>
    </div>
  </div>


    <label for="categoria-id" class="mtop d-flex">Nome do Modelo:</label>
  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="wid form-control " placeholder="Nome do Modelo"  v-model="modeloModel.nome"/>
  </div>/

  <label for="categoria-id" class=" d-flex">Marca do Modelo::</label>
  <div class="form-outline mb-4">
    <select id="form4Example1" class="wid form-control " placeholder="Selecione" v-model="marcaModel">
      <option v-for="marca in marcalist" :value="marca">{{ marca.nome }}</option>
        </select>
      </div>


  <!-- Message input -->

  <!-- Submit button -->
  <button type="submit" href="/modelo" class="espace btn btn-primary btn-block mb-4" @submit="submitForm">Cadastrar</button>

  <a  href="/modelo" class="espace btn btn-danger btn-block mb-4 ">Cancelar</a>

</form>


    </div>
  </template>


<style>

.mtop{

  margin-top: 8rem;

}

label{

  margin-left: 35vw;
  margin-bottom: 8px;
  color: white;

}

h1{
    color: #b1b1b1;
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
    padding: 10px;
    

  }

  .aviso{

border-radius: 15px;
width: 30rem;
margin-left: 32rem;
margin-bottom: -7rem;

}


</style>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
import { Marca } from '@/modal/Marca';
import { MarcaClient } from '@/client/MarcaClient';
import { Modelo } from '@/modal/Modelo';
import { ModeloClient } from '@/client/ModeloClient';
  
  export default defineComponent({
    name: 'MarcaCadastrar',
    components: {
      Estacionamento,
    },

    data() {
        return {
            marcalist: new Array<Marca>(),
            marcaModel: new Marca,

            modeloModel: new Modelo(),
            modeloClient: new ModeloClient(),
            

            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                texto: "" as string,
                css: "" as string
            }



                  };
    },
    mounted() {
    this.findMarca();
  },



    methods: {

    findMarca(){

      const marcaClient = new MarcaClient

      marcaClient.findByAtivos()
      .then(sucess => {
    
      this.marcalist = sucess

    }
    )
    .catch(error => {
      console.log(error);
    });


    },


      async submitForm() {
            const modelo = new Modelo();
            modelo.ativo = true;
            modelo.nome = this.modeloModel.nome;
            modelo.marca = this.marcaModel;
            modelo.cadastro = new Date()

            this.modeloClient.save(modelo)
                .then((response) => {
                    console.log(response);

                    this.mensagem.ativo = true;
                this.mensagem.titulo = "Cadastrado!";
                this.mensagem.texto = "O modelo foi cadastrada com sucesso!";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                })
                .catch((error) => {
                    console.log(error);
                    console.log(modelo.marca)
                    this.mensagem.ativo = true;
                this.mensagem.titulo = "Algo deu errado!";
                this.mensagem.texto = error.data;
                this.mensagem.css = "alert alert-danger alert-dismissible fade show"

                });
        }


    }


  });
  </script>