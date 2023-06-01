import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AreaComponent } from './components/mapa/area/area.component'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule} from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/mapa/slider/slider.component';
import { FilterComponent } from './components/mapa/filter/filter.component';
import { ContentFilterComponent } from './components/mapa/content-filter/content-filter.component';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ContentMapaComponent } from './components/mapa/content-mapa/content-mapa.component';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgFor, AsyncPipe} from '@angular/common';
import { ContentPesquisaComponent } from './components/mapa/content-pesquisa/content-pesquisa.component';
import { TopoComponent } from './components/menu/topo/topo.component';
import { BannerComponent } from './components/menu/banner/banner.component'; 
import { CaroselComponent } from './components/menu/carosel/carosel.component';
import { GridImageComponent } from './components/menu/grid-image/grid-image.component';
import { MarcasComponent } from './components/menu/marcas/marcas.component';
import { MapaLocalComponent } from './components/menu/mapa-local/mapa-local.component';
import { GaleriaBuscaComponent } from './components/menu/galeria-busca/galeria-busca.component';
import { GaleriaContentComponent } from './components/menu/galeria-content/galeria-content.component';
import { PaginaComponent } from './components/menu/pagina/pagina.component';
import { GaleriaContentDetalhesComponent } from './components/menu/galeria-content-detalhes/galeria-content-detalhes.component';
import { TabelaHorarioComponent } from './components/menu/tabela-horario/tabela-horario.component';
import { LoadComponent } from './components/menu/load/load.component';
import { FormularioComponent } from './components/cadastro/formulario/formulario.component';
import { FormularioFisicaComponent } from './components/cadastro/formulario-fisica/formulario-fisica.component';
import { FormularioJuridicaComponent } from './components/cadastro/formulario-juridica/formulario-juridica.component';



@NgModule({
  declarations: [
    AppComponent, 
    AreaComponent, SliderComponent, FilterComponent, ContentFilterComponent, ContentMapaComponent, ContentPesquisaComponent, TopoComponent, BannerComponent, CaroselComponent, GridImageComponent, MarcasComponent, MapaLocalComponent, GaleriaBuscaComponent, GaleriaContentComponent, PaginaComponent, GaleriaContentDetalhesComponent, TabelaHorarioComponent, LoadComponent, FormularioComponent, FormularioFisicaComponent, FormularioJuridicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    MatCheckboxModule,
    
    MatRadioModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule, 
    MatBottomSheetModule,
    MatAutocompleteModule,
    AsyncPipe
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
