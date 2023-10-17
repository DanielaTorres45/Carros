document.getElementById("act").style.display = "none";
var myArrayVeh = [];
objVeh = {
  placa: null,
  marca: null,
  modelo: null,
  color: null,
  kmr: null,
  estado: null,
  imagen: null,
  valor: null,
};
var posAct;

function agregar(opr) {
  objVeh.placa = document.getElementById("placa").value;
  objVeh.marca = document.getElementById("marca").value;
  objVeh.modelo = document.getElementById("modelo").value;
  objVeh.color = document.getElementById("color").value;
  objVeh.kmr = document.getElementById("kmr").value;
  objVeh.estado = document.querySelector('input[name="r1"]:checked').value;
  objVeh.imagen = document.getElementById("imagen").value;
  objVeh.valor = document.getElementById("valor").value;
  resultado = JSON.parse(JSON.stringify(objVeh));
  console.log(resultado);
  if (opr == 0) {
    myArrayVeh.push(resultado);
  } else {
    myArrayVeh[posAct] = resultado;
    document.getElementById("act").style.display = "none";
    document.getElementById("agr").style.display = "block";
  }
  console.log(myArrayVeh);
  listarVehiculos();
  limpiarCajas();
}

function limpiarCajas() {
  document.getElementById("placa").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("color").value = "";
  document.getElementById("kmr").value = "";
  document.querySelector('input[name="r1"]:checked').value = "";
  document.getElementById("imagen").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("placa").focus();
}

function listarVehiculos() {
  var salida = "";
  for (i in myArrayVeh) {
    salida +=
      "<tr><td>" +
      myArrayVeh[i].placa +
      "</td><td>" +
      myArrayVeh[i].marca +
      "</td><td>" +
      myArrayVeh[i].modelo +
      "</td><td>" +
      myArrayVeh[i].color +
      "</td><td>" +
      myArrayVeh[i].kmr +
      "</td><td>" +
      myArrayVeh[i].estado +
      '</td><td class="caja">' +
      '<img width="200px" src="' +
      myArrayVeh[i].imagen +
      '">' +
      "</td><td>" +
      myArrayVeh[i].valor +
      "</td><td>" +
      '<button onclick="editar(' +
      i +
      ')">Editar</button>' +
      '<button onclick="eliminar(' +
      i +
      ')">Eliminar</button>' +
      "</td></tr>";
  }
  document.getElementById("cuerpo").innerHTML = salida;
}

function editar(pos) {
  posAct = pos;
  document.getElementById("agr").style.display = "none";
  document.getElementById("act").style.display = "block";
  document.getElementById("placa").value = myArrayVeh[pos].placa;
  document.getElementById("marca").value = myArrayVeh[pos].marca;
  document.getElementById("modelo").value = myArrayVeh[pos].modelo;
  document.getElementById("color").value = myArrayVeh[pos].color;
  document.getElementById("kmr").value = myArrayVeh[pos].kmr;
  document.querySelector('input[name="r1"]:checked').value =
    myArrayVeh[pos].estado;
  document.getElementById("imagen").value = myArrayVeh[pos].imagen;
  document.getElementById("valor").value = myArrayVeh[pos].valor;
}

function eliminar(posicion) {
  myArrayVeh.splice(posicion, 1);
  listarVehiculos();
}
