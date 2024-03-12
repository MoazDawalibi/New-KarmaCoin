import {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Page from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Consigne from './Pages/Consigne/Consigne';
import Register from './Pages/Auth/Register';
import Verify from './Pages/Auth/Verify';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Products from './Pages/Products/Products';
import LoadingPage from './Pages/Loading/LoadingPage';
import SuccessVerify from './Pages/Auth/SuccessVerify';
import SingleOrderPage from './Pages/SingleOrder/SingleOrder';

const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"))
const Product = lazy(() => import("./Pages/Products/Product"))
const SuccessPayment = lazy(() => import("./Pages/SuccessPayment/SuccessPayment"))
const CheckPaymentPage = lazy(() => import("./Pages/paymentRedirect/Page"))


const App = () => {

  
  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<LoadingPage />}> <Page404 /></Suspense>} />

      <Route path="/" element={<Suspense fallback={<LoadingPage />}> <Page/></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<LoadingPage />}> <About/></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<LoadingPage />}> <Contact/></Suspense>} />
      <Route path="/consign" element={<Suspense fallback={<LoadingPage />}> <Consigne/></Suspense>} />
      <Route path="/register" element={<Suspense fallback={<LoadingPage />}> <Register/></Suspense>} />
      <Route path="/verified" element={<Suspense fallback={<LoadingPage />}> <Verify/></Suspense>} />
      <Route path="/success_verify" element={<Suspense fallback={<LoadingPage />}> <SuccessVerify /></Suspense>} />
      <Route path="/orders" element={<Suspense fallback={<LoadingPage />}> <Orders/></Suspense>} />
      <Route path="/single_order" element={<Suspense fallback={<LoadingPage />}> <SingleOrderPage /></Suspense>} />
      <Route path="/products" element={<Suspense fallback={<LoadingPage />}> <Products/></Suspense>} />
      <Route path="/product/:id" element={<Suspense fallback={<LoadingPage />}> <Product /></Suspense>} />
      <Route path="/cart" element={<Suspense fallback={<LoadingPage />}> <Cart/></Suspense>} />
      <Route path="/checkout_payment_online" element={<Suspense fallback={<LoadingPage />}> <CheckPaymentPage /></Suspense>} />
      <Route path="/success_payment" element={<Suspense fallback={<LoadingPage />}> <SuccessPayment /></Suspense>} />

    </Routes>

        
     
  )
}

export default App