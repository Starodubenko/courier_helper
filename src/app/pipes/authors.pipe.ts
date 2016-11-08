import {PipeTransform, Pipe} from "@angular/core";
import {SelectOption} from "../components/selectAuthors/selectOption.model";

@Pipe({
  name: 'authorsPipe'
})
export class AuthorsPipe implements PipeTransform {

  transform(authors: SelectOption[], selectedAuthorsIds: number[], type: string){
    if (type == "positive"){
      return authors.filter(function (item) {
        return selectedAuthorsIds.indexOf(item.id) == -1;
      })
    } else if (type == "negative"){
      return authors.filter(function (item) {
        return selectedAuthorsIds.indexOf(item.id) != -1;
      })
    }
  }
}
