import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AlphabeticalSortPipe } from './pipes/alphabetical-sort.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [UserProfileComponent, AlphabeticalSortPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [CommonModule, UserProfileComponent, AlphabeticalSortPipe]
})

export class SharedModule { }
