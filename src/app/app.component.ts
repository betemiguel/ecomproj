
import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'ecomproj';
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt ;
  faDoorClosed = faDoorClosed;
  faUser = faUser;
  faShoppingBasket = faShoppingBasket;
  
 
 

}

