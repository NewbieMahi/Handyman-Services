import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { ServicesComponent } from './services/services.component';
import { RoutingModule } from './routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WorkerRegisterComponent } from './worker-register/worker-register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SliderComponent } from './slider/slider.component';
import { PlumberComponent } from './plumber/plumber.component';
import { SinglePlumberComponent } from './single-plumber/single-plumber.component';

import { GoogleMapComponent } from './google-map/google-map.component';
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
    GoogleMapComponent
  ],
  imports: [
    // CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RoutingModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    // NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
