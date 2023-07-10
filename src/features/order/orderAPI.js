/*export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080') 
    const data = await response.json()
    resolve({data})
  }
  );
}*/
export function createOrder(order) {
  //console.log(order)
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}