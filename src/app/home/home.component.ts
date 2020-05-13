import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogChoiceComponent } from '../dialog-choice/dialog-choice.component';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchFrom:FormGroup;

  constructor(public dialog: MatDialog,private fb:FormBuilder) { }
   openDialog()
   {
     this.dialog.open(DialogChoiceComponent);
     //MatDialogRef.afterClosed().subscribe
   }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.searchFrom=this.fb.group({
      whereInput:['',Validators.required],
      dateFrom:['',Validators.required],
      dateTo:['',Validators.required],
      adultsChooser:['',Validators.required],
      childChooser:['',Validators.required],

    });

  }
  onSubmit(){
    console.log('searchFrom',this.searchFrom.value);
  }

}
