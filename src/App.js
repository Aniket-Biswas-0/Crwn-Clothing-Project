import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';

const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
);
const Footer = lazy(()=> import('./routes/footer/footer.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() =>
  import('./routes/authentication/authentication.component')
);
const UserProfile = lazy(() => import('./components/user-profile/user-profile.component'));
const FAQ = lazy(() => import('./routes/faqs/faq.component'))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/' element={<Footer/>}>
            <Route index element={<Home />} />
            <Route path='shop/*' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='user' element={<UserProfile />} />
            <Route path='faq' element={<FAQ />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
