export namespace ConfiguracionNotificaciones {
  export const asunto2fa: string = "Código de Verificación - 2FA";
  export const asuntoVerificacionCorreo: string = "Verificación de correo";
  export const claveAsignada: string = "Asignación de Clave";
  export const urlNotificaciones2fa: string = "http://localhost:5093/Notificaciones/enviar";//"http://localhost:5000/email";
  export const urlNotificacionesSms: string = "http://localhost:5093/Notificaciones/enviar-sms";//"http://localhost:5000/sms";
  export const urlValidacionCorreoFrontend: string = "http://localhost:4200/seguridad/validar-hash-usuario-publico";
}
