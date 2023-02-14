import React from 'react';

import Router from './router/Router'
import Global from './styles/Global'
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer'
import Wrapper from './components/molecules/wrapper/mf/Wrapper';

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Wrapper />
      <Footer />
      <Global />
    </>
  )
}

export default App;