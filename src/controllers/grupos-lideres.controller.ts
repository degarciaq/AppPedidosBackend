import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Grupos,
  Lideres,
} from '../models';
import {GruposRepository} from '../repositories';

export class GruposLideresController {
  constructor(
    @repository(GruposRepository) protected gruposRepository: GruposRepository,
  ) { }

  @get('/grupos/{id}/lideres', {
    responses: {
      '200': {
        description: 'Array of Grupos has many Lideres',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Lideres)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Lideres>,
  ): Promise<Lideres[]> {
    return this.gruposRepository.lideres(id).find(filter);
  }

  @post('/grupos/{id}/lideres', {
    responses: {
      '200': {
        description: 'Grupos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lideres)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Grupos.prototype.NombreGrupo,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lideres, {
            title: 'NewLideresInGrupos',
            
            optional: ['gruposId']
          }),
        },
      },
    }) lideres: Omit<Lideres, 'id'>,
  ): Promise<Lideres> {
    return this.gruposRepository.lideres(id).create(lideres);
  }

  @patch('/grupos/{id}/lideres', {
    responses: {
      '200': {
        description: 'Grupos.Lideres PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lideres, {partial: true}),
        },
      },
    })
    lideres: Partial<Lideres>,
    @param.query.object('where', getWhereSchemaFor(Lideres)) where?: Where<Lideres>,
  ): Promise<Count> {
    return this.gruposRepository.lideres(id).patch(lideres, where);
  }

  @del('/grupos/{id}/lideres', {
    responses: {
      '200': {
        description: 'Grupos.Lideres DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Lideres)) where?: Where<Lideres>,
  ): Promise<Count> {
    return this.gruposRepository.lideres(id).delete(where);
  }
}
