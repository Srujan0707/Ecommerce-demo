import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { SliderComponent } from './components/slider/slider.component';
import { PrasticeComponent } from './components/prastice/prastice.component';
import {PatientsComponent} from './components/patients/patients.component';
import {PatientDetailsComponent} from './components/patient-details/patient-details.component';
import {TestComponent} from './components/test/test.component';
import {FormsComponent} from './components/forms/forms.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { SignupNewComponent } from './components/signup-new/signup-new.component';
import {CartNewComponent  } from './components/cart-new/cart-new.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [

                {path:'',                 component: HomeComponent},
                {path:'admin',            component: AdminComponent},
                {path:'cart',             component: CartComponent},
                {path:'checkout',         component: CheckoutComponent},
                {path:'login',            component: LoginComponent},
                {path:'logout',           component: LogoutComponent},
                {path:'navbar',           component: NavbarComponent},
                {path:'order',            component: OrderComponent},
                {path:'products',         component: ProductsComponent},
                {path:'signup',           component: SignupComponent},
                {path:'account',          component: AccountComponent},
                {path:'slider',           component: SliderComponent},
                {path:'prastice',         component:PrasticeComponent},
                {path:'patients',         component:PatientsComponent},
                {path:'patientDetails',   component:PatientDetailsComponent},
                {path:'test',             component:TestComponent},
                {path:'forms',            component:FormsComponent}, 
                {path:'login-new',        component:LoginNewComponent},
                {path:'signup-new',       component:SignupNewComponent},
                {path:'cart-new',         component:CartNewComponent},
                {path:'**',               component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
