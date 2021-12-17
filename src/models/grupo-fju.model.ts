import {Entity, model, property} from '@loopback/repository';

@model()
export class GrupoFju extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  TribuNombre: string;


  constructor(data?: Partial<GrupoFju>) {
    super(data);
  }
}

export interface GrupoFjuRelations {
  // describe navigational properties here
}

export type GrupoFjuWithRelations = GrupoFju & GrupoFjuRelations;
