import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WorkerRegisterComponent } from './worker-register/worker-register.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { PlumberComponent } from './plumber/plumber.component';
import { SinglePlumberComponent } from './single-plumber/single-plumber.component';

const routes: Routes = [
  { path: 'service-component', component: ServicesComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'worker-register', component: WorkerRegisterComponent },
  { path: 'login', component:LoginComponent},
  { path:'', component:SliderComponent},
  { path:'plumber', component:PlumberComponent},
    { path:'single-plumber', component:SinglePlumberComponent}

];

@NgModule({
  declarations: [],
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
