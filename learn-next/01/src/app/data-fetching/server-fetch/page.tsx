interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}


// function where you are going to call this API and then
// will be data directly on the server side.
async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch('https://dummyjson.com/products', {
    //cache: 'no-store' // never fetch your response, always going to fetch fresh response.
    //cache: 'force-cache'
    cache: 'reload' // fetches fresh response from your remote server and it's going to update the cache
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products!')
  }

  return response.json();
}

// 비동기 처리
export default async function ServerSideFetchExample () {
  const products = await getProducts();
  //console.log(products);

  return (
    <div>
      <h1>Server side data fetching</h1>
      <h3>Number of Products: {products?.total}</h3>
      <div className="flex flex-col gap-2">
        {products?.products?.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <h3>${product.price}</h3>
              <h3>{product.category}</h3>
            </div>
        ))}
      </div>
    </div>
  );
}