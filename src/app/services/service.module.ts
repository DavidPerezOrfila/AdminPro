import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: no-submodule-imports
import { HttpClientModule } from '@angular/common/http';

import { SettingsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard } from './service.index';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [SettingsService, SidebarService, SharedService, UsuarioService, LoginGuardGuard],
})
export class ServiceModule {}
