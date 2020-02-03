import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ProductFull from '../components/ProductFull';

const Product = (props) => {
  const [ isLoaded, setLoaded ] = useState(false);
  const [ productData, setProductData ] = useState({});
  const [ selectedVariant, setVariant ] = useState({});

  const createProductQuery = (handle) => {
    return gql `
      query {
        shop {
          productByHandle(handle: "${handle}") {
            title
            id
            description
            tags
            options {
              id
              name
              values
            }
            variants(first: 100) {
              edges {
                node {
                  id
                  title
                  price
                  compareAtPrice
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    altText
                    thumbnailImg: transformedSrc(maxWidth: 100, maxHeight: 120, crop: CENTER)
                    productImg: transformedSrc(maxWidth: 800, maxHeight: 960, crop: CENTER)
                  }
                }
              }
            }
            images(first: 50) {
              edges {
                node {
                  altText
                  thumbnailImg: transformedSrc(maxWidth: 100, maxHeight: 120, crop: CENTER)
                  productImg: transformedSrc(maxWidth: 800, maxHeight: 960, crop: CENTER)
                }
              }
            }
          }
        }
      }
    `
  }

  const { data, loading, error } = useQuery(createProductQuery(props.match.params.handle));
  
  useEffect(() => {
    if (data) {
      setProductData(data.shop.productByHandle);
    }
    if (!loading) {
      setLoaded(true);
    }
  },[data, loading]);

  if (error) return <p>There is an error!</p>;
  
  return (
    <div className="Product">
      {(() => {
					if(isLoaded) {
						const product = data.shop.productByHandle;
						return(<ProductFull product={product} addVariant={props.addVariant}/>);
					} else {
						return(<div>Loading...</div>)
					}
        
      })()}
    </div>
  );

}

export default Product;
