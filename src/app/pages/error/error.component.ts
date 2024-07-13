import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  logoImg = "assets/images/logo.png";
  notFoundImg = "assets/images/not_found.png";
}
