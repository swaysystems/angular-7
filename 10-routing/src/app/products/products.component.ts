import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router:Router,private aRoute:ActivatedRoute) { }

  public selectedId;
  products=[
    {id:1,name:"Project 1"},
    {id:2,name:"Project 2"},
    {id:3,name:"Project 3"},
    {id:4,name:"Project 4"},
  ];

  ngOnInit() {

    this.aRoute.paramMap.subscribe((params:ParamMap) =>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    });

  }

  onSelect(product){
    //this.router.navigate(['products',product.id]);
    this.router.navigate([product.id],{relativeTo:this.aRoute});
  }

  isSelected(product){
    return product.id===this.selectedId;
  }

}
