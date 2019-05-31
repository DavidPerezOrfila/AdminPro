import { Usuario } from './../models/usuario.model';
import { UsuarioService } from './../services/service.index';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  recuerdame = false;
  email: string;
  auth2: any;
  constructor(public router: Router, public usuarioService: UsuarioService, private ngZone: NgZone) {}

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
    this.googleInit();
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '285370073074-d4dgcpomhefhavhe8pflnetlsishkbbs.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });
      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      const token = googleUser.getAuthResponse().id_token;
      this.usuarioService.loginGoogle(token).subscribe(() =>
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        })
      );
    });
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.disconnect();
    this.router.navigate(['/login']);
    auth2.signOut().then(() => {
      console.log('Usuario desconectado');
    });
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    const usuario = new Usuario(null, forma.value.email, forma.value.password);
    this.usuarioService
      .login(usuario, forma.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/dashboard']));
    // this.router.navigate(['/dashboard']);
  }
}
