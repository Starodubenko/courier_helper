import {DurationPipe} from "./duration.pipe";

describe('Duration pipe tests', () => {

  let durationPipe: DurationPipe;

  beforeAll(() => {
    durationPipe = new DurationPipe();
  });

  it('Pipe should return only minutes', () => {
    let enteringValue = 12;
    let result = durationPipe.transform(enteringValue);
    expect(result).toEqual("12m.");
  });

  it('Pipe should return hours and minutes', () => {
    let enteringValue = 62;
    let result = durationPipe.transform(enteringValue);
    expect(result).toEqual("1h. 2m.");
  });

  it('Pipe should return days and hours, minutes', () => {
    let enteringValue = 1563;
    let result = durationPipe.transform(enteringValue);
    expect(result).toEqual("1d. 2h. 3m.");
  });

  it('Pipe should not return eny value if entering value in not a number', () => {
    // let enteringValue = "1563";
    // let result = durationPipe.transform(enteringValue);
    // expect(result).toEqual("");
  });
});
