import { AfterViewInit, Component } from '@angular/core';
import * as Leaflet from 'leaflet';

declare var ol: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'map-street';

  private mapa: any;
  positions = [-23.7312015, -46.5918171]

  private initMap(): void {
    this.mapa = Leaflet.map('map', {
      center: [-23.7312015, -46.5918171],
      zoom: 16
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 8,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

   

   

     
     //pass the options to marker

    
      var icon  = Leaflet.icon({
        iconUrl:'/assets/icons/gps-azul.png',
        iconSize:[50,50],
        iconAnchor: [17, 46],
        popupAnchor: [3, 46]
       });
      

      let iconOptions = {
        title:'Leandro', 
        draggable:true,
        icon: icon,
        opacity: 0.8
       }
      let marker = new Leaflet.Marker([-23.7312015, -46.5918171] , iconOptions);
 
       var html = 
       "<div class=\"container\">" 
       + "<div class=\"container-item\" style=\"width:25%\">"
       + "<img src=\"/assets/m1.webp\">"
       + "</div>"
       + "<div class=\"container-item\" style=\"width:75%\">" 
       + "<h2>Teatro municipal</h2>" 
       + "<span>Teatro municipal</span>" 
       + "<hr></hr>"
       + "</div>" 
       + "<div class=\"container-item\">" 
       + "<p>Lorem ipsum dolor sit amet. Cum assumenda itaque et earum molestiae in architecto consectetur ut omnis.</p></br>"
       + "</div>";
 
      marker.addTo(this.mapa);
      marker.bindPopup(html);
 
    
     tiles.addTo(this.mapa);
     
     var colorGreen = {
      
      "color": "#28be00", 

  };


  var colorRed = {      
    "color": "#a200ff"
};

   
     var geojsonFeature1 =  {
      "type": "FeatureCollection",
      "features": [        
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [
                  -46.57368205017025,
                  -23.711578148236143
                ],
                [
                  -46.573577023944125,
                  -23.720039958493658
                ],
                [
                  -46.57410215507383,
                  -23.723261071521605
                ],
                [
                  -46.57320943215311,
                  -23.724270657732504
                ],
                [
                  -46.57121393385833,
                  -23.723789903369266
                ],
                [
                  -46.56764304217242,
                  -23.721914944411978
                ],
                [
                  -46.56370455869654,
                  -23.720616880109162
                ],
                [
                  -46.558610786733,
                  -23.718068790381466
                ],
                [
                  -46.560973876818736,
                  -23.715424493682193
                ],
                [
                  -46.56165654728821,
                  -23.711193507454183
                ],
                [
                  -46.56165654728821,
                  -23.708789476869
                ],
                [
                  -46.5648598471831,
                  -23.711481988146744
                ],
                [
                  -46.57368205017025,
                  -23.711578148236143
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": 1
        }]};
        var geojsonFeature2 =  {
          "type": "FeatureCollection",
          "features": [ 
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "coordinates": [
              [
                [
                  -46.588377634800594,
                  -23.725146179060516
                ],
                [
                  -46.58680224140937,
                  -23.73557804200621
                ],
                [
                  -46.5851743349067,
                  -23.735001186603554
                ],
                [
                  -46.58344140217682,
                  -23.73519347202182
                ],
                [
                  -46.57987051049088,
                  -23.73538575715638
                ],
                [
                  -46.578085064648405,
                  -23.728847903418455
                ],
                [
                  -46.57488176475448,
                  -23.728030648641024
                ],
                [
                  -46.57498679098063,
                  -23.72543462889091
                ],
                [
                  -46.57598454146469,
                  -23.724136599863783
                ],
                [
                  -46.579458492602186,
                  -23.72398220532763
                ],
                [
                  -46.580298702410346,
                  -23.723886054383925
                ],
                [
                  -46.58654776285945,
                  -23.723261071521605
                ],
                [
                  -46.588377634800594,
                  -23.725146179060516
                ]
              ]
            ],
            "type": "Polygon"
          }
        }
      ]
    };

    html =
    "<div class=\"container\">"
  + "<div class=\"container-item\" style=\"width:100%;font-size:24px;color: #3dd5d1;\">"
  + "<p>Região sul</p>"
  + "<span>Disponivel: <b>Noturno e diurno</b></span>"
  + "<hr/>"
  + "</div> "
  + "<div class=\"container-item\" style=\"width:40%; heigth:80px\">"
  + "<p>Locações:</p>"
  + "</div>"
  + "<div class=\"container-item\" style=\"width:60%; heigth:80px;text-align:right\">"
  + "<p>0</p>"
  + "</div>"
   
   var p1 = Leaflet.geoJSON(geojsonFeature1 as any, {
      style: colorGreen
  }).addTo(this.mapa);

  p1.bindPopup(html)

 var p2 = Leaflet.geoJSON(geojsonFeature2 as any, {
    style: colorRed
}).addTo(this.mapa);

p2.bindPopup(html)
  
 

 

  }

 
  ngAfterViewInit(): void {  
  }

  constructor(){}

}

