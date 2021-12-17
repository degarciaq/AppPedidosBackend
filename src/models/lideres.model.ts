import {Entity, model, property} from '@loopback/repository';

@model()
export class Lideres extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  NumeroGrupo: number;

  @property({
    type: 'string',
    required: true,
  })
  Cargo: string;

  @property({
    type: 'string',
  })
  gruposId?: string;

  constructor(data?: Partial<Lideres>) {
    super(data);
  }
}

export interface LideresRelations {
  // describe navigational properties here
}

export type LideresWithRelations = Lideres & LideresRelations;
