export async function get() {
  try {
    const imageFiles = await import.meta.glob('../../../static/admin/images/**/*.png')
    const imageDataPromises = Object.keys(imageFiles).map((path) => imageFiles[path]())
    const imageData = await Promise.all(imageDataPromises);
    const images = imageData.map((element) => element.default)
    return {
      status: 200,
      body: images
    };
  } catch (error) {
    console.error('Error: ', error);
    return {
      status: 500,
      error: `Error in index.json data retrieval: ${error}`,
    };
  }
}
