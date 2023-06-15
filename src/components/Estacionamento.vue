 <template>

    <div class="navbar fixed-top d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 250px;">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      </a>
      <hr>
      <hr>
      <ul class="nav d-flex align-items-start nav-pills flex-column mb-auto">
        <li class="nav-item d-flex align-items-center justify-content-center">
            <i class="bi bi-house-fill"></i> <router-link class="nav-link text-white" to="/">Inicio</router-link>
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <i class="bi bi-people-fill"></i><router-link class="nav-link text-white" to="/">Veiculos</router-link>
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <i class="bi bi-bookmark-fill"></i><router-link class="nav-link text-white" to="/">Condutores</router-link>
        </li>
        <li class="nav-item d-flex align-items-center justify-content-center">
          <i class="bi bi-archive-fill"></i><router-link class="nav-link  text-white" to="/">Movimentações</router-link>
        </li>
      </ul>
      <hr>
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