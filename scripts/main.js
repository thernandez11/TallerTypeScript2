import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var seasonMeanElm = document.getElementById("promedio");
var seriesDetail = document.getElementById("detalle");
renderCoursesInTable(series);
seasonMeanElm.innerHTML = "Seasons average: ".concat(getSeasonMean(series).toString()); //Cuando accedes a la propiedad innerHTML de un elemento HTML, obtienes o puedes establecer el contenido HTML que está dentro de ese elemento, incluidas las etiquetas HTML y su contenido.
function renderCoursesInTable(series) {
    console.log('Cargando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.posicion, "</td>\n                               <td><a  href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.nombre, "<a></td>\n                               <td>").concat(serie.canal, "</td>\n                               <td>").concat(serie.temporadas.toString(), "</td>");
        trElement.addEventListener("click", function () {
            showSeriesDetail(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonMean(series) {
    var promedio = 0;
    series.forEach(function (serie) { return promedio = promedio + serie.temporadas; });
    return promedio / series.length;
}
function showSeriesDetail(serie) {
    console.log('Cargando informacion');
    seriesDetail.innerHTML = "\n                            <div class=\"card\" style=\"width: 18rem;\">\n                                <img src=\"".concat(serie.urlImagen, "\" class=\"card-img-top\" alt=\"").concat(serie.nombre, "\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n                                    <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                                    <a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.url, "</a>\n                                </div>\n                            </div>");
}
