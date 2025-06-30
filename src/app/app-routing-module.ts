import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const options: ExtraOptions = { useHash: true };

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then(
        (m) => m.InicioModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/tela-login/tela-login.module').then(
        (m) => m.TelaLoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
