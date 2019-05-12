import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderLoginRegisterComponent } from './header/header-login-register/header-login-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MostUsedServiceComponent } from './most-used-service/most-used-service.component';
import { OffersComponent } from './offers/offers.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { PopularServiceComponent } from './showcase/popular-service/popular-service.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OwlModule} from 'ngx-owl-carousel';
import { ShowcaseComponent } from './showcase/showcase.component';
import { UtilityBillComponent } from './showcase/utility-bill/utility-bill.component';
import { MovieBookingComponent } from './showcase/movie-booking/movie-booking.component';
import { InternetBillComponent } from './showcase/internet-bill/internet-bill.component';
import { OnlineShoppingComponent } from './showcase/online-shopping/online-shopping.component';
import { PatnersBankComponent } from './patners-bank/patners-bank.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    HeaderLoginRegisterComponent,
    NavbarComponent,
    MostUsedServiceComponent,
    OffersComponent,
    MainSliderComponent,
    PopularServiceComponent,
    ShowcaseComponent,
    UtilityBillComponent,
    MovieBookingComponent,
    InternetBillComponent,
    OnlineShoppingComponent,
    PatnersBankComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
