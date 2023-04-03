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
import { PaymentComponent } from './payment/payment.component';
import { AuthService } from './auth.service';
import { AllServiceService } from './all-service.service';
import { UserTableService } from './user-table.service';
import { WorkerTableService } from './worker-table.service';
import { MatTableModule } from '@angular/material/table'; // add this import
import { UserTableComponent } from './user-table/user-table.component';
import { WorkerTableComponent } from './worker-table/worker-table.component';



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
    PaymentComponent,
    UserTableComponent,
    WorkerTableComponent
  ],
  imports: [
    // CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatRadioModule,
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
    HttpClientModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
