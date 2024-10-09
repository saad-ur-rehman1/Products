import { Component } from '@angular/core';
import { ItemService } from '../../../services/item-service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; // Import NgxPaginationModule
import { FormsModule } from '@angular/forms'; // For search input
import { Router } from '@angular/router';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule,EditItemComponent], // Include NgxPaginationModule
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  public itemList: any[] = [];
  public filteredItemList: any[] = [];
  public searchTerm: string = '';
  public currentPage: number = 1; // Current page for pagination
  public itemsPerPage: number = 10; // Items per page

  constructor(private itemService: ItemService,private router: Router) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe({
      next: (items: any) => {
        this.itemList = items;
        this.filteredItemList = items; // Initially display all items
      },
      error: (err: any) => {
        console.log('Error:', err.message);
      }
    });
  }
 editItem(itemId: string): void {
    this.router.navigate(['/edit-item', itemId]); // Navigate to EditItemComponent
  }
  onDelete(index: number): void {
    const confirmed = confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      this.filteredItemList.splice(index, 1);
      this.itemList.splice(index, 1);
    }
  }

  filterItems() {
    if (this.searchTerm.trim() === '') {
      this.filteredItemList = this.itemList;
    } else {
      this.filteredItemList = this.itemList.filter(item =>
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset to the first page on new search
  }

  
}

