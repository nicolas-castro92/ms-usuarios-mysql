import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Rol} from './rol.model';

@model()
export class Usuarioxrol extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Usuario, {name: 'tiene_un'})
  id_usuario: number;

  @belongsTo(() => Rol, {name: 'pertenece_a'})
  id_rol: number;

  constructor(data?: Partial<Usuarioxrol>) {
    super(data);
  }
}

export interface UsuarioxrolRelations {
  // describe navigational properties here
}

export type UsuarioxrolWithRelations = Usuarioxrol & UsuarioxrolRelations;
