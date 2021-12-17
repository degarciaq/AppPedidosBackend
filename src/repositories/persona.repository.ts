import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Persona, PersonaRelations, Grupos} from '../models';
import {GruposRepository} from './grupos.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.Id,
  PersonaRelations
> {

  public readonly grupos: BelongsToAccessor<Grupos, typeof Persona.prototype.Id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('GruposRepository') protected gruposRepositoryGetter: Getter<GruposRepository>,
  ) {
    super(Persona, dataSource);
    this.grupos = this.createBelongsToAccessorFor('grupos', gruposRepositoryGetter,);
    this.registerInclusionResolver('grupos', this.grupos.inclusionResolver);
  }
}
