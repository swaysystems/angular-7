import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  public productId;

  constructor(private aRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    /*let id=this.aRoute.snapshot.paramMap.get('id');
    this.productId=parseInt(id);*/

    this.aRoute.paramMap.subscribe((params:ParamMap) =>{
      let id=parseInt(params.get('id'));
      this.productId=id;
    });
  }

  goPrevious(){

    this.productId=this.productId - 1;
    this.router.navigate(['/products',this.productId]);

  }
  goNext(){
    this.productId=this.productId + 1 ;
    this.router.navigate(['/products',this.productId]);
  }

  goBack(){ 
    this.router.navigate(['/products',{id:this.productId,test:"TestVal"}]);
  }

}
