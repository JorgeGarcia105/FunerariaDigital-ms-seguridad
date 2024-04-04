export namespace ConfiguracionSeguridad {
  export const claveJWT = process.env.SECRET_PASSWORD_JWT;
  export const menuUsuarioId = "";
  export const listarAccion = "listar";
  export const guardarAccion = "guardar";
  export const editarAccion = "editar";
  export const eliminarAccion = "eliminar";
  export const descargarAccion = "descargar";
  export const mongodbConnetionString = process.env.CONNECTION_STRING_MONGODB;
  export const usuariomongo = process.env.USER_MONGO_FUNERARIA;
  export const rolUsuarioPublico = "";
}
