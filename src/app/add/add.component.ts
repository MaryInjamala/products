import { Component, ElementRef, OnInit, ViewChild , Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';



// import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


interface Price {
  value: string;
  viewValue: string;
}

@Component({ 
    selector: 'add',
    templateUrl: './add.component.html' ,
    styleUrls: ['./add.component.css']

})
export class AddComponent implements OnInit{
  toppings: FormGroup;
  // checked = false;
  // indeterminate = false;
  // labelPosition: 'before' | 'after' = 'after';
  // disabled = false;
  title = 'angular-key-press-example';
  // Only Integer Numbers
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  

  //Multiple select
  prod = new FormControl('');
  prodList: string[] = ['New mobile', 'New product', 'Amazing features', 'New version', 'New Themes', 'Color'];




 


////
    productId: any;
    productName:  any;
    productDesc: any;
    productPrice: any;
    productQuantity: any;
    productType: any;
    Productmul: any;
    upload: any;
    check: any;
    checkbox: any;
    
 
    

  constructor(
      private productService : ProductService,
      private router: Router,
      fb: FormBuilder
      ) {
        this.toppings = fb.group({
          pepperoni: false,
          extracheese: false,
          mushroom: false,
        });
    }
   
 

  ngOnInit(): void {
    
  }
  //quantity
// quantity:number=1;
// i=1
// pluse(){
//   if(this.i !=5){
//     this.i++;
//     this.quantity=this.i;
//   }
// }


//quantity
quantity:number= 1;
  
plus()
{
 this.quantity = this.quantity+1;
}
minus()
{
  if(this.quantity != 0)
{
 this.quantity = this.quantity-1;
}

}


  // createNewProduct
  createProduct(){
    let newProduct = [{
      productId: this.productId,
      productName: this.productName,
      productDesc: this.productDesc,
      productPrice: this.productPrice,
      productQuantity: this.productQuantity,
      productType: this.productType,
      // upload: this.upload,
      // toppings: this.toppings,
      // check: this.check
    }]
   
   
    this.productService.save(newProduct).subscribe(data => {
      console.log("success");
    });
    this.router.navigate(['/product']); 
    
  }
  selected = '';
  price: Price[] = [
    {value: '15000-20000', viewValue: '15000-20000'},
    {value: '20000-30000', viewValue: '20000-30000'},
    {value: '30000-50000', viewValue: '30000-50000'},
  ];
  
}









  

