import {Entity, model, property} from '@loopback/repository';

@model()
export class Correos extends Entity {
  @property({
    type: 'string',
  })
  correo?: string;

  @property({
    type: 'number',
  })
  rol?: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Correos>) {
    super(data);
  }
}

export interface CorreosRelations {
  // describe navigational properties here
}

export type CorreosWithRelations = Correos & CorreosRelations;
