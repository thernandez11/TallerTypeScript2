import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var seasonMeanElm = document.getElementById("promedio");
renderCoursesInTable(series);
seasonMeanElm.innerHTML = "Seasons average: ".concat(getSeasonMean(series).toString()); //Cuando accedes a la propiedad innerHTML de un elemento HTML, obtienes o puedes establecer el contenido HTML que está dentro de ese elemento, incluidas las etiquetas HTML y su contenido.
function renderCoursesInTable(series) {
    console.log('Cargando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.posicion, "</td>\n                               <td><a  href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.nombre, "<a></td>\n                               <td>").concat(serie.canal, "</td>\n                               <td>").concat(serie.temporadas.toString(), "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonMean(series) {
    var promedio = 0;
    series.forEach(function (serie) { return promedio = promedio + serie.temporadas; });
    return promedio / series.length;
}
