import { NgModule } from "@angular/core"
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"
import { Location } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { TranslateService } from "@ngx-translate/core"



import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component'
import { P404Component } from './views/p404/p404.component'
import { LoginComponent } from './views/login/login.component'
import { RegisterComponent } from './views/register/register.component'


export function shouldTranslateMap(param: string): string {
  if (isNaN(+param)) {
    return "map"
  }
  return null
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P404Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'media',
        loadChildren: () => import('./modules/media/media.module').then(m => m.MediaModule)
      },


    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
