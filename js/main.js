const panoImage = document.querySelector('.pano');
const samplePanoPath = '../images/pano2.jpg';

const panorama = new PANOLENS.ImagePanorama(samplePanoPath);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);