import { Component } from '@angular/core';
import { ApiService } from  './api.service';
import { Item } from  './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizza-pwa';
  items: Array<Item>;

  constructor(private apiService: ApiService) { }

  fetchData() : void {
    this.apiService.fetch().subscribe( 
      (data: Array<Item>) => {
        console.log(data);
        this.items = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  ngOnInit() {
    this.fetchData();
  }
}
