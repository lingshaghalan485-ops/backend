import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dcmdil2vt",
  api_key: "269628691277529",
  api_secret: "0tqspKQoRx3MDdJYw7eKV2pH87c",
});

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    return result;
  } catch (error) {}
};

export { uploadToCloudinary };