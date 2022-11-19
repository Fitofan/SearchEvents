import Resizer from "react-image-file-resizer";
// URL.createObjectURL
export const resizeFile = (file: any, width: number, quality: number) => {
    return new Promise((resolve, reject) => {
        try {
            Resizer.imageFileResizer(
                file,
                width,
                width,
                "JPEG",
                quality,
                0,
                (uri) => {
                    resolve(uri);
                },
                "file"
            );
        } catch (e) {
        }
    });
};

const createImage = (url: any) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => resolve(error));
        image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
        image.src = url;
    });

export const readFile = (file: any) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
};

function getRadianAngle(degreeValue: number) {
    return (degreeValue * Math.PI) / 180;
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */

// export async function getCroppedImg(
// 	imageSrc: string,
// 	pixelCrop: any,
// 	rotation: number = 0
// ) {
// 	const image = (await createImage(imageSrc)) as HTMLImageElement;
// 	console.log(image);
// 	const canvas = document.createElement("canvas");
// 	const ctx = canvas.getContext("2d");
// 	if (ctx == null || image == null) {
// 		return;
// 	}
// 	const maxSize = Math.max(image.width, image.height);
// 	const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

// 	// set each dimensions to double largest dimension to allow for a safe area for the
// 	// image to rotate in without being clipped by canvas context
// 	canvas.width = safeArea;
// 	canvas.height = safeArea;

// 	// translate canvas context to a central location on image to allow rotating around the center.
// 	// ctx.translate(safeArea / 2, safeArea / 2);
// 	// ctx.rotate(getRadianAngle(rotation));
// 	// ctx.translate(-safeArea / 2, -safeArea / 2);

// 	// draw rotated image and store data.
// 	ctx.drawImage(
// 		image,
// 		safeArea / 2 - image.width * 0.5,
// 		safeArea / 2 - image.height * 0.5
// 	);
// 	const data = ctx.getImageData(0, 0, safeArea, safeArea);

// 	// set canvas width to final desired crop size - this will clear existing context
// 	canvas.width = pixelCrop.width;
// 	canvas.height = pixelCrop.height;

// 	// paste generated rotate image with correct offsets for x,y crop values.
// 	ctx.putImageData(
// 		data,
// 		Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
// 		Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
// 	);

// 	// As Base64 string
// 	// return canvas.toDataURL('image/jpeg');

// 	// As a blob
// 	// return new Promise((resolve) => {
// 	// 	canvas.toBlob((file) => {
// 	// 		resolve(file);
// 	// 	}, "image/jpeg");
// 	// });
// 	//.split(';base64,')[1];
// 	return new Promise((resolve) => {
// 		resolve(canvas.toDataURL("image/jpeg", "0.8").split(";base64,")[1]);
// 	});
// }

function limitSize(size: { width: number; height: number }) {
    const { width, height } = size;
    const maximumPixels = 2073600;
    const requiredPixels = width * height;
    if (requiredPixels <= maximumPixels) return 1;
    return Math.sqrt(maximumPixels) / Math.sqrt(requiredPixels);
}

export function rotateSize(width: number, height: number, rotation: number) {
    const rotRad = getRadianAngle(rotation);
    return {
        width:
			Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height:
			Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    };
}

export async function getCroppedImgAsFile(
    imageSrc: string,
    pixelCrop: any,
    rotation = 0
) {
    try {
        const image = (await createImage(imageSrc)) as HTMLImageElement;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx == null || image == null) {
            return;
        }
        const rotRad = getRadianAngle(rotation);
        const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
            image.width,
            image.height,
            rotation
        );

        canvas.width = bBoxWidth;
        canvas.height = bBoxHeight;

        // translate canvas context to a central location to allow rotating and flipping around the center
        ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
        ctx.rotate(rotRad);
        // ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
        ctx.translate(-image.width / 2, -image.height / 2);

        // draw rotated image
        ctx.drawImage(image, 0, 0);

        // croppedAreaPixels values are bounding box relative
        // extract the cropped image using these values
        const data = ctx.getImageData(
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height
        );

        // // set canvas width to final desired crop size - this will clear existing context
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        // paste generated rotate image at the top left corner
        ctx.putImageData(data, 0, 0);
        // return new Promise((resolve) => {
        // 	resolve(canvas.toDataURL("image/jpeg", "0.8"));
        // });
        return new Promise<Blob | null>((resolve, reject) => {
            try {
                canvas.toBlob(
                    (file) => {
                        resolve(file);
                    },
                    "image/jpeg",
                    0.8
                );
            } catch (e) {
                reject(e);
            }
        });
    } catch (e) {
    }
}

export async function convertImageToFile(imageSrc: string) {
    try {
        const image = (await createImage(imageSrc)) as HTMLImageElement;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx == null || image == null) {
            return;
        }
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        // translate canvas context to a central location to allow rotating and flipping around the center
        // paste generated rotate image at the top left corner
        // return new Promise((resolve) => {
        // 	resolve(canvas.toDataURL("image/jpeg", "0.8"));
        // });
        return new Promise<Blob | null>((resolve, reject) => {
            try {
                canvas.toBlob(
                    (file) => {
                        resolve(file);
                    },
                    "image/jpeg",
                    0.9
                );
            } catch (e) {
                reject(e);
            }
        });
    } catch (e) {
    }
}

export async function getCroppedImgAsFile_old(
    imageSrc: string,
    pixelCrop: any,
    rotation = 0
) {
    try {
        const image = (await createImage(imageSrc)) as HTMLImageElement;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx == null || image == null) {
            return;
        }
        const maxSize = Math.max(image.width, image.height);
        const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

        // set each dimensions to double largest dimension to allow for a safe area for the
        // image to rotate in without being clipped by canvas context
        canvas.width = safeArea;
        canvas.height = safeArea;

        // translate canvas context to a central location on image to allow rotating around the center.
        // ctx.translate(safeArea / 2, safeArea / 2);
        // ctx.rotate(getRadianAngle(rotation));
        // ctx.translate(-safeArea / 2, -safeArea / 2);

        // draw rotated image and store data.
        ctx.drawImage(
            image,
            safeArea / 2 - image.width * 0.5,
            safeArea / 2 - image.height * 0.5
        );
        const data = ctx.getImageData(0, 0, safeArea, safeArea);

        // set canvas width to final desired crop size - this will clear existing context
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        // paste generated rotate image with correct offsets for x,y crop values.
        ctx.putImageData(
            data,
            Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
            Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
        );

        return new Promise<Blob | null>((resolve, reject) => {
            try {
                canvas.toBlob(
                    (file) => {
                        resolve(file);
                    },
                    "image/jpeg",
                    0.8
                );
            } catch (e) {
                reject(e);
            }
        });
    } catch (e) {
    }
}
export async function getRotatedImage(imageSrc: any, rotation = 0) {
    const image = (await createImage(imageSrc)) as HTMLImageElement;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx == null) {
        return "";
    }
    const orientationChanged =
		rotation === 90 ||
		rotation === -90 ||
		rotation === 270 ||
		rotation === -270;
    if (orientationChanged) {
        canvas.width = image.height;
        canvas.height = image.width;
    } else {
        canvas.width = image.width;
        canvas.height = image.height;
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);

    return new Promise((resolve) => {
        canvas.toBlob((file) => {
            resolve(URL.createObjectURL(file));
        }, "image/png");
    });
}
