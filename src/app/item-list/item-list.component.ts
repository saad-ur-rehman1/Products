import { Component } from '@angular/core';
import { ItemService } from '../../services/item-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  public itemList: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getAllItems();
  }


  getAllItems() {
    this.itemService.getAllItems().subscribe({
      next: (items: any) => {
        this.itemList = items;
        console.log(items);
      },
      error: (err: any) => {
        console.log('Error:', err.message);
      }
    });
  }
}

