const panoImage = document.querySelector('.pano-image');
const samplePanoPath = '../images/pano1.jpg';

const panorama = new PANOLENS.ImagePanorama(samplePanoPath);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);