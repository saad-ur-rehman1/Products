import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private apiUrl = 'https://fakestoreapi.com/products'; // Correct API endpoint for products

    constructor(private http: HttpClient) {}

    // Get all items from the API
    getAllItems(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
