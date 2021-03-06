import { UsuarioService } from './../../services/usuario/usuario.service';
import { SidebarService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  constructor(public sidebar: SidebarService, public usuarioService: UsuarioService) {}

  ngOnInit() {}
}
