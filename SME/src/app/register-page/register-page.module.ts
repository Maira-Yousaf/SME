import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactSectionComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    ContactSectionComponent
  ]
})
export class RegisterPageModule { }
