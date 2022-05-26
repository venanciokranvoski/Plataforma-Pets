import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioform!: FormGroup;

  constructor( private formBuilder: FormBuilder,
  private NovoUsuarioService: NovoUsuarioService,
  private usuarioExistenteService:UsuarioExisteService,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.novoUsuarioform = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      fullName:['',[Validators.required, Validators.minLength(4)]],
      userName:['',[minusculoValidator],[this.usuarioExistenteService.usuariojaExiste()],
    ],
      password:[''],
    },
    {
      validators: [usuarioSenhaIguaisValidator]
    });
  }

  cadastrar(){
    if(this.novoUsuarioform.valid){
      const novoUsuario = this.novoUsuarioform.getRawValue() as NovoUsuario;
      this.NovoUsuarioService.CadastroNovoUser(novoUsuario).subscribe(
        ()=>{
          this.router.navigate(['']);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }

}
