import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../store/models';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  items: Item[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItems().then(data => { this.items = data; console.log(data); });
  }

}
