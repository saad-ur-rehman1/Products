import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CreatelistComponent } from './features/Createlist/Createlist.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreatelistComponent,ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product Store';
}