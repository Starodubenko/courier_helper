import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {
  private day: number = 60 * 24;
  private hour: number = 60;
  transform(duration: number, additionalParameters?: string){
    let days: number = Math.floor(duration / this.day);
    let hours: number = Math.floor((duration - days * this.day) / this.hour);
    let minutes: number = duration - (days * this.day + hours * this.hour);
    let result = "";
    result += days > 0 ? days + "d. ": "";
    result += hours > 0 ? hours + "h. ": "";
    result += minutes > 0 ? minutes + "m.": "";
    return result;
  }
}
