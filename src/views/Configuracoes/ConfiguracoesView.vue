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


  <label for="categoria-id" class="mtop d-flex">Inicio Expediente:</label>
<div class="form-outline mb-4">
  <input type="text" id="form4Example1" class="wid form-control " v-maska data-maska="##:##:##" v-model="configuracaoModel.inicioExpediente"/>
</div>

<label for="categoria-id" class=" d-flex">Fim Expediente:</label>
<div class="form-outline mb-4">
  <input type="text" id="form4Example1" class="wid form-control " v-maska data-maska="##:##:##"   v-model="configuracaoModel.fimExpediente"/>
</div>

<label for="categoria-id" class=" d-flex">Valor Hora:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control "  v-model="configuracaoModel.valorHora"/>
</div>

<label for="categoria-id" class=" d-flex">Valor Minuto Multa:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control " v-model="configuracaoModel.valorMinutoMulta"/>
</div>

<label for="categoria-id" class=" d-flex">Horas para gerar desconto:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control "  v-model="configuracaoModel.horasParaDesconto"/>
</div>

<label for="categoria-id" class=" d-flex">Minutos para gerar desconto:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control " v-model="configuracaoModel.minutosParaDesconto"/>
</div>

<label for="categoria-id" class=" d-flex">Horas de desconto fornecidos:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control " v-model="configuracaoModel.horasDeDesconto">
</div>

<label for="categoria-id" class=" d-flex">Gerar Desconto:</label>
  <div class="form-outline mb-4">
    <select id="form4Example1" class="wid form-control " v-model="configuracaoModel.gerarDesconto">
      <option> true</option>
      <option> false</option>
        </select>
      </div>


      <label for="categoria-id" class=" d-flex">Vagas de carro:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control "  v-model="configuracaoModel.vagasCarro">
</div>


<label for="categoria-id" class=" d-flex">Vagas de moto:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control "  v-model="configuracaoModel.vagasMoto">
</div>


<label for="categoria-id" class=" d-flex">Vagas de van:</label>
<div class="form-outline mb-4">
  <input type="number" id="form4Example1" class="wid form-control "  v-model="configuracaoModel.vagasVan">
</div>



<!-- Submit button -->
<button type="submit" href="/configuracao" class="espace btn btn-primary btn-block mb-4" @submit="submitForm">Atualizar</button>

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
import { Configuracao } from '@/modal/Configuracao';
import { ConfiguracaoClient } from '@/client/ConfiguracaoClient';

export default defineComponent({
  name: 'Config',
  components: {
    Estacionamento,
  },

  data() {
      return {
          configuracaoModel: new Configuracao,
          configuracaoClient: new ConfiguracaoClient,   
          

          mensagem: {
              ativo: false as boolean,
              titulo: "" as string,
              texto: "" as string,
              css: "" as string
          }



                };
  },

  mounted(){

    this.getConfig();

  },

  methods: {

    getConfig(){

      const configuracaoClient = new ConfiguracaoClient

      configuracaoClient.findById(1)
        .then(sucess => {
        this.configuracaoModel = sucess
        console.log(this.configuracaoModel)
        }
        )
        .catch(error => {
        console.log(error);
      });



    },



    async submitForm() {
          

      const confirmation = confirm("Você tem certeza de que deseja atualizar as configurações?");
      if (!confirmation) {
        return;
      }

          this.configuracaoClient.update(this.configuracaoModel)
              .then((response) => {
                  console.log(response);

                  this.mensagem.ativo = true;
              this.mensagem.titulo = "Atualizado!";
              this.mensagem.texto = "A configuração foi atualizada com sucesso!";
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