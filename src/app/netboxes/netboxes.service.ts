import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NetboxesService {
   private partition_url ='/app/data/netboxes.json';
    constructor(private http: Http) { }

    getPartitions(): Observable<any[]>{
    //return Partitions;
    return this.http.get(this.partition_url)
                     .map(this.extractData);
                     //.catch(this.handleError);
  }
   extractData(res: Response){
      let data = res.json();
      return data;
  }
}