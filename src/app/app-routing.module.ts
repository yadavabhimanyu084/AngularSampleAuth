import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const layoutModule = () => import('./layout.module/layout.module').then(x => x.LayoutModule);

const routes: Routes = [
  { path: '', redirectTo:'account/login',pathMatch: 'full' },
  { path: 'account', loadChildren: accountModule },
  { path: 'layout', loadChildren: layoutModule },
 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
