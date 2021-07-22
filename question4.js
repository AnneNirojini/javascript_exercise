// volume of cuboid
function volumeOfCuboid(l,w,h){
  let volume = (l * w * h);
  return volume;
}
document.getElementById("volume").innerHTML = "Volume Of Cuboid:" + volumeOfCuboid(4, 5, 6);
