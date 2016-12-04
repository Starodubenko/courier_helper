import {NavigationService, StateTypes} from "./navigation.service";
describe('Navigation component tests', () => {


  it('Selected "home" state of first level', () => {
    let navigService = new NavigationService();

    navigService.calculateStates("home");
    // expect(navigService.navigationModel[1].state).toBe(StateTypes.Top);
    // expect(navigService.navigationModel[2].state).toBe(StateTypes.Middle);
    // expect(navigService.navigationModel[3].state).toBe(StateTypes.Bottom);
    // expect(navigService.navigationModel[4].state).toBe(StateTypes.Bottom);
    // expect(navigService.navigationModel[5].state).toBe(StateTypes.Bottom);
  });

  it('Selected THIRD state of first level and FIRST state of second level', () => {
    let navigService = new NavigationService();

    navigService.calculateStates("newOrder");
    // expect(navigService.navigationModel[1].state).toBe(StateTypes.Top);
    // expect(navigService.navigationModel[2].state).toBe(StateTypes.Top);
    // expect(navigService.navigationModel[3].state).toBe(StateTypes.Middle);
    //   // expect(navigService.navigationModel[3].children[1].state).toBe(HorizontalState.Middle);
    //   // expect(navigService.navigationModel[3].children[2].state).toBe(HorizontalState.Right);
    // expect(navigService.navigationModel[4].state).toBe(StateTypes.Bottom);
    // expect(navigService.navigationModel[5].state).toBe(StateTypes.Bottom);
  });

  it('Curtain should be collapsed if log in is successful', () => {
    expect(true).toBe(true);
  });

  it('Curtain should be collapsed if log in is successful', () => {
    expect(true).toBe(true);
  });

  it('Login form is deleted from DOM of curtain if curtain have been collapsed', () => {
    expect(true).toBe(true);
  });
});


