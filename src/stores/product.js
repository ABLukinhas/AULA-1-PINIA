import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Harry potter', price: 59.99, qty: 100 },
    { id: 2, name: 'Biblia Sagrada', price: 39.99, qty: 100 },
    { id: 3, name: 'Gibi Turma da Monica', price: 19.99, qty: 100 },
    { id: 4, name: 'Pequeno Principe', price:29.99, qty: 100 }
  ])

  function getProductById(id) {
    for (let product of products.value) {
      if (product.id == id) {
        return product
      }
    }
    return null

    //return porducts.value.find((product) => product.id == id)
  }

  function deleteProductById(id) {
    const pos = products.value.findIndex((product) => product.id == id)
    products.value.splice(pos, 1)
  }

  function addProduct(name, price, qty) {
    const newProduct = {
      id: products.value.length + 1, // Incrementa o ID
      name,
      price,
      qty
    }
    products.value.push(newProduct)
  }

  return { products, getProductById, deleteProductById, addProduct }
})
