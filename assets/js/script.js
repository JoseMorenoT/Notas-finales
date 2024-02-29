document.addEventListener("DOMContentLoaded", (event) => {
    // SOLICITUD NOTAS HTML
    var inputHTMLNota1 = Number(prompt("Ingrese nota 1 [HTML]"));
    var inputHTMLNota2 = Number(prompt("Ingrese nota 2 [HTML]"));
    var inputHTMLNota3 = Number(prompt("Ingrese nota 3 [HTML]"));
    var promedioHTML = 0;

    promedioHTML = (inputHTMLNota1 + inputHTMLNota2 + inputHTMLNota3) / 3;
    console.log("Promedio HTML: ", promedioHTML);

    // SOLICITUD NOTAS CSS
    var inputCSSNota1 = Number(prompt("Ingrese nota 1 [CSS]"));
    var inputCSSNota2 = Number(prompt("Ingrese nota 2 [CSS]"));
    var inputCSSNota3 = Number(prompt("Ingrese nota 3 [CSS]"));
    var promedioCSS = 0;

    promedioCSS = (inputCSSNota1 + inputCSSNota2 + inputCSSNota3) / 3;
    console.log("Promedio CSS:", promedioCSS);

    // SOLICITUD NOTAS JAVASCRIPT
    var inputJavascriptNota1 = Number(prompt("Ingrese nota 1 [JAVASCRIPT]"));
    var inputJavascriptNota2 = Number(prompt("Ingrese nota 2 [JAVASCRIPT]"));
    var inputJavascriptNota3 = Number(prompt("Ingrese nota 3 [JAVASCRIPT]"));
    var promedioJavascript = 0;

    promedioJavascript =
        (inputJavascriptNota1 + inputJavascriptNota2 + inputJavascriptNota3) /
        3;
    console.log("Promedio JavaScript:", promedioJavascript);

    // MODIFICAMOS LOS TD EN DOM (DOCUMENTO HTML)

    //modificación notas RAMO HTML
    document.getElementById("htmlNota1").innerText = inputHTMLNota1;
    document.getElementById("htmlNota2").innerText = inputHTMLNota2;
    document.getElementById("htmlNota3").innerText = inputHTMLNota3;
    document.getElementById("htmlPromedio").innerText = promedioHTML.toFixed(2);

    //modificación notas RAMO CSS
    document.getElementById("cssNota1").innerText = inputCSSNota1;
    document.getElementById("cssNota2").innerText = inputCSSNota2;
    document.getElementById("cssNota3").innerText = inputCSSNota3;
    document.getElementById("cssPromedio").innerText = promedioCSS.toFixed(2);

    //modificación notas RAMO JavaScript
    document.getElementById("javascriptNota1").innerText = inputJavascriptNota1;
    document.getElementById("javascriptNota2").innerText = inputJavascriptNota2;
    document.getElementById("javascriptNota3").innerText = inputJavascriptNota3;
    document.getElementById("javascriptPromedio").innerText =
        promedioJavascript.toFixed(2);

    var promedioFinal = (promedioHTML + promedioCSS + promedioJavascript) / 3;


    document.getElementById("promedio-final").innerText = promedioFinal.toFixed(2);
});
