import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {GenerarPqrs, GenerarPqrsRelations} from '../models';

export class GenerarPqrsRepository extends DefaultCrudRepository<
  GenerarPqrs,
  typeof GenerarPqrs.prototype._id,
  GenerarPqrsRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(GenerarPqrs, dataSource);
  }
}
