import { v2 as cloudinary } from 'cloudinary'
import { SECRET_CLOUDINARY_API, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME } from '$env/static/private'

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: SECRET_CLOUDINARY_API,
  secure: true
})

// get all images from cloudinary folder

export async function load() {
  const images = cloudinary.api.resources({
    type: 'upload',
    prefix: 'cups'
  }, (e, result) => e ? e : result)

  return {
    images
  }
}