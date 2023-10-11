import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import Layout from './Layout.jsx'
import Map from "./components/Map";
import Video from "./components/Video";


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Layout>
    <Header/>
    <Video/>
    <Map/>
  </Layout>
);
