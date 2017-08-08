import { MindmapPage } from './app.po';

describe('mindmap App', () => {
  let page: MindmapPage;

  beforeEach(() => {
    page = new MindmapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
