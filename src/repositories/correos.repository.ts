import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Correos, CorreosRelations} from '../models';

export class CorreosRepository extends DefaultCrudRepository<
  Correos,
  typeof Correos.prototype.id,
  CorreosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Correos, dataSource);
  }
}
