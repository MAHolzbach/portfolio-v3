import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageUrl: string) {
  try {
    const file = await fs.readFile(process.cwd() + "/public" + imageUrl);

    const { base64 } = await getPlaiceholder(file);

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}

export default async function addBlurredDataUrls(images: any) {
  const base64Promises = images.map((image: any) => getBase64(image.imgSrc));

  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur = images.map(
    (image: { blurredDataUrl: any }, index: number) => {
      image.blurredDataUrl = base64Results[index];

      return image;
    }
  );

  return photosWithBlur;
}
