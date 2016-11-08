
import {AuthorsPipe} from "./authors.pipe";
import {SelectOption} from "../components/selectAuthors/selectOption.model";

describe('Authors list candidates pipe tests', () => {

  let selectedAuthors, authors;

  beforeAll(() => {
    selectedAuthors = [3,4,5];
    authors = [
      new SelectOption(1,""),
      new SelectOption(2,""),
      new SelectOption(3,""),
      new SelectOption(4,""),
      new SelectOption(5,""),
      new SelectOption(6,""),
      new SelectOption(7,"")
    ];
  });

  it('Pipe should return only selected authors', () => {
    let authorsPipe: AuthorsPipe = new AuthorsPipe();
    let result = authorsPipe.transform(authors, selectedAuthors, "positive");
    console.log(result);
    expect(result).toContain(new SelectOption(1,""));
    expect(result).toContain(new SelectOption(2,""));
    expect(result).not.toContain(new SelectOption(3,""));
    expect(result).not.toContain(new SelectOption(4,""));
    expect(result).not.toContain(new SelectOption(5,""));
    expect(result).toContain(new SelectOption(6,""));
    expect(result).toContain(new SelectOption(7,""));
  });

  it('Pipe should return only not selected authors', () => {
    let authorsPipe: AuthorsPipe = new AuthorsPipe();
    let result = authorsPipe.transform(authors, selectedAuthors, "negative");
    expect(result).not.toContain(new SelectOption(1,""));
    expect(result).not.toContain(new SelectOption(2,""));
    expect(result).toContain(new SelectOption(3,""));
    expect(result).toContain(new SelectOption(4,""));
    expect(result).toContain(new SelectOption(5,""));
    expect(result).not.toContain(new SelectOption(6,""));
    expect(result).not.toContain(new SelectOption(7,""));
  });
});
