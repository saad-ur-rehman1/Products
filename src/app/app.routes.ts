import { Routes } from '@angular/router';
import { ItemListComponent } from './features/item-list/item-list.component';
import { CreateitemComponent } from './features/Createitem/Createitem.component';
import { EditItemComponent } from './features/edit-item/edit-item.component';

export const routes: Routes = [
    { path: 'item', component: ItemListComponent },
    { path: 'createitem', component: CreateitemComponent },
    { path: 'edititem/:id', component: EditItemComponent }
];
