<template>
<Estacionamento/>
<div class="cupom">


<h3 for="categoria-id" class="titulo d-flex">ESTACIONAMENTO</h3>

<label for="categoria-id" class="dados d-flex">Nome do Condutor:</label>
<div class="form-outline mb-4">
     <p>{{ condutor }}</p>
</div>


<label for="categoria-id" class="dados d-flex">CPF do Condutor:</label>
<div class="form-outline mb-4">
     <p>{{ condutorCPF }}</p>
</div>

<label for="categoria-id" class="dados d-flex">Modelo :</label>
<div class="form-outline mb-4">
     <p>{{ veiculo }}</p>
</div>

<label for="categoria-id" class="dados d-flex">Placa do veiculo:</label>
<div class="form-outline mb-4">
     <p>{{ veiculoPlaca }}</p>
</div>

<label for="categoria-id" class="dados d-flex">Entrada:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.entrada }}</p>
</div>


<label for="categoria-id" class="dados d-flex">Saida:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.saida }}</p>
</div>


<label for="categoria-id" class="dados d-flex">Tempo Total:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.horastempo + " Horas e " + movimentacaoModel.minutostempo + "0 minutos" }}</p>
</div>


<label for="categoria-id" class="dados d-flex">Tempo Multa:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.horasMulta + " Horas e " + movimentacaoModel.minutosMulta + "0 minutos" }}</p>
</div>

<label for="categoria-id" class="dados d-flex">Tempo Desconto:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.horasDesconto + " Horas e " + movimentacaoModel.minutosDesconto + "0 minutos" }}</p>
</div>

<label for="categoria-id" class="dados d-flex">Valor Multa:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.valorMulta  }}</p>
</div>


<label for="categoria-id" class="dados d-flex">Valor Desconto:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.valorDesconto  }}</p>
</div>

<label for="categoria-id" class="dados d-flex">Valor Total:</label>
<div class="form-outline mb-4">
     <p>{{ movimentacaoModel.valorTotal  }}</p>
</div>

</div>

<a  href="/movimentacoes" class="espace btn btn-danger btn-block mb-4 ">Voltar</a>

</template>
<script lang="ts">
import { MovimentacaoClient } from '@/client/MovimentacaoClient';
import Estacionamento from '@/components/Estacionamento.vue'; // @ is an alias to /src
import { Movimentacao } from '@/modal/Movimentacao';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MovimentacaoCupom',
  components: {
    Estacionamento,
  },

  data(){
    return{
        movimentacaoModel: new Movimentacao,
        condutor: '' as string,
        condutorCPF: '' as string,
        veiculo: '' as string,
        veiculoPlaca: '' as string,        
    }
  },

  mounted(){

if (this.id !== undefined) {
  this.findById(Number(this.id))
}
    
},

computed: {
id() {
  return this.$route.query.id
},

},



methods: {

findById(id: number) {
  const movimentacaoClient = new MovimentacaoClient()
  movimentacaoClient
    .findById(id)
    .then(sucess => {
        this.movimentacaoModel = sucess
        this.condutor = sucess.condutor.nome
        this.condutorCPF = sucess.condutor.cpf

        this.veiculoPlaca = sucess.veiculo.placa
        this.veiculo = sucess.veiculo.modelo.nome

        console.log(sucess)
    })
    .catch(error => {
        console.log(error)
    })
},

}

});



</script>

<style>
  p {
    white-space: pre-wrap;
  }

  .titulo{

    margin: auto;
    width: 50%;
    margin-bottom: 20px; 
    border: none;
    color: white;

  }

  .cupom{

    background-color: rgb(47, 71, 63);
    margin: auto;
    width: 50%;
    border-radius: 30px;
  }

  .dados{

    margin: auto;
    width: 30%;
    border: none;
    color: white;
}


  p{


    display: flex;
    margin: auto;
  width: 30%;
    color: white;  

}

</style>