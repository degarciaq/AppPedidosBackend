import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Grupos} from './grupos.model';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellido: string;

  @property({
    type: 'number',
    required: true,
  })
  Edad: number;

  @property({
    type: 'string',
    required: true,
  })
  TipoIdentificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  NumeroIdentificacion: string;

  @property({
    type: 'number',
    required: true,
  })
  FechaNacimiento: number;

  @property({
    type: 'string',
    required: true,
  })
  Genero: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'any',
    required: true,
  })
  FotoPersonal: any;

  @belongsTo(() => Grupos)
  gruposId: string;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
