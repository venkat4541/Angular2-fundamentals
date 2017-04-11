import { AngularFundamentalsPage } from './app.po';

describe('angular-fundamentals App', function() {
  let page: AngularFundamentalsPage;

  beforeEach(() => {
    page = new AngularFundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
