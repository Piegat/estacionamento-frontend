<template>
  <div class="movimentacao">
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
  <select id="form4Example1" class="wid form-control " placeholder="Selecione" v-model="movimentacaoModel.condutor">
      <option v-for="condutores in condutorlist" :value="condutores">{{ condutores.nome }}</option>
        </select>
</div>

<label for="categoria-id" class=" d-flex">Veiculo:</label>
<div class="form-outline mb-4">
  <select id="form4Example1" class="wid form-control " placeholder="Selecione" v-model="movimentacaoModel.veiculo">
      <option v-for="veiculos in veiculolist" :value="veiculos">{{ veiculos.modelo.nome + " | " + veiculos.placa }}</option>
        </select>
</div>

<label for="categoria-id" class=" d-flex">Entrada:</label>
<div class="form-outline mb-4">
  <input type="datetime-local" id="form4Example1" class="wid form-control "  v-model="movimentacaoModel.entrada"/>
</div>

<label for="categoria-id" class=" d-flex">Saida:</label>
<div class="form-outline mb-4">
  <input type="datetime-local" id="form4Example1" class="wid form-control "  v-model="movimentacaoModel.saida"/>
</div>






<!-- Message input -->

<!-- Submit button -->
<button type="submit" href="/movimentacoes" class="espace btn btn-primary btn-block mb-4" @submit="submitForm">Cadastrar</button>

<a  href="/movimentacoes" class="espace btn btn-danger btn-block mb-4 ">Voltar</a>

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
import { Condutor } from '@/modal/Codutor';
import { CondutorClient } from '@/client/CondutorClient';
import { Movimentacao } from "@/modal/Movimentacao";
import { MovimentacaoClient } from "@/client/MovimentacaoClient";
import { VeiculoClient } from "@/client/VeiculoClient";
import { Veiculo } from "@/modal/Veiculo";

export default defineComponent({
  name: 'CondutorCadastrar',
  components: {
    Estacionamento,
  },

  data() {
      return {
          movimentacaoModel: new Movimentacao,
          movimentacaoClient: new MovimentacaoClient,    

          condutorlist: new Array<Condutor>(),
          veiculolist: new Array<Veiculo>(),
         
          

          mensagem: {
              ativo: false as boolean,
              titulo: "" as string,
              texto: "" as string,
              css: "" as string
          }



                };
  },

  mounted(){

    this.findCondutor()
    this.findVeiculos()


  },


  methods: {

    findCondutor(){

      const condutorClient = new CondutorClient

      condutorClient.findByAll()
      .then(sucess => {
    
      this.condutorlist = sucess
    
    }
    )
    .catch(error => {
      console.log(error);
    });
    },

    findVeiculos(){
      const veiculoClient = new VeiculoClient

      veiculoClient.findByAll()
      .then(sucess => {
    
      this.veiculolist = sucess
    
    }
    )
    .catch(error => {
      console.log(error);
    });

    },


    



    async submitForm() {

          this.movimentacaoClient.save(this.movimentacaoModel)
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


  }});
</script>