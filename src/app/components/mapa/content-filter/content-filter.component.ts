import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-content-filter',
  templateUrl: './content-filter.component.html',
  styleUrls: ['./content-filter.component.css']
})
export class ContentFilterComponent implements OnInit {

  title = 'map-street';
  checked = false;
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 18000;

  constructor(private sheet: MatBottomSheet) { }

  

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  ngOnInit(): void {
    
  }

  aplicar(){
    this.sheet.dismiss()
  }
  
}
