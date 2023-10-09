import React from 'react';
import categories from '../../data/categories.js';
import Directory from '../../components/directory/directory.component';
// import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* <Outlet /> */}
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
