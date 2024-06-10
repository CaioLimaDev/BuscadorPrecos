import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Map, MapStyle, config } from '@maptiler/sdk';

@Component({
  selector: 'app-mapa-mercados',
  standalone: true,
  imports: [],
  templateUrl: './mapa-mercados.component.html',
  styleUrl: './mapa-mercados.component.css'
})
export class MapaMercadosComponent implements OnInit, AfterViewInit, OnDestroy{
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit() {
    config.apiKey = 'F8L5Bw8G2qurkk47gtTc'
  }

  ngAfterViewInit() {
    const initialState = {lng: -49.25577570000001, lat: -16.68037090000001, zoom: 14};

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
