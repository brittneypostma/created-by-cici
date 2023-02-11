export const prerender = true

import { loadScript } from "@paypal/paypal-js"
import { PUBLIC_PAYPAL_CLIENT_ID } from '$env/static/public'

let paypal

export async function load() {
  try {
    paypal = await loadScript({ "client-id": PUBLIC_PAYPAL_CLIENT_ID, "enable-funding": "venmo" })
  } catch (error) {
    console.error("failed to load the PayPal JS SDK script", error)
  }
  return {
    paypal
  }

}



// export async function load() {
//   const imageFiles = await import.meta.glob('../lib/images/**/*.*')
//   const imageDataPromises = Object.keys(imageFiles).map((path) => imageFiles[path]())
//   const imageData = await Promise.all(imageDataPromises)
//   const images = imageData.map((element) => element.default)
//   return {
//     images
//   }
// }