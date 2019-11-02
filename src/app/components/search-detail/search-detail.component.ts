import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GitService } from '../../services/git/git.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  dat: any;
  routeSub: any;
  constructor(private route: ActivatedRoute, public gitService: GitService) { }


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params);
      // this.data = params.q;
      this.dat = this.gitService.getUser(params)
    })

    console.log(this.dat)
  }

}
