import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-page',
  templateUrl: './git-page.component.html',
  styleUrls: ['./git-page.component.css']
})
export class GitPageComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>();

  query: any;
  constructor(private router: Router) { }

  submitSearch(queryTerm){
    this.query = queryTerm.value['q']
    console.log(this.query);
    if (this.query){
      this.router.navigate(['/search', {q: this.query}])
    }
  }

  ngOnInit() {
  }

}
