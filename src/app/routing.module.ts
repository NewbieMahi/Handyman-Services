import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ServicesComponent } from './home-services/services.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WorkerRegisterComponent } from './worker-register/worker-register.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { PlumberComponent } from './plumber/plumber.component';
import { CarpentarComponent } from './carpentar/carpentar.component';
import { ElecticianComponent } from './electician/electician.component';
import { CarsComponent } from './cars/cars.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { SinglePlumberComponent } from './single-plumber/single-plumber.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { PainterComponent } from './painter/painter.component';
import { WorkerChartComponent } from './worker-chart/worker-chart.component';
import { UserTableComponent } from './user-table/user-table.component';
import { WorkerTableComponent } from './worker-table/worker-table.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { OrderChartComponent } from './order-chart/order-chart.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
  { path: 'service-component', component: ServicesComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'worker-register', component: WorkerRegisterComponent },
  { path: 'login', component:LoginComponent},
  { path:'', component:SliderComponent},
  { path:'plumber', component:PlumberComponent},
  { path:'carpentar', component:CarpentarComponent},
  { path:'electrician', component:ElecticianComponent},
  { path:'carrepair', component: CarsComponent},
  { path:'cleaner', component: CleaningComponent},
  { path:'painter', component: PainterComponent},
  { path:'single-plumber', component:SinglePlumberComponent},
  { path:'worker-chart', component: WorkerChartComponent},
  { path: 'all-users', component: UserTableComponent},
  {path:'all-workers', component: WorkerTableComponent},
  { path:'google-map',component:GoogleMapComponent},
  { path:'shipping-info', component: ShippingFormComponent},
  { path:'admin-view',component: AdminViewComponent },
  { path:'all-orders', component: OrderChartComponent},
  { path:'blogs', component: BlogComponent}

];

@NgModule({
  declarations: [],
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
