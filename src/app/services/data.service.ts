import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Item } from '../store/models';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    getItems$(): Observable<Item[]> {
        return this.http.get<Item[]>('../../assets/mock-data.json');
    }
}
