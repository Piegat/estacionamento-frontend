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
  <input type="text" id="form4Example1" class="wid form-control " placeholder="Nome Completo"  v-model="condutorModel.nome"/>
</div>

<label for="categoria-id" class=" d-flex">CPF:</label>
<div class="form-outline mb-4">
  <input type="text" id="form4Example1" class="wid form-control " placeholder="CPF"  v-model="condutorModel.cpf"/>
</div>

<label for="categoria-id" class=" d-flex">Telefone:</label>
<div class="form-outline mb-4">
  <input type="text" id="form4Example1" class="wid form-control " placeholder="Telefone"  v-model="condutorModel.telefone"/>
</div>




<!-- Message input -->

<!-- Submit button -->
<button type="submit" href="/condutor" class="espace btn btn-primary btn-block mb-4" @submit="submitForm">Cadastrar</button>

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

<script lang="ts">
import { defineComponent } from 'vue';
import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
import { Condutor } from '@/modal/Codutor';
import { CondutorClient } from '@/client/CondutorClient';

export default defineComponent({
  name: 'CondutorCadastrar',
  components: {
    Estacionamento,
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



  methods: {



    async submitForm() {
          const condutor = new Condutor();
          condutor.ativo = true;
          condutor.nome = this.condutorModel.nome;
          condutor.cpf = this.condutorModel.cpf;
          condutor.telefone = this.condutorModel.telefone;


          condutor.cadastro = new Date()

          this.condutorClient.save(condutor)
              .then((response) => {
                  console.log(response);

                  this.mensagem.ativo = true;
              this.mensagem.titulo = "Cadastrado!";
              this.mensagem.texto = "O modelo foi cadastrada com sucesso!";
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