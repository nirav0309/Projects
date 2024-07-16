export async function addToCart(formData) {
  const itemID = formData.get("itemID");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemID) {
        resolve({ cartSize: Math.floor(Math.random() * 10) + 1 });
      } else {
        reject(new Error("Invalid item ID"));
      }
    }, 1000);
  });
}

