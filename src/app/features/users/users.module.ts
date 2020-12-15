import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserService } from './services/user.service';
import { UserResolver } from './services/user.resolver';

@NgModule({
    declarations: [UserListComponent, UserInfoComponent],
    imports: [CommonModule],
    providers: [UserService, UserResolver],
})
export class UsersModule {}
