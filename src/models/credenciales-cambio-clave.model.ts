import {Model, model, property} from '@loopback/repository';

@model()
export class CredencialesCambioClave extends Model {
  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo2faConfirmacion: string;

  @property({
    type: 'string',
    required: true,
  })
  nuevaClave: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estadoCodigo2fa: boolean;

  constructor(data?: Partial<CredencialesCambioClave>) {
    super(data);
  }
}

export interface CredencialesCambioClaveRelations {
  // describe navigational properties here
}

export type CredencialesCambioClaveWithRelations = CredencialesCambioClave & CredencialesCambioClaveRelations;
