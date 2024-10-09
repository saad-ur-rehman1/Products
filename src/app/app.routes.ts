import { Routes } from '@angular/router';
import { ItemListComponent } from './features/item-list/item-list.component';
import { CreateitemComponent } from './features/Createitem/Createitem.component';
import { EditItemComponent } from './edit-item/edit-item.component';

export const routes: Routes = [
    { path: 'item', component: ItemListComponent },
    { path: 'createitem', component: CreateitemComponent },
    { path: 'edit-item/:id', component: EditItemComponent }, // Add this route for editing items
];
