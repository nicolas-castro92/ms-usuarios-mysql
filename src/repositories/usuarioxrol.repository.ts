import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Usuarioxrol, UsuarioxrolRelations} from '../models';

export class UsuarioxrolRepository extends DefaultCrudRepository<
  Usuarioxrol,
  typeof Usuarioxrol.prototype.id,
  UsuarioxrolRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Usuarioxrol, dataSource);
  }
}
