const panoImage = document.querySelector('.pano');
const samplePanoPath = 'images/pano3.jpg';


const panorama = new PANOLENS.ImagePanorama(samplePanoPath);
// const panorama = new PANOLENS.ImagePanorama('images/pano3.jpg');
const viewer = new PANOLENS.Viewer({
    container:panoImage,
    autoRotate:true,
    autoRotateSpeed: .5
});

viewer.add(panorama);