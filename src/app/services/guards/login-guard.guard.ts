import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardGuard implements CanActivate {
  constructor(
    public userService: UsuarioService,
    public router: Router
    ) {}
  canActivate() {
    if (this.userService.estaLogueado()) {
      console.log('Pasó por el login guard');
      return true;
    } else {
      console.log('Bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
