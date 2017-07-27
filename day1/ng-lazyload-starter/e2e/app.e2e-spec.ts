import { NgLazyloadStarterPage } from './app.po';

describe('ng-lazyload-starter App', () => {
  let page: NgLazyloadStarterPage;

  beforeEach(() => {
    page = new NgLazyloadStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
