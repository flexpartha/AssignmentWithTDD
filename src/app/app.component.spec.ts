import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
  }));

  it("should return an array with the same length as the input array of pretestItems", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.pretestItems;
    expect(result.length).toEqual(app.pretestItems.length);
  });

  it("should return an array with the same length as the input array of operationalItems", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.operationalItems;
    expect(result.length).toEqual(app.operationalItems.length);
  });

  it("should select 2 pretest items and place them at the beginning of the array", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const resultfirst2item = app.firstTwoItems;
    const resnextEightItems = app.nextEightItems;
    const finalResult = resultfirst2item.concat(resnextEightItems);
    const radomItem = app.randomizedItems ;
    expect(finalResult).toEqual(radomItem);
  });

  it("array should shuffle in random way", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let testlet = [
      'Pretest Item 1', 'Pretest Item 2', 'Pretest Item 3', 
      'Operational Item 1', 'Operational Item 2', 'Operational Item 3', 'Operational Item 4', 'Operational Item 5', 'Operational Item 6',
      'Pretest Item 4'
    ];
    const result = app.randomizedItems;
    expect(result).not.toEqual(testlet);
    expect(result.length).toEqual(testlet.length);
    
  });

  it("should shuffle array are truely  in random way", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let testlet = [
      'Pretest Item 1', 'Pretest Item 2', 'Pretest Item 3', 
      'Operational Item 1', 'Operational Item 2', 'Operational Item 3', 'Operational Item 4', 'Operational Item 5', 'Operational Item 6',
      'Pretest Item 4'
    ];
    expect(testlet).not.toEqual(app.randomizedItems)
  })
});
