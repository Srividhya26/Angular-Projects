import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books';

  constructor()
  {
    localStorage.setItem('myBooks',JSON.stringify(this.books));

    let data = localStorage.getItem('books');
    if (data) 
    {
      this.books = JSON.parse(data);
    }
  }

  books = [
    {
      isbn : '978-3-16-148',
      title : 'The Theory of Everything',
      author : 'Stephen Hawking',
      price : 'Rs 200',
      description : 'This book presents the most complex theories about black holes, expanding the universe, the origin of everything, the direction of time, and the big bang'
    },
    {
      isbn : '85-359-0277-5',
      title : 'C# programming for Absolute Beginners',
      author : 'Radek Vystavel',
      price : 'Rs 500',
      description : 'Become familiar with basic programming constructs such as statements, types, variables, conditions, and loops.'
    },
    {
      isbn : '93-86954-21-4',
      title : 'The Jungle Book',
      author : 'Rudyard Kipling',
      price : 'Rs 300',
      description : 'The book describes the social life of the wolf pack and, more fancifully, the justice and natural order of life in the jungle.'
    }
  ]

  onBookCreated(newBook : {isbn : string,title : string,author : string,price : string,description:string})
  {
    this.books.push(newBook);
  }

  

}
