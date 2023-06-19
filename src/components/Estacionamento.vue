 <template>

<div class="container">
  <div class="btn-group" role="group" aria-label="Basic outlined example">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <div class="btn-group" role="group" aria-label="Basic outlined example">

        <li class="nav-item">
          <a href="/menuveiculo" type="button" class="borda1 btn btn-outline-primary">Veiculos</a>
        </li>
        <li class="nav-item">
          <a href="/condutor" type="button" class="btn btn-outline-primary">Condutores</a>
        </li>
        <li class="nav-item">
          <a href="/" type="button" class="btn btn-outline-primary">Inicio</a></li>
        <li class="nav-item">
          <a href="/movimentacoes" type="button" class="btn btn-outline-primary">Movimentações</a>
        </li>
        <li class="nav-item">
          <a href="/configuracoes" type="button" class="borda2 btn btn-outline-primary">Configurações</a>
        </li>
        </div>
      </ul>
    </header>
  </div>
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