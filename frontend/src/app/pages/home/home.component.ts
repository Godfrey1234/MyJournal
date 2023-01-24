import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 


 
  value = 0 ;

  constructor() { }

  ngOnInit(): void {
    
    
  }

  onNext(){
    this.value = this.value + 1
   
 
  }

  onSkip(){

     this.value = this.value + 2


  }

  onPrev(){

    this.value = this.value - 1
     

  }

  onSubmit(){
    
  }

}
