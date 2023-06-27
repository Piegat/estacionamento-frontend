<template>
    <div class="veiculo">
      <Estacionamento/>
  
      <form  @submit.prevent="submitForm">
  
        <div class="aviso">
  <div v-if="mensagem.ativo" :class= "mensagem.css" role="alert">
      <h4 class="alert-heading">{{mensagem.titulo}}</h4>
      <p>{{ mensagem.texto }}</p>
    </div>
  </div>
  
  
    <label for="categoria-id" class="mtop d-flex">Modelo:</label>
  <div class="form-outline mb-4">
    <select id="form4Example1" class="wid form-control "  v-model="veiculoModel.modelo">
      <option v-for="modelo in modelolist" :value="modelo">{{ modelo.nome }}</option>
        </select>
  </div>
  
  <label for="categoria-id" class=" d-flex">Tipo de veiculo:</label>
  <div class="form-outline mb-4">
    <select id="form4Example1" class="wid form-control "  v-model="veiculoModel.tipoVeiculos">
      <option v-for="tipos in tipo" :value="tipos">{{ tipos }}</option>
        </select>
      </div>
  
  
      <label for="categoria-id" class=" d-flex">Cor:</label>
  <div class="form-outline mb-4">
    <select id="form4Example1" class="wid form-control "  v-model="veiculoModel.cor">
      <option v-for="cores in cor" :value="cores">{{ cores }}</option>
        </select>
      </div>
  
      <label for="categoria-id" class=" d-flex">Placa:</label>
  <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="wid form-control "  v-model="veiculoModel.placa"/>
      </div>
  
      
      <label for="categoria-id" class=" d-flex">Ano do veiculo:</label>
  <div class="form-outline mb-4">
    <input type="number" id="form4Example1" class="wid form-control "  v-model="veiculoModel.ano"/>
      </div>
  
  
  <!-- Message input -->
  
  <!-- Submit button -->
  <button type="submit" href="/veiculo" class="espace btn btn-primary btn-block mb-4" @submit="submitForm">Editar</button>
  
  <a  href="/veiculo" class="espace btn btn-danger btn-block mb-4 ">Voltar</a>
  
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
  import { Modelo } from '@/modal/Modelo';
  import { ModeloClient } from '@/client/ModeloClient';
  import { Veiculo } from '@/modal/Veiculo';
  import { VeiculoClient } from '@/client/VeiculoClient';
  import { Tipo } from '@/modal/Tipo';
  import { Cor } from '@/modal/Cor';
  
  export default defineComponent({
    name: 'MarcaEditar',
    components: {
      Estacionamento,
    },
  
    data() {
        return {
  
            veiculoModel: new Veiculo,
            veiculoClient: new VeiculoClient,
  
            modelolist: new Array<Modelo>(),     
            
            tipo: Object.values(Tipo),
            cor: Object.values(Cor),

            modelo: '' as string,
  
  
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                texto: "" as string,
                css: "" as string
            }
  
  
  
                  };
    },
    mounted() {
    this.findModelo();

    this.findById(this.id);
     },
     
    computed: {
    id() {
      return this.$route.query.id
    },
  },




  methods: {

    findById(id: number) {
      const veiculoClient = new VeiculoClient()
      veiculoClient
        .findById(id)
        .then(sucess => {
          this.veiculoModel = sucess
          this.modelo = sucess.modelo.nome
        })
        .catch(error => {
          this.mensagem.ativo = true;

          this.mensagem.titulo = "Algo deu errado!";
              this.mensagem.texto = error.data;
              this.mensagem.css = "alert alert-danger alert-dismissible fade show"
        })
    },
  
        findModelo(){
  
      const modeloClient = new ModeloClient
  
      modeloClient.findByAtivos()
      .then(sucess => {
  
      this.modelolist = sucess
  
      }
      )
      .catch(error => {
      console.log(error);
      });
        },
  
  
  
  
      async submitForm() {
  
  
            this.veiculoClient.update(this.veiculoModel, this.id)
                .then((response) => {
                    console.log(response);
  
                    this.mensagem.ativo = true;
                this.mensagem.titulo = "Atualizado!";
                this.mensagem.texto = "O veiculo foi editado com sucesso!";
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