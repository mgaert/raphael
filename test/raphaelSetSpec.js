describe('Initialize a paper',function(){
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
    console.log(paper);
    expect(paper).not.toBeNull();
  });
});