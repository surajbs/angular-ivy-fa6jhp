import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data = 'Royal Challengers Bangalore';

  constructor() {}

  ngOnInit() {
    // Both of the below mentioned method works for Data
    //this.getData();
    this.getDataset();
  }

  getData() {
    // getData - finds the match from data and breaks the given string and prints the output.
    const output = this.data.match(/\b(\w)/g).join('');
    console.log(output);
  }

  getDataset() {
    //getDataset - splits the string by searching with spaces and finds first index char and prints the output
    const output = this.data
      .split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), '');
    console.log(output);
  }
}
