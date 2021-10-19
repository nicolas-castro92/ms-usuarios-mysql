import {Entity, model, property} from '@loopback/repository';

@model()
export class Rolxpermisos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Rolxpermisos>) {
    super(data);
  }
}

export interface RolxpermisosRelations {
  // describe navigational properties here
}

export type RolxpermisosWithRelations = Rolxpermisos & RolxpermisosRelations;
