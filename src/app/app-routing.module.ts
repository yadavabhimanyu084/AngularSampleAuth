import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const layoutModule = () => import('./layout.module/layout.module').then(x => x.LayoutModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  {
    path: '',
    loadChildren: layoutModule
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
