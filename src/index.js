import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AnimatePresence } from 'framer-motion'

import './index.scss';
import './generalStyles.scss';

import All from "./pages/All"
import Clothes from "./pages/Clothes"
import Tech from "./pages/Tech"
import Item from './pages/item/Item';
import store from './store/store';

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
            <Routes>
              <Route path="/" element={<All />} replace/>
              <Route path="/clothes" element={<Clothes />} replace/>
              <Route path="/clothes/:itemId" element={<Item />} replace/>
              <Route path="/tech" element={<Tech />} replace/>
              <Route path="/tech/:itemId" element={<Item />} replace/>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </Provider>
  </ApolloProvider>
);
