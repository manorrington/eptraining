import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void { //this is where you run actually code

    const form = document.querySelector('.new-item-form') as HTMLFormElement;
    console.log(form.children);
    
    // user inputs
    const type = document.querySelector('#type') as HTMLInputElement; // # is grabbing the id from the element
    const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
    const details = document.querySelector('#details') as HTMLInputElement;
    const amount = document.querySelector('#amount') as HTMLInputElement;
    
    form.addEventListener('submit', (e: Event) => {
      e.preventDefault(); // prevents page refresh
    
      console.log( // .value grabs the input
        type.value, 
        tofrom.value, 
        details.value, 
        amount.value
      );
    });
  }

}

