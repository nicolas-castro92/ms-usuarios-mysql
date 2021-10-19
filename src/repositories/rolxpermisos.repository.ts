import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Rolxpermisos, RolxpermisosRelations} from '../models';

export class RolxpermisosRepository extends DefaultCrudRepository<
  Rolxpermisos,
  typeof Rolxpermisos.prototype.id,
  RolxpermisosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Rolxpermisos, dataSource);
  }
}
