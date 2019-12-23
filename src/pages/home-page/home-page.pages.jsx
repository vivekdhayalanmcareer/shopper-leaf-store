import React from "react";
import './home-page.styles.scss'

import MenuDirectory from '../../components/menu-directory/menu-directory.components'



const HomePage = () => {
  return (
    <div className="home-page">
      <MenuDirectory></MenuDirectory>
    </div>
  );
};

export default HomePage;
