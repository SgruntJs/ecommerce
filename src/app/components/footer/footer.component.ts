import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  ScrollIntoView(elem: string) {
    console.log(elem);
   const el = document.querySelector(elem);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
