

# fix on certificates when in windows 10:

    https://github.com/Shopify/slate/issues/865#issuecomment-512585495

# to fix UnhandledPromiseRejectionWarning: Error: Request failed with status code 404 

Simply update the return Axios code in the slate-analytics/index.js file.

node_modules/@shopify/slate-analytics/index.js

Update the code in line 95

return axios('https://v.shopify.com/slate/track', axiosConfig).catch(() => {});


# GraphiQL test:

{
  shop {
    productByHandle(handle: "black-leather-bag") {
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




