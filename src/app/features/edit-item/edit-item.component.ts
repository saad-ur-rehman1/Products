import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../../services/item-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  imports:[FormsModule]
})
export class EditItemComponent {
  public item: any = {};
  public itemId: string | null = null;

  @Output() itemUpdated = new EventEmitter<void>();

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {
    // Initialize your item here, e.g., by fetching it from the API
  }

  onUpdate() {
    if (this.itemId) { // Check if itemId is not null
      this.itemService.updateItem(this.itemId, this.item).subscribe({
        next: () => {
          alert('Item updated successfully!');
          this.itemUpdated.emit(); // Emit an event when the item is updated
          this.router.navigate(['/item']); // Navigate back to item list
        },
        error: (err: any) => {
          console.error('Error updating item:', err);
        },
      });
    } else {
      alert('Item ID is missing. Cannot update the item.');
    }
  }
  
}
