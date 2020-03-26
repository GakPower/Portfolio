// import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
//
// @Component({
//   selector: 'app-field',
//   templateUrl: './field.component.html',
//   styleUrls: ['./field.component.scss']
// })
// export class FieldComponent implements OnInit, OnChanges {
//
//   @Input() type: string;
//   @Input() placeholder: string;
//   @Input() textarea = false;
//
//   @Input() value = '';
//   @Output() valueChange = new EventEmitter();
//
//   @Input() animate = false;
//
//   hasEverBeenFocused = false;
//   constructor() {
//   }
//
//   onFocus() {
//     if (!this.hasEverBeenFocused) {
//       this.hasEverBeenFocused = true;
//     }
//   }
//
//   ngOnInit(): void {
//   }
//
//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes.value && changes.value.previousValue && !changes.value.currentValue) {
//       this.hasEverBeenFocused = false;
//     }
//   }
//
// }

import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnChanges {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value = '';
  @Input() animate = false;

  @Output() valueChange = new EventEmitter();

  hasEverBeenFocused = false;
  constructor() {}

  onFocus() {
    if (!this.hasEverBeenFocused) {
      this.hasEverBeenFocused = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && changes.value.previousValue && !changes.value.currentValue) {
      this.hasEverBeenFocused = false;
    }
  }
}
