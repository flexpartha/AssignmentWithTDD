import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentWithTDD';

   pretestItems = ['Pretest Item 1', 'Pretest Item 2', 'Pretest Item 3', 'Pretest Item 4'];
   operationalItems = ['Operational Item 1', 'Operational Item 2', 'Operational Item 3', 'Operational Item 4', 'Operational Item 5', 'Operational Item 6'];

   firstTwoItems = this.getRandomItems(this.pretestItems, 2);
   
   remainingPretestItems = this.pretestItems.filter(item => !this.firstTwoItems.includes(item));

   remainingItems = this.remainingPretestItems.concat(this.operationalItems);

   nextEightItems = this.getRandomItems(this.remainingItems, 8);

   randomizedItems = this.firstTwoItems.concat(this.nextEightItems);

   getRandomItems(array: any[], count: any) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
