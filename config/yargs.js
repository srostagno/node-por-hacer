const description = {
  descripcion: {
    alias: "d",
    demand: true,
    desc: "Descripción de la tarea"
  }
};
const completado = {
  completado: {
    default: true,
    alias: "c",
    desc: "Marca como completada o pendiente la tarea."
  }
};

const argv = require("yargs")
  .command("crear", "Crea nueva tarea.", description)
  .command("mostrar", "Muestra tareas disponibles")
  .command("actualizar", "Actualiza tarea", description)
  .command("borrar", "Borrar tarea", description)
  .help().argv;

module.exports = {
  argv
};
