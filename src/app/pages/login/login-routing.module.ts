import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro-usuario', component: CadastroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
