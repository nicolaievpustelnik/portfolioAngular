import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _infoService: InfoPageService) { }

  ngOnInit(): void {
  }

}
