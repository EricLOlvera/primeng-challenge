import { Component, OnInit, OnChanges } from '@angular/core';
import { AppState, ModalState } from '../../store/models';
import { Store } from '@ngrx/store';
import * as ModalActions from '../../store/actions/modal.actions';
import * as ItemActions from '../../store/actions/item.actions';

@Component({
  selector: 'app-item-details-modal',
  templateUrl: './item-details-modal.component.html',
  styleUrls: ['./item-details-modal.component.scss']
})

export class ItemDetailsModalComponent implements OnInit {
  state: ModalState;

  roles: {
    label: string;
    value: string;
  }[];
  boolOpt: {
    label: string;
    value: boolean;
  }[];

  constructor(private store: Store<AppState> ) {
    this.roles = [
      {label: 'MD', value: 'MD'},
      {label: 'RN', value: 'RN'},
      {label: 'AGENT', value: 'AGENT'}
    ];

    this.boolOpt = [
      {label: 'Yes', value: true },
      {label: 'No', value: false }
    ];
  }

  ngOnInit() {
    this.store.select( state => state.modal ).subscribe (modal => this.state = JSON.parse(JSON.stringify(modal)));
  }

  closeModal() {
    this.store.dispatch({type: ModalActions.ActionTypes.CLOSE});
    this.store.dispatch({type: ModalActions.ActionTypes.SET_DIRTY, payload: {isDirty: false}});
  }

  updateItem() {
    this.store.dispatch({type: ModalActions.ActionTypes.UPDATE_ITEM, payload: {item: this.state.content}});
    if (!this.state.isDirty) {
      this.store.dispatch({type: ModalActions.ActionTypes.SET_DIRTY, payload: {isDirty: true}});
    }
  }

  save() {
    this.store.dispatch({type: ItemActions.ActionTypes.UPDATE_ONE, payload: {item: this.state.content}});
    close();
  }

  toggleActive() {
    this.state.content.active = !this.state.content.active;
    this.updateItem();
  }
}
