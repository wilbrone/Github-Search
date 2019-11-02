import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params.q);
      this._book.search();
    })
  }

}
