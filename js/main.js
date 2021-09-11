const panoImage = document.querySelector('.pano');
const samplePanoPath = 'https://unsplash.com/photos/8UDJ4sflous';

const panorama = new PANOLENS

const panorama = new PANOLENS.ImagePanorama(samplePanoPath);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);