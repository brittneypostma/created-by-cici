export const getProducts = async () => {
  try {
    const productData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/store/products/`)
    const { products } = await productData.json()
    return {
      products
    }
  } catch (error) {
    console.log("Error: " + error)
  }
}