export async function get() {
  try {
    const images = await import.meta.glob('../../../static/images/**/*.png');
    const imageDataPromises = Object.keys(images).map((path) => images[path]());
    const imageData = await Promise.all(imageDataPromises);
    const imageDataArray = imageData.map((element) => element.default);

    return {
      body: JSON.stringify({ images: imageDataArray }),
    };
  } catch (error) {
    console.error('Error: ', error);
    return {
      status: 500,
      error: `Error in index.json data retrieval: ${error}`,
    };
  }
}
