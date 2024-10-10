import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private apiUrl = 'https://localhost:7139/Products';

    constructor(private http: HttpClient) {}

    // Get all items from the API
    getAllItems(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
   // Add this method to the ItemService
createItem(newItem: any): Observable<any> 

{
    return this.http.post(this.apiUrl, newItem);

}
getItemById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

 // Update item
 updateItem(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data); // Correct method here
  }
}
