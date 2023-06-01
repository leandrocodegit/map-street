import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AreaComponent } from './components/mapa/area/area.component';
import { SliderComponent } from './components/mapa/slider/slider.component';
import { FilterComponent } from './components/mapa/filter/filter.component';
import { TopoComponent } from './components/menu/topo/topo.component';
import { CaroselComponent } from './components/menu/carosel/carosel.component';
import { GaleriaBuscaComponent } from './components/menu/galeria-busca/galeria-busca.component';
import { PaginaComponent } from './components/menu/pagina/pagina.component';
import { GaleriaContentDetalhesComponent } from './components/menu/galeria-content-detalhes/galeria-content-detalhes.component';
import { LoadComponent } from './components/menu/load/load.component';
import { FormularioComponent } from './components/cadastro/formulario/formulario.component';
import { BannerComponent } from './components/menu/banner/banner.component';

const routes: Routes = [
  {path: '',   component: PaginaComponent},
  {path: 'load',   component: LoadComponent},
  {path: 'cadastro',   component: FormularioComponent},
  {path: 'mapa',   component: AreaComponent},
  {path: 'menu',   component: TopoComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'banner', component: BannerComponent},
  {path: 'mobile', component: FilterComponent},
  {path: 'carosel', component: CaroselComponent},
  {path: 'galeria', component: GaleriaBuscaComponent},
  {path: 'galeria/detalhes', component: GaleriaContentDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
