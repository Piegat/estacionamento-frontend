<template>
    <div v-if="ativo" class="row">
      <div class="col-md-12 text-start">
        <div v-if="sucesso" class="d-flex w-100 justify-content-center align-items-center alert alert-success alert-dismissible fade show" role="alert">
          <p class="m-0">{{ texto }}</p>
        </div>
        <div v-if="!sucesso" class="alert alert-danger alert-dismissible fade show" role="alert">
          {{ texto }}
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'AvisoComponent',
    props: {
      ativo: {
        type: Boolean,
        required: true
      },
      texto: {
        type: String,
        required: true
      },
      sucesso: {
        type: Boolean,
        required: true
      }
    }
  })
  </script>
  <style lang="scss" scoped>
  
  p {
    white-space: pre-wrap;
  }
  </style>