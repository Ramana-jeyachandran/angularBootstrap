import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const states = ['Tamilnadu','Kerala','karnataka','andhra','bihar','uttar pradhesh'];

@Component({
  selector: 'app-typehead',
  templateUrl: './typehead.component.html',
  styles: ['typehead.component.css']
})
export class TypeheadComponent {
   model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}