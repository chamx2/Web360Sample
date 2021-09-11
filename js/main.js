const panoImage = document.querySelector('.pano-image');
const samplePano = 'images/pano1.jpg';

const panorama = new PANOLENS.ImagePanorama(samplePano);
const viewer = new PANOLENS.viewer({
    container: panoImage
});

viewer.add(panorama);