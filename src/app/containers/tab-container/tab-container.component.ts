import { Component, OnInit } from '@angular/core';
import { Item } from '../../store/models';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/item.reducer';


@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  items: Item[];

  constructor(private store: Store<{ items: State }>) { }

  ngOnInit() {
    this.store.select( state => state.items ).subscribe (items => this.items = items.itemlist );
  }

}
