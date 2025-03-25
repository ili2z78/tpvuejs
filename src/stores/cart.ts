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
      image: 'https://media.intersport.fr/is/image/intersportfr/HJ0865_ITR_Q1?$produit_l$'
    },
    {
      id: '2', 
      name: 'Ballon Coupe du Monde',
      price: 129.99,
      image: 'https://www.foot.fr/103416-large_default/ballon-al-rihla-officiel-coupe-du-monde-2022.jpg'
    },
    {
      id: '3',
      name: 'Chaussures Nike Mercurial',
      price: 159.99,
      image: 'data:image/jpeg;base64,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'
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