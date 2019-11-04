import { Component, OnInit, Directive,ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GitService } from '../../services/git/git.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  // FOR THE RIPPLE EFFECT
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  // ***********************

  dat: any;
  user: any;
  repos: any;
  routeSub: any;

  p: any;
  r: any;
  constructor(private route: ActivatedRoute, public gitService: GitService) { }

  // ViolatorLink(url) {
  //   console.log(url);
  //   window.location.href = url;
  // }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params);
      this.p = params.q;
      console.log(this.p)
      this.r = params.w;
      console.log(this.r)

      if(this.p){
        // IF UserName is entered
        this.gitService.getUser(this.p).subscribe(data=>{
          this.user = data
          console.log(this.user);

            // start of another fx for current users repos
          this.gitService.getUserRepo(this.user.repos_url).subscribe(data=>{
            this.dat = data;
            console.log(this.dat)
          },
          (error)=>{
            console.log(error)
          });
          // ************
        },
        (error)=>{
          console.log(error)
        })

      }else if(this.r){
        // IF Repo Name is entered
        console.log("I am working fine");
        this.gitService.getRepos(this.r).subscribe(data=>{
          this.repos = data["items"];
          console.log(this.repos);
        },
        (error)=>{
          console.log(error)
        })
      }
      // END OF IF STATEMENT
    })
  }

}
