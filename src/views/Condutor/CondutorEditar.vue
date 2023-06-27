<template>
  <div class="condutor">
    <Estacionamento/>

    <form  @submit.prevent="submitForm">

      <div class="aviso">
<div v-if="mensagem.ativo" :class= "mensagem.css" role="alert">
    <h4 class="alert-heading">{{mensagem.titulo}}</h4>
    <p>{{ mensagem.texto }}</p>
  </div>
</div>



  <label for="categoria-id" class="mtop d-flex">Condutor:</label>
<div class="form-outline mb-4">
  <input type="text" id="form4Example1" class="wid form-control " v-model="condutorModel.nome"/>
</div>

<label for="categoria-id" class=" d-flex">CPF:</label>
<div class="form-outline mb-4">
  <input type="text" id="form4Example1" class="wid form-control "  v-maska data-maska="###.###.###-##"  v-model="condutorModel.cpf"/>
</div>

<label for="categoria-id" class=" d-flex">Telefone:</label>
<div class="form-outline mb-4">
  <input type="text" id="form4Example1" class="wid form-control "  v-maska data-maska="(###) #####-####"  v-model="condutorModel.telefone"/>
</div>




<!-- Message input -->

<!-- Submit button -->
<button type="submit" href="/condutor" class="espace btn btn-primary btn-block mb-4" @submit="submitForm">Editar</button>

<a  href="/condutor" class="espace btn btn-danger btn-block mb-4 ">Voltar</a>

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

<script setup lang="ts">
import { vMaska } from "maska";
</script>


<script lang="ts">
import { defineComponent } from 'vue';
import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
import AvisoComponent from '@/components/Aviso.vue'; // @ is an alias to /src

import { Condutor } from '@/modal/Codutor';
import { CondutorClient } from '@/client/CondutorClient';

export default defineComponent({
  name: 'CondutorCadastrar',
  components: {
    Estacionamento,
    AvisoComponent
  },

  data() {
      return {
          condutorModel: new Condutor,
          condutorClient: new CondutorClient,          

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
      const condutorClient = new CondutorClient()
      condutorClient
        .findById(id)
        .then(sucess => {
          this.condutorModel = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;

          this.mensagem.titulo = "Algo deu errado!";
              this.mensagem.texto = error.data;
              this.mensagem.css = "alert alert-danger alert-dismissible fade show"
        })
    },



    async submitForm() {



          this.condutorClient.update(this.condutorModel, Number(this.id))
              .then((response) => {
                  console.log(response);

                  this.mensagem.ativo = true;
              this.mensagem.titulo = "Editado!";
              this.mensagem.texto = "O condutor foi editado com sucesso!";
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