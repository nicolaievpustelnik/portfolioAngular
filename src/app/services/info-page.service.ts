import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;
  team: any[] = [];

  constructor(private http: HttpClient) { 

    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo(){

    //Read json data
    this.http.get('assets/data/data-page.json')
    .subscribe((resp: InfoPage) => {

      this.loaded = true;
      this.info = resp;

    })
  }
  
  private loadTeam(){
    
    //Read firebase data
    this.http.get('https://angularportfolio-29bc1-default-rtdb.firebaseio.com/team.json')
    .subscribe((resp: any[]) => {

      this.team = resp;

    })
  }

}
