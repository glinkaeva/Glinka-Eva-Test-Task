import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './generalStyles.scss';

import PageAll from "./pages/pageAll/PageAll"
import PageClothes from "./pages/pageClothes/PageClothes"
import PageTech from "./pages/pageTech/PageTech"
import PageBacket from "./pages/pageBacket/PageBacket"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageAll />} />
          <Route path="/clothes" element={<PageClothes />} />
          <Route path="/tech" element={<PageTech />} />
          <Route path="/backet" element={<PageBacket />} />
        </Routes>
      </BrowserRouter>
    </div>
  </ApolloProvider>
);
