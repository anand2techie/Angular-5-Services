import { AngularServicesPage } from './app.po';

describe('angular-services App', () => {
  let page: AngularServicesPage;

  beforeEach(() => {
    page = new AngularServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
