<template>
    <div class="Marca">
      <Estacionamento/>

      <form  @submit.prevent="submitForm">
  <div class="aviso">
  <div v-if="mensagem.ativo" :class= "mensagem.css" role="alert">
      <h4 class="alert-heading">{{mensagem.titulo}}</h4>
      <p>{{ mensagem.texto }}</p>
    </div>
  </div>

    <label for="categoria-id" class=" d-flex">Nome da Marca:</label>
  <div class="form-outline mb-4">
    <input type="text" id="marca-nome" class="wid form-control " v-model="marcaModel.nome"/>
  </div>


  <!-- Message input -->

  <!-- Submit button -->
  <button type="submit" href="/marca" class="espace btn btn-primary btn-block mb-4" @submit="submitForm">Editar</button>

  <a  href="/marca" class="espace btn btn-danger btn-block mb-4 ">Voltar</a>

</form>

    </div>
  </template>


<style>


label{

  margin-top: 10rem;
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
  
  export default defineComponent({
    name: 'MarcaEditar',
    components: {
      Estacionamento,


    },
    data() {
        return {
            marcaModel: new Marca(),
            marcaClient: new MarcaClient(),
            nameMarca: String,

            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                texto: "" as string,
                css: "" as string
            }



                  };
    },

    mounted(){

        this.findById(Number(this.id))

    },

    computed: {
    id() {
      return this.$route.query.id
    },
  },

    methods: {


        findById(id: number) {
      const marcaClient = new MarcaClient()
      marcaClient
        .findById(id)
        .then(sucess => {
          this.marcaModel = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;

          this.mensagem.titulo = "Algo deu errado!";
              this.mensagem.texto = error.data;
              this.mensagem.css = "alert alert-danger alert-dismissible fade show"
        })
    },


      async submitForm() {

            this.marcaClient.update(this.marcaModel, Number(this.id))
                .then((response) => {
                    console.log(response);
                    console.log(this.id);

                this.mensagem.ativo = true;
                this.mensagem.titulo = "Atualizado!";
                this.mensagem.texto = "A marca foi editada com sucesso!";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                })
                .catch((error) => {
                    console.log(error);

                    this.mensagem.ativo = true;
                this.mensagem.titulo = "Algo deu errado!";
                this.mensagem.texto = error.data;
                this.mensagem.css = "alert alert-danger alert-dismissible fade show"

                });
        }


    }

  });
  </script>