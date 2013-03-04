describe('Initialize a paper for SVG',function(){
  var paper = null;
  beforeEach(function() {
    paper = Raphael(10, 50, 320, 200);
  });
  afterEach(function(){
    paper = null;
  });
  it('The paper object should not be null',function(){
    expect(paper).not.toBeNull();
  });
  it('The paper object should has special attributes',function(){
    expect(paper).not.toBeNull();
    expect(paper.raphael).not.toBeNull();
    expect(paper.raphael.vml).toBe(false);
    expect(paper.raphael.svg).toBe(true);
  });
});