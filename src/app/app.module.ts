import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, NgxUiLoaderRouterModule, SPINNER, POSITION, PB_DIRECTION   } from "ngx-ui-loader";

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrderComponent } from './components/order/order.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { PrasticeComponent } from './components/prastice/prastice.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { TestComponent } from './components/test/test.component';
import { FormsComponent } from './components/forms/forms.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { SignupNewComponent } from './components/signup-new/signup-new.component';
import { CartNewComponent } from './components/cart-new/cart-new.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    CheckoutComponent,
    AdminComponent,
    NotfoundComponent,
    OrderComponent,
    NavbarComponent,
    AccountComponent,
    CartComponent,
    SliderComponent,
    PrasticeComponent,
    PatientsComponent,
    PatientDetailsComponent,
    TestComponent,
    FormsComponent,
    LoginNewComponent,
    SignupNewComponent,
    CartNewComponent,

   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularTypewriterEffectModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),  
      
    ],
    
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
