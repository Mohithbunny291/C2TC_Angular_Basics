import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Basics';

  public classclo = "str";
  public hasError = true;

  public objclas = {
      "stg": this.hasError,
    "str": !this.hasError,
    "sti": this.hasError
  }

  public name = "Mohith";
  public msg ="";

  public greeting="";

  onClick(event: any){
    console.log(event);
    this.greeting = event.type;
  }


  public color = "";

  public colors = ['red', 'green', 'yellow', 'black'];

  displayName=false;

  public hasError1 = !true;
  public isSpecial = true;
  public highlightColor = "red";

  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }

  logmsg(valu:any){
    console.log(valu);
  }

  inputValue: string = '';
  displayValue: string = '';

  counter: number = 0;

  incrementCounter() {
    // Manually update the model (counter) by incrementing its value
    this.counter++;
  }
  updateValue() {
    // Update the model (displayValue) with the input value
    this.displayValue = this.inputValue;
  }

}
