import { Angular2Dec10Page } from './app.po';

describe('angular2-dec10 App', function() {
  let page: Angular2Dec10Page;

  beforeEach(() => {
    page = new Angular2Dec10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
