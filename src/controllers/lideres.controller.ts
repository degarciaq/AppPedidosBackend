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
import {Lideres} from '../models';
import {LideresRepository} from '../repositories';

export class LideresController {
  constructor(
    @repository(LideresRepository)
    public lideresRepository : LideresRepository,
  ) {}

  @post('/lideres')
  @response(200, {
    description: 'Lideres model instance',
    content: {'application/json': {schema: getModelSchemaRef(Lideres)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lideres, {
            title: 'NewLideres',

          }),
        },
      },
    })
    lideres: Omit<Lideres, 'id'>,
  ): Promise<Lideres> {
    return this.lideresRepository.create(lideres);
  }

  @get('/lideres/count')
  @response(200, {
    description: 'Lideres model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Lideres) where?: Where<Lideres>,
  ): Promise<Count> {
    return this.lideresRepository.count(where);
  }

  @get('/lideres')
  @response(200, {
    description: 'Array of Lideres model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Lideres, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Lideres) filter?: Filter<Lideres>,
  ): Promise<Lideres[]> {
    return this.lideresRepository.find(filter);
  }

  @patch('/lideres')
  @response(200, {
    description: 'Lideres PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lideres, {partial: true}),
        },
      },
    })
    lideres: Lideres,
    @param.where(Lideres) where?: Where<Lideres>,
  ): Promise<Count> {
    return this.lideresRepository.updateAll(lideres, where);
  }

  @get('/lideres/{id}')
  @response(200, {
    description: 'Lideres model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Lideres, {includeRelations: true}),
      },
    },
  })
  

  @patch('/lideres/{id}')
  @response(204, {
    description: 'Lideres PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lideres, {partial: true}),
        },
      },
    })
    lideres: Lideres,
  ): Promise<void> {
    await this.lideresRepository;
  }

  @put('/lideres/{id}')
  @response(204, {
    description: 'Lideres PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() lideres: Lideres,
  ): Promise<void> {
    await this.lideresRepository;
  }

  @del('/lideres/{id}')
  @response(204, {
    description: 'Lideres DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.lideresRepository.deleteById;
  }
}
