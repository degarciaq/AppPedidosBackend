import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Persona,
  Grupos,
} from '../models';
import {PersonaRepository} from '../repositories';

export class PersonaGruposController {
  constructor(
    @repository(PersonaRepository)
    public personaRepository: PersonaRepository,
  ) { }

  @get('/personas/{id}/grupos', {
    responses: {
      '200': {
        description: 'Grupos belonging to Persona',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Grupos)},
          },
        },
      },
    },
  })
  async getGrupos(
    @param.path.string('id') id: typeof Persona.prototype.Id,
  ): Promise<Grupos> {
    return this.personaRepository.grupos(id);
  }
}
