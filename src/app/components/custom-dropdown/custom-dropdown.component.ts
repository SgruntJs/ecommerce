import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";

export interface Options {
  value: string;
  isActive?: boolean;
}

@Component({
  selector: "custom-dropdown",
  templateUrl: "./custom-dropdown.component.html",
  styleUrls: ["./custom-dropdown.component.scss"],
})
export class CustomDropdownComponent implements OnInit, AfterViewInit {


  @ViewChild('list', { static: false }) list!: ElementRef;
  display = false;

  public testForm!: NgForm;
  public isDropDownOpen: boolean = false;
  public dropdown: string = "Spedisci all'estero";

  @Input("options") options!: Options[];
  h= 0;
  setHeight = '';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  show() {
    this.display = true;
    this.changeDetectorRef.detectChanges();
    const height = this.list.nativeElement.offsetHeight;
    const windowHeight = window.innerHeight;
    this.h = height/2;
    this.setHeight = (windowHeight/2 - this.h/2)+ 'px';
    console.log('height', windowHeight/2 - this.h/2);
}

  ngOnInit() {
    this.options.forEach((opt) => {
      opt.isActive = false;
    });
    this.options.splice(0, 0, { value: "", isActive: true });

  }
  ngAfterViewInit() {
   
  }
  ngOnChanges() {}



  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
    this.show();
    // https://stackoverflow.com/questions/39366981/viewchild-in-ngif
  }

  updateControl(data: any) {
    this.dropdown = data;
  }

  selectOption(evt: any, optionIndex: number) {
    this.options.forEach((opt: any, index: number) => {
      opt.isActive = optionIndex === index;
    });
    this.dropdown = evt.target.innerHTML;
    this.isDropDownOpen = false;
    
  }
}
