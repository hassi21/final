import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [MatCardModule,MatSelectModule,MatProgressSpinnerModule,MatProgressBarModule,MatSnackBarModule,MatDialogModule,MatTooltipModule,MatIconModule,MatBadgeModule,MatRadioModule,MatInputModule,MatButtonModule, MatCheckboxModule, MatToolbarModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule],
    exports: [MatCardModule,MatSelectModule,MatProgressSpinnerModule,MatProgressBarModule,MatSnackBarModule,MatDialogModule,MatTooltipModule,MatIconModule,MatBadgeModule,MatRadioModule,MatInputModule,MatButtonModule, MatCheckboxModule, MatToolbarModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule],

})
export class MaterialModule{}