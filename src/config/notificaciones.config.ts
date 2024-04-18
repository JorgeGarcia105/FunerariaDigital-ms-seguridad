export namespace ConfiguracionNotificaciones {
  export const asunto2fa: string = "Código de Verificación - 2FA";
  export const asuntoVerificacionCorreo: string = "Verificación de correo";
  export const claveAsignada: string = "Asignación de Clave";
  export const urlNotificaciones2fa: string = "http://localhost:5132/Notificaciones/enviar-correo";
  export const urlNotificacionesSms: string = "http://localhost:5132/Notificaciones/enviar-sms";
  export const urlValidacionCorreoFrontend: string = "http://localhost:4200/seguridad/validar-hash-usuario-publico";
}
