import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signRouting} from './sign-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    signRouting
  ],
  declarations: [
    LoginComponent
  ]
})
export class SignModule { }
