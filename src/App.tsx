import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// Import all page components
import Home from './app/page';
import ShopPage from './app/shop/page';
import CartPage from './app/cart/page';
import CheckoutPage from './app/checkout/page';
import LoginPage from './app/login/page';
import SignupPage from './app/signup/page';
import ProfilePage from './app/profile/page';
import OrdersPage from './app/orders/page';
import OrderConfirmationPage from './app/order-confirmation/page';
import AdminPage from './app/admin/page';
import ProductPage from './app/product/[productId]/page';
import SearchPage from './app/search/page';
import PrivacyPolicyPage from './app/privacy-policy/page';
import TermsOfServicePage from './app/terms-of-service/page';
import WishlistPage from './app/wishlist/page';

import { ClientLayout } from './components/layout/client-layout';

// Wrapper for dynamic product page to pass params
function ProductPageWrapper() {
  const params = useParams<{ productId: string }>();
  return <ProductPage params={{ productId: params.productId || '' }} />;
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ClientLayout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/product/:productId" element={<ProductPageWrapper />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      </ClientLayout>
    </BrowserRouter>
  );
}
