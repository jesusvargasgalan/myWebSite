

    $(function() {


   var FuentesAlimentacion = [];

   $.getJSON('fuentes.json', function(data) {
       $.each(data.FuentesAlimentacion, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.fabricante+ "</td>" +
           "<td>" + f.tipos + "</td>" + "<td>" + f.caracteristica + "</td>" + "<td>" + f.modelo + "</td>" + "<td>" + f.precio + "</td>" +  "</tr>" 
           $(tblRow).appendTo("#tablaConectores tbody");
     });

   });

});
