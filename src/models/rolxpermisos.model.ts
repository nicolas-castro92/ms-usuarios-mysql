import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Rol} from './rol.model';
import {Permisos} from './permisos.model';

@model()
export class Rolxpermisos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Rol, {name: 'tiene_un'})
  id_rol: number;

  @belongsTo(() => Permisos, {name: 'pertenece_a'})
  id_permiso: number;

  constructor(data?: Partial<Rolxpermisos>) {
    super(data);
  }
}

export interface RolxpermisosRelations {
  // describe navigational properties here
}

export type RolxpermisosWithRelations = Rolxpermisos & RolxpermisosRelations;
