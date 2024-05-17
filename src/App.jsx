import './scss/style.scss'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import CartRouter from './router/cartRouter/CartRouter'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact';
import Checkout from './pages/checkout/Checkout';
import Auth from './pages/auth/Auth';
import Login from './pages/login/Login';

// Components
import Header from './components/header/Header'
import Admin from './pages/admin/Admin';
import CreateProducts from './pages/admin/create-products/CreateProducts';
import CreateUsers from './pages/admin/create-users/CreateUsers';
import ManageProducts from './pages/admin/manage-products/ManageProducts';
import ManageUsers from './pages/admin/manage-users/ManageUsers';
import AnimCursor from './components/animCursor/AnimCursor'
import NotFound from './components/notFound/NotFound'

function App() {
  return (
    <>
      <AnimCursor/>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/contact-us' element={<Contact />} />

        <Route path='cart' element={<CartRouter/>}>
          <Route index element={<Cart/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Route>

        <Route path='/register' element={<Login/>}/>
        
        <Route path='/' element={<Auth/>}>
          <Route path='admin' element={<Admin />}>
            <Route path='create-products' element={<CreateProducts/>}/>
            <Route path='manage-products' element={<ManageProducts/>}/>
            <Route path='create-users' element={<CreateUsers/>}/>
            <Route path='manage-users' element={<ManageUsers/>}/>
          </Route>
        </Route>
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <ToastContainer/>
    </>
  )
}

export default App
