import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Configuracion} from '../keys/configuracion';
import {NotificacionCorreo} from '../models';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  enviarCorreo(datos: NotificacionCorreo) {
    let urlCorreo = `${Configuracion.urlCorreo}
                    ?destino=${datos.destino}
                    &asunto${datos.asunto}
                    &mensaje${datos.mensaje}
                    &hash${Configuracion.hashNotificacion}`;
    fetch(urlCorreo)
      .then((resp: any) => {
        console.log(resp.text());
        //return resp.text() == Configuracion.respuesta;
      })
  }
}
