import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  @Input() books : { isbn: string,title: string, author: string, price: string,description : string} ;

  constructor() { }

  ngOnInit(): void {
  }
  
  isCollapsed : boolean = true ;

  toggleCollapse()
  {
    this.isCollapsed = !this.isCollapsed;
  }
  
}
