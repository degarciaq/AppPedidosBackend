import {Entity, model, property} from '@loopback/repository';

@model()
export class Pastor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  Admin: number;


  constructor(data?: Partial<Pastor>) {
    super(data);
  }
}

export interface PastorRelations {
  // describe navigational properties here
}

export type PastorWithRelations = Pastor & PastorRelations;
