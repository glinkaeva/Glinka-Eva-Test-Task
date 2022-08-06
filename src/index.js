import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.scss';
import './generalStyles.scss';

import PageAll from "./pages/pages/PageAll"
import PageClothes from "./pages/pages/PageClothes"
import PageTech from "./pages/pages/PageTech"
import PageBacket from "./pages/pageBacket/PageBacket"
import PageItem from './pages/pageItem/PageItem';

import { AnimatePresence } from 'framer-motion'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import store from './store/store';
import { Provider } from 'react-redux';


export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

// TODO: try to understand why your animation doesn't work
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <div className='wrapper'>
        <BrowserRouter>
          <AnimatePresence> 
            <Routes location={window.location} key={window.location.pathname}>
              <Route path="/" element={<PageAll />} replace/>
              <Route path="/clothes" element={<PageClothes />} replace/>
              <Route path="/clothes/:itemId" element={<PageItem />} replace/>
              <Route path="/tech" element={<PageTech />} replace/>
              <Route path="/tech/:itemId" element={<PageItem />} replace/>
              <Route path="/backet" element={<PageBacket />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </Provider>
  </ApolloProvider>
);
