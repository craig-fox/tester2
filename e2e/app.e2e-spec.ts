import { Tester2Page } from './app.po';

describe('tester2 App', () => {
  let page: Tester2Page;

  beforeEach(() => {
    page = new Tester2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
