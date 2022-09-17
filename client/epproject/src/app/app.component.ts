import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'product';

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAykgcMNoaz2UDyG1fzxetv1r1Ouxodao0'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map")!, {
        center: { lat: 35.006062, lng: -80.845637 },
        zoom: 15
      })
    })
  }

}
