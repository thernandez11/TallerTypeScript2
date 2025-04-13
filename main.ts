import { series } from './data.js';
import { Serie } from './serie.js';

var seriesTbody = document.getElementById('series')!;
var seasonMeanElm = document.getElementById("promedio")!;
var seriesDetail = document.getElementById("detalle")!; 

renderCoursesInTable(series);
seasonMeanElm.innerHTML = "Seasons average: ".concat(getSeasonMean(series).toString()); //Cuando accedes a la propiedad innerHTML de un elemento HTML, obtienes o puedes establecer el contenido HTML que está dentro de ese elemento, incluidas las etiquetas HTML y su contenido.

function renderCoursesInTable(series: Serie[]) {
    console.log('Cargando series');
    series.forEach((serie) => { // 4. explicar el arrow function
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.posicion}</td>
                               <td><a  href="${serie.url}" target="_blank">${serie.nombre}<a></td>
                               <td>${serie.canal}</td>
                               <td>${serie.temporadas.toString()}</td>`;

        trElement.addEventListener("click", () => {
            showSeriesDetail(serie);
        });

        seriesTbody.appendChild(trElement);
    });
}


function getSeasonMean(series: Serie[]) {
    var promedio = 0;
    series.forEach(function (serie) { return promedio = promedio + serie.temporadas; });
    return promedio/series.length;
}

function showSeriesDetail(serie: Serie) {
    console.log('Cargando informacion');
    seriesDetail.innerHTML = `
                            <div class="card" style="width: 18rem;">
                                <img src="${serie.urlImagen}" class="card-img-top" alt="${serie.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${serie.nombre}</h5>
                                    <p class="card-text">${serie.descripcion}</p>
                                    <a href="${serie.url}" target="_blank">${serie.url}</a>
                                </div>
                            </div>`;
}