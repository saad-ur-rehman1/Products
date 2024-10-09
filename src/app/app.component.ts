import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ItemListComponent } from './features/item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item-service';
import { CreateitemComponent } from './features/Createitem/Createitem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateitemComponent,ItemListComponent,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent 
 {


  }
  

  

 
    
  

