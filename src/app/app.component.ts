import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Basics';

  //1. Class Binding
  public classclo = "str";
  public hasError = true;

  public objclas = {
      "stg": this.hasError,
    "str": !this.hasError,
    "sti": this.hasError
  }


  //2. Style Binding
  

  //3. Event Binding
  public greeting="";

  onClick(event: any){
    console.log(event);
    this.greeting = event.type;
  }


  //5. Component Interaction
  public name = "Mohith";
  public msg ="";

  


  public color = "";

  //4. Structural Directives
  public colors = ['red', 'green', 'yellow', 'black'];

  displayName=false;

  public hasError1 = !true;
  public isSpecial = true;
  public highlightColor = "red";

  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }

  //Template Reference
  logmsg(valu:any){
    console.log(valu);
  }

  //Two Way Binding
  inputValue: string = '';
  displayValue: string = '';

  counter: number = 0;

  incrementCounter() {
    // Manually update the model (counter) by incrementing its value
    this.counter++;
  }
  decrementCounter() {
    // Manually update the model (counter) by incrementing its value
    this.counter--;
  }
  updateValue() {
    // Update the model (displayValue) with the input value
    this.displayValue = this.inputValue;
  }

  //Pips
  public namePips = "mohith reddy elluru";
  public person= {
    name: "Mohith",
    college: "Gitam",
    id: 3221232320
  }
  public date = new Date;


  //Services
  


  
}

