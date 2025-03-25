import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const isOpen = ref(false)
  
  // Articles de foot initiaux
  const footballProducts = ref([
    {
      id: '1',
      name: 'Maillot PSG 2023',
      price: 89.99,
      image: 'https://via.placeholder.com/150/ff0000/ffffff?text=PSG'
    },
    {
      id: '2', 
      name: 'Ballon Coupe du Monde',
      price: 129.99,
      image: 'https://via.placeholder.com/150/0000ff/ffffff?text=Ballon'
    },
    {
      id: '3',
      name: 'Chaussures Nike Mercurial',
      price: 159.99,
      image: 'https://via.placeholder.com/150/00ff00/ffffff?text=Nike'
    }
  ])

  const totalItems = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))
  
  const totalPrice = computed(() => items.value.reduce((total, item) => total + (item.price * item.quantity), 0))
  
  function addItem(product: Omit<CartItem, 'quantity'>) {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }
  
  function removeItem(id: string) {
    items.value = items.value.filter(item => item.id !== id)
  }
  
  function updateQuantity(id: string, quantity: number) {
    const item = items.value.find(item => item.id === id)
    if (item) item.quantity = quantity
  }
  
  function toggleCart() {
    isOpen.value = !isOpen.value
  }
  
  return { 
    items, 
    isOpen, 
    footballProducts,
    totalItems, 
    totalPrice, 
    addItem, 
    removeItem, 
    updateQuantity, 
    toggleCart 
  }
})