import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Configuracion} from '../keys/configuracion';
import {Credenciales} from '../models/credenciales.model';
import {Usuario} from '../models/usuario.model';
import {Usuarioxrol} from '../models/usuarioxrol.model';
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


  async validarCredenciales(credenciales: Credenciales) {
    let usuario = await this.UsuarioRepository.findOne({
      where: {
        correo: credenciales.usuario,
        contrasenia: credenciales.clave
      }
    });
    return usuario;
  }


  async crearToken(datosUser: Usuario, datosUserxRol: Usuarioxrol): Promise<string> {
    let urlToken = `${Configuracion.urlCrearToken}?${Configuracion.nombreArg}=${datosUser.nombre}&${Configuracion.idUserArg}=${datosUserxRol.id_usuario}&${Configuracion.idRolArg}=${datosUserxRol.id_rol}`
    let tk = "";
    //console.log(tk);
    await fetch(urlToken)
      .then(async (res: any) => {
        tk = await res.text();
      })
    //console.log(tk);
    return tk;
  }


}
