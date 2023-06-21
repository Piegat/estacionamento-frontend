<template>
    <div class="link-path d-flex align-items-center mt-1">
        <button class="button-usersList " :class="{ active: activeButton === 'register' }"
            @click="navigateTo(routeRegister)">
            Cadastrar Novo
        </button>
    </div>
</template>
  
<script lang="ts">
import { RouteLocationRaw } from 'vue-router';

export default {
    name: "LinkDinamicoComponent",
    props: {
        routeList: {
            type: String,
            required: true
        },
        routeRegister: {
            type: String,
            required: true
        },
        defaultActive: {
            type: String,
            default: "list"
        }
    },
    data(): any {
        return {
            activeButton: (this as any).defaultActive
        };
    },
    methods: {
        navigateTo(this: any, route: RouteLocationRaw) {
            this.activeButton = route as string;
            (this as any).$router.push(route);
        }
    }
};
</script>
  
<style scoped>
.button-usersList {
    user-select: none;
    cursor: pointer;
    width: 220px;
    height: 35px;
    border: none;
    
    border-radius: 4px;
    font-size: 16px;
    background-color: #cfe2ff;
    color: #000000;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    margin-left: 81rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
    outline: none;
}

.button-usersList:hover {
    transform: scale(1.05);
}

.button-usersList:active {
    transform: scale(0.98);
}

.active {
    outline: none;
}
</style>
