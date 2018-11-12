import { HostAppSamplePage } from './app.po';

describe('host-app-sample App', () => {
  let page: HostAppSamplePage;

  beforeEach(() => {
    page = new HostAppSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
