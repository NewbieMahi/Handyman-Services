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
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { RazorpayTransactionsComponent } from './razorpay-transactions/razorpay-transactions.component';
import { BlogTableComponent } from './blog-table/blog-table.component';
import { PredictiveMaintanceComponent } from './predictive-maintance/predictive-maintance.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { FaqComponent } from './faq/faq.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';
import { PendingServicesComponent } from './pending-services/pending-services.component';
import { CompletedServiceComponent } from './completed-service/completed-service.component';
import { MyserviceComponent } from './myservice/myservice.component';
import { AvailableComponent } from './available/available.component';
import { AllBookingServicesComponent } from './all-booking-services/all-booking-services.component';
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
  { path:'service', component:SinglePlumberComponent},
  { path:'worker-chart', component: WorkerChartComponent},
  { path: 'all-users', component: UserTableComponent},
  {path:'all-workers', component: WorkerTableComponent},
  { path:'google-map',component:GoogleMapComponent},
  { path:'shipping-info/:id', component: ShippingFormComponent},
  { path:'admin-view',component: AdminViewComponent },
  { path:'all-orders', component: OrderChartComponent},
  { path:'blogs', component: BlogComponent},
  { path: 'allblogs', component: AllBlogsComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: 'service/:id', component: SinglePlumberComponent},
  { path: 'razorpay', component: RazorpayTransactionsComponent},
  { path: 'admin-blogs', component: BlogTableComponent},
  { path: 'predict-maintance', component: PredictiveMaintanceComponent},
  { path: 'payment-success', component: PaymentSuccessComponent},
  { path: 'faq', component : FaqComponent},
  { path: 'update', component: UpdateProfileComponent },
  { path: 'update-success', component: UpdateSuccessComponent},
  { path: 'pending-services', component: PendingServicesComponent},
  { path: 'completed-services', component: CompletedServiceComponent},
  { path: 'available', component: AvailableComponent},
  { path: 'my-services',component: MyserviceComponent},
  { path: 'all-services',component: AllBookingServicesComponent},
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  declarations: [],
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
