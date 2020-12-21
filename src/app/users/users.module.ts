import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    UsersRoutingModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
