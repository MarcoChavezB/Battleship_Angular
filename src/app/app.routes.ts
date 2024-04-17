import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/Principal/home/home.component';
import { MenuComponent } from './Layouts/Principal/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path: '',
        component: MenuComponent,
        children: [
          {
            path: 'menu',
            component: HomeComponent
          }
        ]
      }
    ]
  }
];
