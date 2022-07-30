export interface DialogData {
    cardno: string;
    firstName: string;
    lastName: string;
    expDate: string;
    cvvNo: string;

    sumRUB: number;
    sumUZS: number;
    
    rName: string;
    date: number;
  }
  
  export class GarbageData {
    CurRate : number;
    UserName : string;

    constructor(){
      this.CurRate = 181;
      this.UserName = "Glister";
    }
  }