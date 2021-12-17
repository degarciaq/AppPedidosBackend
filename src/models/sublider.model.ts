import {Entity, model, property} from '@loopback/repository';

@model()
export class Sublider extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Cargo: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  NumeroGrpo: number;


  constructor(data?: Partial<Sublider>) {
    super(data);
  }
}

export interface SubliderRelations {
  // describe navigational properties here
}

export type SubliderWithRelations = Sublider & SubliderRelations;
