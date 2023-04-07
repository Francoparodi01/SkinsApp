import React, { useContext, useState }from 'react'

export const CartContext = React.createContext([])

export const useCartContext = () =>useContext(CartContext);

 const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const clearCart = () => setCart([])
        
    const isInCart = (id) => cart.find(product => product.id === id) ?true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, newQuantity) => {
      const newCar = cart.filter(prod => prod.id !== item.id);
      newCar.push ({...item, quantity : newQuantity});
      setCart(newCar)
    }

    console.log('carrito: ', cart)




  return (
    <CartContext.Provider value={{
        //addItem,
        clearCart,
        isInCart,
        removeProduct,
        //totalPrice,
        //totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider