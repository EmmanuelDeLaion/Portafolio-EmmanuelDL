import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MessageService } from '../../services/message.service';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContacto: FormGroup;
  private validCorreo = /\S+@\S+\.\S+/;
  myScritElementContact: HTMLScriptElement;

  constructor(
    private formBuilder: FormBuilder,
    private _MessageService: MessageService,
    private _loading: LoadingService
  ) {
    this.formContacto = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.email, Validators.pattern(this.validCorreo)]],
      numero: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });

    this.myScritElementContact = document.createElement("script");
    this.myScritElementContact.src = "/assets/js/funcionesaboutme.js";
    document.body.appendChild(this.myScritElementContact);
  }

  ngOnInit(): void {
  }

  enviarMensaje() {
    this._loading.cargando = true;
    if (this.formContacto.value.nombre != "" && this.formContacto.value.correo != "" && this.formContacto.value.numero != "" && this.formContacto.value.mensaje != "") {
      this._MessageService.sendMessage(this.formContacto.value).subscribe(
        res => {
          Swal.fire({
            icon: 'success',
            title: 'Enviado',
            text: 'Su mensaje se envió con exito'
          }).then(
            function (value) {
              location.reload();
            }
          );
          this.formContacto.reset();
          this._loading.cargando = false;
        },
        err => {

        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Verifique los campos',
        text: 'Favor de ingresar todos los campos correctamente'
      });
      this._loading.cargando = false;
    }
  }

}
