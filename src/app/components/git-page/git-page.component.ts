import { Component, OnInit } from '@angular/core';
import { Directive,ElementRef,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-page',
  templateUrl: './git-page.component.html',
  styleUrls: ['./git-page.component.css']
})
export class GitPageComponent implements OnInit {

  constructor(private el: ElementRef, private router: Router) { }

  submitSearch(event, queryTerm){
    let query = queryTerm.value
    console.log(query);
    if (query){
      this.router.navigate(['/search', {q: query}])
    }
  }

  ngOnInit() {
  }

}
