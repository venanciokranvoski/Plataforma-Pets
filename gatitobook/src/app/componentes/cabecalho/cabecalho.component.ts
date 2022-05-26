import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  // -----
  // a comunidade angular adotou o uso de cifrão para dizer que é uma variavel.
  // ----
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout(){
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {

  }

}
