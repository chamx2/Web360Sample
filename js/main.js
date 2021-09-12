const panoImage = document.querySelector('.pano-container');
const samplePanoPath = 'images/pano3.jpg';


// const panorama = new PANOLENS.ImagePanorama(samplePanoPath);

// const panorama =  PANOLENS.ImagePanorama('../images/pano3.jpg');
// const viewer = PANOLENS.Viewer();

// const viewer = new PANOLENS.Viewer({
//     container:panoImage,
//     autoRotate:true,
//     autoRotateSpeed: .5
// });
const panorama = new PANOLENS.ImagePanorama(samplePanoPath);
const viewer = new PANOLENS.Viewer();

viewer.add(panorama);