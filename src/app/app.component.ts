import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from './service/menuservice/menuservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menu';
  menuDetails: any;
  // someArray: any = ['A','B','C','D'];

  constructor(private allmenuservice : MenuserviceService) { }

  ngOnInit(): void { 
    this.allmenuservice.Totaldata().subscribe(
      data => {
        // console.log(data); 
        this.menuDetails = data.monoMenu;
        console.log(this.menuDetails); 
      }
    );

  //  for(let i = 0; i < this.someArray.length; i++) {
  //    console.log(this.someArray[i].reverse());
  //  }
  //  console.log('Direct Array = ' + this.someArray.reverse());

  }

}

