import { Component, OnInit} from '@angular/core';
import { Routes,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

})
export class NavComponent implements OnInit {
 private fullname;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.fullname = this.route.snapshot.params['fullname'];
    //console.log(fullname);
  }

}
