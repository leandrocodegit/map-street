
  import { AfterViewInit, Component } from '@angular/core';
  import * as Leaflet from 'leaflet';
  
  
  declare var ol: any
  
  @Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.css'],
    
    
  })
  export class AreaComponent {
    title = 'map-street';
    checked = false;
    disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 18000;
  
    private mapa: any;
    positions = [-23.7312015, -46.5918171]

    formatLabel(value: number): string {
      if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
      }
  
      return `${value}`;
    }
  
    
  }
  
  