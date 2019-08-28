import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { BanerComponent } from './baner/baner.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SchemeComponent } from './scheme/scheme.component';
import { PptpresentationComponent } from './pptpresentation/pptpresentation.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterwoschemeComponent } from './registerwoscheme/registerwoscheme.component';
 
import { ReactiveFormsModule } from '@angular/forms';
import { LoginexistinguserComponent } from './loginexistinguser/loginexistinguser.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HeaderComponent,
    BanerComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    HomeComponent,
    CompanyprofileComponent,
    TestimonialsComponent,
    SchemeComponent,
    PptpresentationComponent,
    ContactusComponent,
    RegisterwoschemeComponent,
    LoginexistinguserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
