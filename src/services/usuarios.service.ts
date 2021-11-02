import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {UsuarioRepository} from '../repositories/usuario.repository';
const fetch = require('node-fetch');

@injectable({scope: BindingScope.TRANSIENT})
export class UsuariosService {
  constructor(
    @repository(UsuarioRepository)
    public UsuarioRepository: UsuarioRepository
  ) { }

  /*
   * Add service methods here
   */


  /* async validarCredenciales(credenciales: Credenciales) {

  } */


  /* async crearToken(datosUser: Usuario) {
    let urlToken = `${Configuracion.urlCrearToken}?${Configuracion.nombreArg}=${datosUser.nombre}&${Configuracion.idUserArg}=${datosUser.id}&${Configuracion.idRolArg}=${datosUser.tiene_muchos[1]}`
    let token = "";
    fetch(urlToken)
      .then((resp: any) => {
        token = resp.text();
        console.log(token);
      })
    return token;
  } */


}
