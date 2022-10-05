import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../account/register/register.component';
import { LayoutComponent } from './layout/layout.component';

const accountModule = () => import('./../account/account.module').then(x => x.AccountModule);
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: 'account', loadChildren: accountModule }
    ]
  },
  { path: "**", redirectTo: "app" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
