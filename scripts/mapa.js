var mimapa = L.map('mapa').setView([37.894, -4.75], 10);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Mapa' }).addTo(mimapa);

attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'

mimapa.on("click", function (e) { var pixelPosition = e.layerPoint; var latLng = mimapa.layerPointToLatLng(pixelPosition); alert("Position Pixel = " + pixelPosition + "\n LatLng = " + latLng); });

L.marker([37.89420, -4.75447], { draggable: true }).addTo(mimapa);

var poligono = L.polygon([[37.892277, -4.755663], [37.894546, -4.757293], [37.895968, -4.757036], [37.895047, -4.749356]]).addTo(mimapa)



