import { PptpresentationComponent } from './pptpresentation/pptpresentation.component';
import { SchemeComponent } from './scheme/scheme.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterwoschemeComponent } from './registerwoscheme/registerwoscheme.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'companyprofile', component: CompanyprofileComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'pptpresentation', component: PptpresentationComponent },
  { path: 'contactus', component: ContactusComponent },
  {path:'registerwoscheme',component:RegisterwoschemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
