import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {GrupoFju, GrupoFjuRelations} from '../models';

export class GrupoFjuRepository extends DefaultCrudRepository<
  GrupoFju,
  typeof GrupoFju.prototype.TribuNombre,
  GrupoFjuRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(GrupoFju, dataSource);
  }
}
