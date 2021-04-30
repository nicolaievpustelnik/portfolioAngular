import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: InfoPageService, private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct(term: string){

    if (term.length < 1) {
      return;
    }

    this.router.navigate(['/search', term]);
  }

}
