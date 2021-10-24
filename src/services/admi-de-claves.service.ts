import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {CambioClave} from '../models/cambio-clave.model';
import {UsuarioRepository} from '../repositories/usuario.repository';
const generator = require('generate-password');
const cryptoJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AdmiDeClavesService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository
  ) { }

  /*
   * Add service methods here
   */
  async recuperarClave(correo: string) {
    let usuario = await this.usuarioRepository.findOne({
      where: {
        correo: correo
      }
    });
    if (usuario) {
      let claveRecuperada = this.crearClaveAleatoria();
      usuario.contrasenia = this.cifrarTexto(claveRecuperada);
      await this.usuarioRepository.updateById(usuario.id, usuario);
      //notificar la nueva contraseña por correo;
      return usuario
    } else {
      return null;
    }
  }

  async cambiarClave(credencialesClave: CambioClave) {
    let usuario = await this.usuarioRepository.findOne({
      where: {
        id: credencialesClave.id_usuario,
        contrasenia: credencialesClave.clave_actual
      }
    });
    if (usuario) {
      usuario.contrasenia = credencialesClave.clave_nueva;
      await this.usuarioRepository.updateById(credencialesClave.id_usuario, usuario);
      return usuario;
    } else {
      return null;
    }
  }

  crearClaveAleatoria(): string {
    let password: string = generator.generate({
      length: 10,
      numbers: true
    });
    return password;
  }

  cifrarTexto(texto: string): string {
    let encryptedTexto: string = cryptoJS.MD5(texto).toString();
    return encryptedTexto;
  }

}
