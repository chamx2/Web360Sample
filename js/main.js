const panoImage = document.querySelector('.pano');
const samplePanoPath = '../images/pano1.jpg';


const panorama = new PANOLENS.ImagePanorama(samplePanoPath);
const viewer = new PANOLENS.Viewer({
    container:panoImage,
    autoRotate:true,
    autoRotateSpeed: .5

});

viewer.add(panorama);