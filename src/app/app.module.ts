import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Custom Modules
import { PagesModule } from './pages/pages.module';

// Services
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTES, PagesModule, FormsModule, ReactiveFormsModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
