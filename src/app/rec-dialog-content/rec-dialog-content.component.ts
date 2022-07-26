import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../interfaces/dialog-interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rec-dialog-content',
  templateUrl: './rec-dialog-content.component.html',
  styleUrls: ['./rec-dialog-content.component.css']
})
export class RecDialogContentComponent{
  constructor(
    public dialogRef: MatDialogRef<RecDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
}
