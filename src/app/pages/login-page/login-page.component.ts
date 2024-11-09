import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FloatLabelModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  value: string | undefined;
}
