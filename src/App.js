import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import Navbar from './components/navbar';
import Layout from './components/layout';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}
