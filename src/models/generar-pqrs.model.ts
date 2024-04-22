import {Entity, model, property} from '@loopback/repository';

@model()
export class GenerarPqrs extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  constructor(data?: Partial<GenerarPqrs>) {
    super(data);
  }
}

export interface GenerarPqrsRelations {
  // describe navigational properties here
}

export type GenerarPqrsWithRelations = GenerarPqrs & GenerarPqrsRelations;
