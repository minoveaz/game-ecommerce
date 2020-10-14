import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../@graphql/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.api.login('sara@hotmail.com', '1234').subscribe(result => {
      console.log(result);
    });
  }

}
