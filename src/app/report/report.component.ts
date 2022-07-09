import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
// import { saveAs } from 'file-saver';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  router: any;

  constructor(private productService : ProductService) { }

  // pdf(){
  //   this.productService.pdf().subscribe((response: any) => {
  //     const blob = new Blob([response], { type: 'string' });
  //     const url= window.URL.createObjectURL(blob);     
  //     const link = document.createElement('a');
  //     document.body.appendChild(link);
  //     link.href = url;
  //     link.download = 'Product_report.pdf';
  //     link.click();
  //   }
     
  //     );}



     

  ngOnInit(): void {
  }
  selectedGroup: any;
  getVal() {
    //console.log(this.selectedGroup); // returns selected object
    //console.log(this.selectedGroup.id); // returns selected option's id
    //console.log(this.selectedGroup.name); // returns selected option's name

    this.productService.getVal().subscribe(
      (data:any) => {
        console.log(this.selectedGroup.id);
      if(data.errorCode === '200'){
         
          this.router.navigate(['dashboard']);
        }
       
      
         
      });
    
  }
  
  // this.productService.findAll().subscribe(data => {
  //   this.rows = data;
  //   console.log(this.productsList);
  //   this.dataSource =  new MatTableDataSource(data)
    
  // }); 

  groups = [{
      "id": 1,
      "name": "Download PDF",
      "items": "pdf"
  },
  {
      "id": 2,
      "name": "Download Excel",
      "items": "excel"
  },
  {
      "id": 3,
      "name": "Download CSV",
      "items": "csv"
  }];


  // downloadFile(filename: string): void {
  //   this.productService
  //     .download(filename)
  //     .subscribe(blob => saveAs(blob, filename));
  // }
}
