import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Sublider, SubliderRelations} from '../models';

export class SubliderRepository extends DefaultCrudRepository<
  Sublider,
  typeof Sublider.prototype.NumeroGrpo,
  SubliderRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Sublider, dataSource);
  }
}
