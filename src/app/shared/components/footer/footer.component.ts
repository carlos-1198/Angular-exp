import { Component, OnInit } from '@angular/core';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGmail = faGooglePlus;
  faEmail = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
