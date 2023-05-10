import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { ServicesComponent } from './home-services/services.component';
import { RoutingModule } from './routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WorkerRegisterComponent } from './worker-register/worker-register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { SliderComponent } from './slider/slider.component';
import { PlumberComponent } from './plumber/plumber.component';
import { SinglePlumberComponent } from './single-plumber/single-plumber.component';
import { CarpentarComponent } from './carpentar/carpentar.component';
import { ElecticianComponent } from './electician/electician.component';
import { CarsComponent } from './cars/cars.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { PainterComponent } from './painter/painter.component';
import { UserService } from './user.service';
import { WorkerService } from './worker.service';
import { WorkerChartService } from './worker-chart.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AuthService } from './auth.service';
import { AllServiceService } from './all-service.service';
import { UserTableService } from './user-table.service';
import { OrderTableService } from './order-table.service';
import { WorkerTableService } from './worker-table.service';
import { MatTableModule } from '@angular/material/table'; // add this import
import { UserTableComponent } from './user-table/user-table.component';
import { WorkerTableComponent } from './worker-table/worker-table.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { OrderChartComponent } from './order-chart/order-chart.component';
import { BlogComponent } from './blog/blog.component';
import { MatCardModule } from '@angular/material/card';
import { BloggingService } from './blogging.service';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { RazorpayTransactionsComponent } from './razorpay-transactions/razorpay-transactions.component';
import { BlogTableComponent } from './blog-table/blog-table.component';
import { AllBlogService } from './all-blog.service';
import { PredictiveMaintanceComponent } from './predictive-maintance/predictive-maintance.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { FaqComponent } from './faq/faq.component';
import { UpdateProfileComponent} from './update-profile/update-profile.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';
import { PendingServicesComponent } from './pending-services/pending-services.component';
import { CompletedServiceComponent } from './completed-service/completed-service.component';
import { MyserviceComponent } from './myservice/myservice.component';
import { AvailableComponent } from './available/available.component';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    UserRegisterComponent,
    WorkerRegisterComponent,
    LoginComponent,
    SliderComponent,
    PlumberComponent,
    SinglePlumberComponent,
    CarpentarComponent,
    ElecticianComponent,
    CarsComponent,
    CleaningComponent,
    PainterComponent,
    GoogleMapComponent,
    UserTableComponent,
    WorkerTableComponent,
    ShippingFormComponent,
    AdminViewComponent,
    OrderChartComponent,
    BlogComponent,
    AllBlogsComponent,
    SingleBlogComponent,
    RazorpayTransactionsComponent,
    BlogTableComponent,
    PredictiveMaintanceComponent,
    PaymentSuccessComponent,
    FaqComponent,
    UpdateProfileComponent,
    UpdateSuccessComponent,
    PendingServicesComponent,
    CompletedServiceComponent,
    MyserviceComponent,
    AvailableComponent,
  ],
  imports: [
    // CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatRadioModule,
    MatCardModule,
    BrowserAnimationsModule,
    RoutingModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule
    
    // NgbCarouselModule
  ],
  providers: [
    UserService,
    WorkerService,
    AuthService,
    AllServiceService,
    WorkerChartService,
    UserTableService,
    WorkerTableService,
    OrderTableService,
    BloggingService,
    AllBlogService,
    HttpClientModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
