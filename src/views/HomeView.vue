<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRouter } from 'vue-router'

const productStore = useProductStore()
const router = useRouter()

const newName = ref('')
const newPrice = ref('')
const newQty = ref('')

function addProduct() {
  productStore.addProduct(newName.value, newPrice.value, newQty.value)
  newName.value = ''
  newPrice.value = ''
  newQty.value = ''
}

function Visualizar(id) {
  router.push(`/produto/${id}`)
}
</script>

<template>
  <h1>Adicionar Produto</h1>
    <form @submit.prevent="addProduct">
      <input v-model="newName" placeholder="Nome do Produto" required />
      <input v-model.number="newPrice" placeholder="Preço" required />
      <input v-model.number="newQty" placeholder="Quantidade" required />
      <button type="submit">Adicionar</button>
    </form>
  <main class="ain">
    <h1>Listagem de Produtos</h1>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.qty }}</td>
          <td>
            <button @click="Visualizar(product.id)">Ver</button>
            <button @click="productStore.deleteProductById(product.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
  </table>
    
  </main>
</template>

<style scoped>
h2 {
  color: #333;
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  margin-left: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

main {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #e0e0e0;
}

th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #333;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

@media (max-width: 600px) {
  input, button {
    font-size: 14px;
  }

  th, td {
    padding: 10px;
  }
}
h1{
  text-align: center;
  background-color:#7e8080;
  border-radius: 100px;
  color: white;
}
</style>
