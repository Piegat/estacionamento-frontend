 <template>

<div class="container bg-dark">
    <header class="d-flex flex-wrap justify-content-center py-2 mb-3 ">
        <span class="fs-4 text-white d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">Estacionamento</span>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" type="button" class="nav-link text-white">Inicio</a></li>
        <li class="nav-item"><a href="/menuveiculo" type="button" class="nav-link text-white">Veiculos</a></li>
        <li class="nav-item"><a href="/condutor" type="button" class="nav-link text-white">Condutores</a></li>
        <li class="nav-item"><a href="/movimentacoes" type="button" class="nav-link text-white">Movimentações</a></li>
        <li class="nav-item"><a href="/configuracoes" type="button" class="nav-link text-white">Configurações</a></li>
      </ul>
    </header>
  </div>

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
      name: "Estacionamento"
  })
  </script>
  
  <style scoped>

  a:active{

    background-color: white;

  }

  .borda2{

    border-end-end-radius: 10px;
    border-top-right-radius: 10px;

  }

  .borda1{

    border-top-left-radius: 10px;
    border-end-start-radius: 10px;

}

  .container{

    width: 100rem;
    max-width: 100vw;

  }

  .navbar{
    height: 100%;
    /* position: fixed; */
  }
  
  a{
    font-size: 16px;   
    border-radius: 0px;
 
  }
  
  i{
    font-size: 18px;
    margin-bottom: 6px;
  }
  
  li{
    margin-bottom: 12px;
  }
  
  </style>