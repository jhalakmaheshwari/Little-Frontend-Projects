export async function getCartItems() {
  const response = await fetch("../utils/shoppingItems.json", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
    .then((items) => items)
    .catch((error) => {
      throw error;
    });
  return response.json();
}
