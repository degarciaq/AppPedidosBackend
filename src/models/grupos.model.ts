import {Entity, model, property, hasMany} from '@loopback/repository';
import {Lideres} from './lideres.model';

@model()
export class Grupos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  NombreGrupo: string;

  @property({
    type: 'string',
    required: true,
  })
  Interes: string;

  @hasMany(() => Lideres)
  lideres: Lideres[];

  constructor(data?: Partial<Grupos>) {
    super(data);
  }
}

export interface GruposRelations {
  // describe navigational properties here
}

export type GruposWithRelations = Grupos & GruposRelations;
