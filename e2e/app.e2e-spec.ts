import { DaemonStatusPage } from './app.po';

describe('daemon-status App', function() {
  let page: DaemonStatusPage;

  beforeEach(() => {
    page = new DaemonStatusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
