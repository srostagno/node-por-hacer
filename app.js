const { argv } = require("./config/yargs");
const {
  crear,
  getListado,
  actualizar,
  borrar
} = require("./por-hacer/por-hacer");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "crear":
    crear(argv.descripcion);
    break;
  case "mostrar":
    let listado = getListado();
    for (let tarea of listado) {
      console.log("==== Tarea por hacer ====".green);
      console.log(tarea.descripcion.red);
      console.log(tarea.completado);
      console.log("====================".blue);
    }
    break;
  case "actualizar":
    let act = actualizar(argv.descripcion, argv.completado);
    console.log(act);
    break;
  case "borrar":
    let borrado = borrar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log("Comando no encontrado.");
}
