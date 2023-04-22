import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-success',
  templateUrl: './update-success.component.html',
  styleUrls: ['./update-success.component.css']
})
export class UpdateSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  redirectToHomePage() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
