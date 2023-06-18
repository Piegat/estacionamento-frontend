 <template>

<div class="container">
  <div class="btn-group" role="group" aria-label="Basic outlined example">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="/menuveiculo" class="nav-link" aria-current="page">Veiculos</a>
        </li>
        <li class="nav-item">
          <a href="/condutor" class="nav-link">Condutores</a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link">Inicio</a></li>
        <li class="nav-item">
          <a href="/movimentacoes" class="nav-link">Movimentações</a>
        </li>
        <li class="nav-item">
          <a href="/configuracoes" class="nav-link">Configurações</a>
        </li>
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
  .navbar{
    height: 100%;
    /* position: fixed; */
  }
  
  a{
    font-size: 16px;
  }
  
  i{
    font-size: 18px;
    margin-bottom: 6px;
  }
  
  li{
    margin-bottom: 12px;
  }
  
  </style>