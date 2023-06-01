import { Component, OnInit, Input } from '@angular/core';
import { startWith, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-content-pesquisa',
  templateUrl: './content-pesquisa.component.html',
  styleUrls: ['./content-pesquisa.component.css']
})
export class ContentPesquisaComponent implements OnInit {

  @Input() max_width: string = "320px"

  constructor() { }
 
  control = new FormControl('');
  streets: string[] = ['Praça da sé', 'Avenida interlados', 'Museus', 'Viadudo do chá'];
  filteredStreets!: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


}
