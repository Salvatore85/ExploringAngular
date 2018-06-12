import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, type: string, places: number): string {
    //set defaults
    type = type || 'kelvin';
    places = places || 2;
    let temp: number;

    switch (type) {
      case 'celsius':
        temp = value - 273.15;
        return temp.toFixed(places) + "\u00B0C";
      case 'fahrenheit':
        temp = (value * 9 / 5) - 459.67;
        return temp.toFixed(places) + "\u00B0F";
      default:
        return value.toFixed(places) + "K";
    }
  }

}
