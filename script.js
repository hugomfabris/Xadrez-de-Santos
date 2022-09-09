const mapDiv = document.getElementById('map')
const info = document.getElementById('info');

const showMap = () => {
  return mapDiv.style.visibility = 'visible';
  
}

info.addEventListener("click", showMap);

