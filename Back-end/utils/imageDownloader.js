import download from "image-downloader";
import mime from "mime-types";
export const downloadImage = async (link, destination) => {
  const mimeType = mime.lookup(link);
  const contentType = mime.contentType(mimeType);
  const extension = mime.extension(contentType);

  const filename = `${Date.now()}.${extension}`;
  const fulPath = `${destination}${filename}`;
  console.log({ mime, link, extension, contentType });
  try {
    const options = {
      url: link,
      dest: fulPath,
    };

    await download.image(options);
    return filename;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
