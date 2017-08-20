import { Shopmanager3Page } from './app.po';

describe('shopmanager3 App', () => {
  let page: Shopmanager3Page;

  beforeEach(() => {
    page = new Shopmanager3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
