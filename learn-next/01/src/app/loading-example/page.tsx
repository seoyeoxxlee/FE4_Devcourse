// server component

// dummy API call
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    stats : {
      users : 10000
    }
  }
}

export default async function LoadingExample () {
  const data = await getData();

  return (
    <div>
      <h1>Loading example</h1>
      <p>Users: {data.stats.users}</p>
    </div>
  );
}