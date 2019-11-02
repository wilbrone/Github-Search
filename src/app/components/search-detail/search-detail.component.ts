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
      let p = params.q;
      console.log(p)
      this.gitService.getUser(p).subscribe(data=>{
      this.dat = data;
      console.log(this.dat)
      },
      (error)=>{
        console.log(error)
      });
    })
  }

}
