import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {GenerarPqrs} from '../models';
import {GenerarPqrsRepository} from '../repositories';
import {ConfiguracionNotificaciones} from '../config/notificaciones.config';
import {NotificacionesService} from '../services/notificaciones.service';
import {service} from '@loopback/core/dist/service';

export class GenerarPqrsController {
  constructor(
    @repository(GenerarPqrsRepository)
    public generarPqrsRepository : GenerarPqrsRepository,
    @service(NotificacionesService)
    public servicioNotificaciones: NotificacionesService
  ) {}

  @post('/generar-pqrs')
  @response(200, {
    description: 'GenerarPqrs model instance',
    content: {'application/json': {schema: getModelSchemaRef(GenerarPqrs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenerarPqrs, {
            title: 'NewUsuario',
            exclude: ['_id'],
          }),
        },
      },
    })
    generarPqrs: Omit<GenerarPqrs, '_id'>,
  ): Promise<GenerarPqrs> {
    let datos = {
      correo: "string",
      nombre: "string",
      descripcion: "string"
    };
    let url = ConfiguracionNotificaciones.urlNotificaciones2fa;
    this.servicioNotificaciones.EnviarNotificacion(datos, url);
    return this.generarPqrsRepository.create(datos);
  }

  @get('/generar-pqrs/count')
  @response(200, {
    description: 'GenerarPqrs model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(GenerarPqrs) where?: Where<GenerarPqrs>,
  ): Promise<Count> {
    return this.generarPqrsRepository.count(where);
  }

  @get('/generar-pqrs')
  @response(200, {
    description: 'Array of GenerarPqrs model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(GenerarPqrs, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(GenerarPqrs) filter?: Filter<GenerarPqrs>,
  ): Promise<GenerarPqrs[]> {
    return this.generarPqrsRepository.find(filter);
  }

  @patch('/generar-pqrs')
  @response(200, {
    description: 'GenerarPqrs PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenerarPqrs, {partial: true}),
        },
      },
    })
    generarPqrs: GenerarPqrs,
    @param.where(GenerarPqrs) where?: Where<GenerarPqrs>,
  ): Promise<Count> {
    return this.generarPqrsRepository.updateAll(generarPqrs, where);
  }

  @get('/generar-pqrs/{id}')
  @response(200, {
    description: 'GenerarPqrs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(GenerarPqrs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(GenerarPqrs, {exclude: 'where'}) filter?: FilterExcludingWhere<GenerarPqrs>
  ): Promise<GenerarPqrs> {
    return this.generarPqrsRepository.findById(id, filter);
  }

  @patch('/generar-pqrs/{id}')
  @response(204, {
    description: 'GenerarPqrs PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenerarPqrs, {partial: true}),
        },
      },
    })
    generarPqrs: GenerarPqrs,
  ): Promise<void> {
    await this.generarPqrsRepository.updateById(id, generarPqrs);
  }

  @put('/generar-pqrs/{id}')
  @response(204, {
    description: 'GenerarPqrs PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() generarPqrs: GenerarPqrs,
  ): Promise<void> {
    await this.generarPqrsRepository.replaceById(id, generarPqrs);
  }

  @del('/generar-pqrs/{id}')
  @response(204, {
    description: 'GenerarPqrs DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.generarPqrsRepository.deleteById(id);
  }
}
