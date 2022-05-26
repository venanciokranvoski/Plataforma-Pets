import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private nvs: NovoUsuarioService) { }

  usuariojaExiste(){
    return (control: AbstractControl)=>{
      return control.valueChanges.pipe(
        switchMap((nomeUsuario)=> // trocar o fluxo
           this.nvs.verificaUsuarioExistente(nomeUsuario)
        ), // troca o resultado
        map((usuarioExiste)=>(usuarioExiste ? {usuarioExistente:true}:null)
           ),
        first( ) // depois da requisição ele vai fechar o observo
      );
    }         // o fluxo da validação
  }




}
