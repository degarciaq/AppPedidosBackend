import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Pastor, PastorRelations} from '../models';

export class PastorRepository extends DefaultCrudRepository<
  Pastor,
  typeof Pastor.prototype.Admin,
  PastorRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Pastor, dataSource);
  }
}
