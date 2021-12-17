import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Grupos, GruposRelations, Lideres} from '../models';
import {LideresRepository} from './lideres.repository';

export class GruposRepository extends DefaultCrudRepository<
  Grupos,
  typeof Grupos.prototype.NombreGrupo,
  GruposRelations
> {

  public readonly lideres: HasManyRepositoryFactory<Lideres, typeof Grupos.prototype.NombreGrupo>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('LideresRepository') protected lideresRepositoryGetter: Getter<LideresRepository>,
  ) {
    super(Grupos, dataSource);
    this.lideres = this.createHasManyRepositoryFactoryFor('lideres', lideresRepositoryGetter,);
    this.registerInclusionResolver('lideres', this.lideres.inclusionResolver);
  }
}
