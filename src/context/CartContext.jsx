import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

function getCartItemId(productId, type, size) {
  return `${productId}-${type}-${size}`
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = useCallback((product, { type, size, quantity = 1 }) => {
    const price = product[type][size]
    const cartItemId = getCartItemId(product.id, type, size)

    setCart(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId)
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          cartItemId,
          productId: product.id,
          name: product.name,
          image: product.image,
          type,
          size,
          price,
          quantity,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId))
  }, [])

  const updateQuantity = useCallback((cartItemId, quantity) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.cartItemId !== cartItemId))
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
