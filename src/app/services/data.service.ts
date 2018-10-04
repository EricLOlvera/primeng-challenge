import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Item } from '../store/models';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    getItems() {
        return this.http.get('../../assets/mock-data.json')
        .toPromise()
        .then(res => <Item[]> res)
        .then(data => { console.log(data); return data; });
    }
}