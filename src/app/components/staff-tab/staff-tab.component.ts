import { Component, OnInit } from '@angular/core';
import { Item, AppState } from '../../store/models';
import { Store } from '@ngrx/store';
import * as ModalActions from '../../store/actions/modal.actions';
import * as ItemActions from '../../store/actions/item.actions';

@Component({
  selector: 'app-staff-tab',
  templateUrl: './staff-tab.component.html',
  styleUrls: ['./staff-tab.component.scss']
})
export class StaffTabComponent implements OnInit {
  items: Item[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select( state => state.items ).subscribe (items => this.items = [...items] );
  }

  openDetails(item: Item) {
    this.store.dispatch({type: ModalActions.ActionTypes.OPEN_WITH, payload: {item: {...item}}});
  }

  addItem() {
    this.store.dispatch({type: ItemActions.ActionTypes.ADD_ONE});
  }
}
