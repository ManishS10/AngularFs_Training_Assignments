import { GradepipePipe } from './gradepipe.pipe';




describe('GradepipePipe', () => {


  let pipe:GradepipePipe;

  beforeEach(()=>
  {
    pipe = new GradepipePipe();
  });


  it('Should return Outstanding when input is 1', () => {
    const result:string = pipe.transform(1);
    expect(result).toBe("Outstanding");
  });

  it('Should return Empty String when input is wrong', () => {
    const result:string = pipe.transform(10);
    expect(result).toBe("");
  });


});
