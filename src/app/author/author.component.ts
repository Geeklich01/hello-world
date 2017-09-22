import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authors : string[];
  
  constructor(authorService: AuthorService) 
  {
    this.authors = authorService.getAuthor();
  }

  getTitle()
  {
    return this.authors.length + ' Authors';
  }
}
