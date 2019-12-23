import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from '../../components/collection-preview/collection-preview.components'


class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state; 
    return (
      <div className="shop-page">
        <h1>Shop Page</h1>
        {
          collections.map(({id , ...otherCollectionItems})=>(
              <CollectionPreview key={id} {...otherCollectionItems} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
