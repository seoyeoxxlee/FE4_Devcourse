
async function getProducts() {
  // simulate a dummy error here
  const shouldError = Math.random() > 0.5

  if(shouldError) {
    throw new Error('Failed to fetch products')
  }
  
  return [
    {id: 1, name: "One"},
    {id: 2, name: "Two"},
    {id: 3, name: "Three"},
  ]
}

export default async function ErrorExample () {
  const products = await getProducts();
  return (
    <div>
      <h1>Products List</h1>
      <div>
        {
          products.map(product => (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}