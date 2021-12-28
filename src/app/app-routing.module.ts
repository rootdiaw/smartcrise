import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {DasboardComponent} from './modules/dasboard/dasboard.component';
import {FooterComponent} from './shared/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children:[
      {
        path:'',
        component: DasboardComponent
      }
      ,
      {
        path:'faq',
        component:FooterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
