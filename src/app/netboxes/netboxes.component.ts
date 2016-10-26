import { Component, OnInit } from '@angular/core';
import { NetboxesService } from './netboxes.service';

@Component({
  selector: 'app-netboxes',
  templateUrl: './netboxes.component.html',
  styleUrls: ['./netboxes.component.css'],
  providers: [
    NetboxesService
  ]
})
export class NetboxesComponent implements OnInit {

  private partitions:any[];

  constructor(private netboxeservice: NetboxesService) { }

  getPartitions(){
    this.netboxeservice.getPartitions().subscribe(data =>{
      this.partitions = data;
    });
  }

  ngOnInit() {

    this.getPartitions();
   }

}
