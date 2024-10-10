import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../../services/item-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  imports:[FormsModule]
})
export class EditItemComponent implements OnInit {
  itemId: string | null = null; // Item ID to fetch
  item: any = { title: '', description: '', price: 0, image: '' }; // Item data

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id'); // Get item ID from route parameters
    this.fetchItem(); // Fetch item details
  }

  fetchItem() {
    if (this.itemId) {
      this.itemService.getItemById(this.itemId).subscribe({
        next: (item) => {
          this.item = item; // Set the item data for editing
        },
        error: (err) => {
          console.error('Error fetching item:', err);
        },
      });
    }
  }

  onUpdate() {
    if (this.itemId) {
      this.itemService.updateItem(this.itemId, this.item).subscribe({
        next: () => {
          alert('Item updated successfully!');
          this.router.navigate(['/item']); // Navigate back to item list
        },
        error: (err) => {
          console.error('Error updating item:', err);
        },
      });
    }
  }
}
