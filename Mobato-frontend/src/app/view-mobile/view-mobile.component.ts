import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-mobile',
  templateUrl: './view-mobile.component.html',
  styleUrl: './view-mobile.component.css'
})
export class ViewMobileComponent implements OnInit{
  mobiles: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.viewMobile().subscribe(data => {
      this.mobiles = data;
    });
  }

}
