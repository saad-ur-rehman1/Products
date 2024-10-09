import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Createlist',
  templateUrl: './Createitem.component.html',
  styleUrls: ['./Createitem.component.css'],
  standalone:true,
  imports:[FormsModule]
})
export class CreateitemComponent {
  newItem: any = {
    title: '',
    description: '',
    price: 0,
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  };
  constructor(private itemService: ItemService) { }

  onSubmit() {
    debugger; 
    this.itemService.createItem(this.newItem).subscribe(
      (response: any) => {
        console.log('Item created successfully:', response);  // Full item details
        // Now you can directly work with the full item details in response
      },
      (error) => {
        console.error('Error creating item', error);
      }
    );
  }
  
}
