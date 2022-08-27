import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import cartReducer from './cart'

// redux global state management
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    cartInfo: cartReducer
  }
})

export default store