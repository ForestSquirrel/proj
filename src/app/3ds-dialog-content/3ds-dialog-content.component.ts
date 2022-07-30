import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../interfaces/dialog-interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-3ds-dialog-content',
  templateUrl: './3ds-dialog-content.component.html',
  styleUrls: ['./3ds-dialog-content.component.css']
})
export class DSDialogContentComponent{
  submited = true;
  constructor(
    public dialogRef: MatDialogRef<DSDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
