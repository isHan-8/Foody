import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodPage from './pages/Food/FoodPage';
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './component/Register/RegisterPage';
// import CheckoutPage from './pages/Checkout/CheckoutPage';
import AuthRoute from './component/AuthRoute/AuthRoute';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PaymentPage from './pages/Payment/PaymentPage';
import OrderTrackPage from './pages/OrderTrack/OrderTrackPage';
import ProfilePage from './pages/Profile/ProfilePage';
import OrdersPage from './pages/Orders/OrdersPage';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/checkout" element={ <AuthRoute> <CheckoutPage /></AuthRoute>
}
/>
<Route path="/payment" element={ <AuthRoute> <PaymentPage/> </AuthRoute> 
}
/>
<Route path="/track/:orderId" element={ <AuthRoute> <OrderTrackPage/> </AuthRoute> 
}
/>

<Route path="/orders" element={ <AuthRoute> <OrdersPage/> </AuthRoute> 
}
/>
<Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage/>
          </AuthRoute>
        }
      />
    </Routes>
  );
}