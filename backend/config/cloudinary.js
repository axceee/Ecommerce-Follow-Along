import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// Upload file to cloudinary
export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    // File has been uploaded successfully
    return response.url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return null;
  }
};

export default cloudinary;