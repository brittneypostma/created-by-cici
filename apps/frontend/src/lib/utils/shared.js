export const getProducts = async () => {
  try {
    const productres = await fetch(`${import.meta.env.VITE_API_BASE_URL}/store/products/`)
    const productdata = await productres.json()
    const products = productdata?.products
    return {
      products: products,
    }
  } catch (error) {
    console.log("Error: " + error)
  }
}