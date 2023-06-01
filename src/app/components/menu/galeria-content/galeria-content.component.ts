import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria-content',
  templateUrl: './galeria-content.component.html',
  styleUrls: ['./galeria-content.component.css']
})
export class GaleriaContentComponent implements OnInit {

  @Input() nameButton = "Ver no mapa";
  @Input() viewTooltip = false;
  @Input() viewBottom = true;

  constructor() { }

  ngOnInit(): void {
  }

}
