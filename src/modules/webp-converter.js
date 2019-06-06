// Required Plugins
let imagemin = require("imagemin"),
    webp = require("imagemin-webp");

// Default Output
const defOutput = "./public/assets/images/webp",
      defPNG = "./public/assets/images/png/*.png",
      defJPEG = "./public/assets/images/jpg/*.jpg";
// Background Images Output
const bgOutput = "./public/assets/images/webp/bg/",
      bgPNG = "./public/assets/images/png/bg/*.png",
      bgJPEG = "./public/assets/images/jpg/bg/*.png";
// Icons Output
const iconOutput = "./public/assets/images/webp/icons/",
      iconPNG = "./public/assets/images/png/icons/*.png",
      iconJPEG = "./public/assets/images/jpg/icons/*.png";

const imageConvert = () => {
    imagemin([defPNG], defOutput, {
        plugins: [webp({
            lossless: true // Losslessly encode images
        })]
    });
    imagemin([defJPEG], defOutput, {
        plugins: [webp({
            quality: 65 // Quality setting from 0 to 100
        })]
    });
    imagemin([bgPNG], bgOutput, {
        plugins: [webp({
            lossless: true // Losslessly encode images
        })]
    });
    imagemin([bgJPEG], bgOutput, {
        plugins: [webp({
            quality: 65 // Quality setting from 0 to 100
        })]
    });
    imagemin([iconPNG], iconOutput, {
        plugins: [webp({
            lossless: true // Losslessly encode images
        })]
    });
    imagemin([iconJPEG], iconOutput, {
        plugins: [webp({
            quality: 65 // Quality setting from 0 to 100
        })]
    });
}

module.exports = { imageConvert }