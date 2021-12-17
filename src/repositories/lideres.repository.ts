import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Lideres, LideresRelations} from '../models';

export class LideresRepository extends DefaultCrudRepository<
  Lideres,
  typeof Lideres.prototype,
  LideresRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Lideres, dataSource);
  }
}
