export const prerender = true

// export async function load() {
//   const imageFiles = await import.meta.glob('../lib/images/**/*.*')
//   const imageDataPromises = Object.keys(imageFiles).map((path) => imageFiles[path]())
//   const imageData = await Promise.all(imageDataPromises)
//   const images = imageData.map((element) => element.default)
//   return {
//     images
//   }
// }