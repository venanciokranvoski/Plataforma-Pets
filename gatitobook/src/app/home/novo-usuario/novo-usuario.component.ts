import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioform!: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private NovoUsuarioService: NovoUsuarioService) { }

  ngOnInit(): void {
    this.novoUsuarioform = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      fullName:['',[Validators.required, Validators.minLength(4)]],
      userName:[''],
      password:['']
    });
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioform.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }

}
