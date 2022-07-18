import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Services/customer.service';
import { CustomersaveComponent } from './../Customer/customersave/customersave.component';

@Component({
  selector: 'app-binarytree',
  templateUrl: './binarytree.component.html',
  styleUrls: ['./binarytree.component.scss']
})
export class BinarytreeComponent implements OnInit {

  constructor(private CustomerService : CustomerService ,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  MakeChangeevent(data:any) {
    console.log(data)
    const dialogRef = this.dialog.open(CustomersaveComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
