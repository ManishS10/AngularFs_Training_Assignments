import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductpriceComponent } from './productprice.component';



describe('ProductpriceComponent', () => {
  let component: ProductpriceComponent;
  let fixture: ComponentFixture<ProductpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ProductpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Check Default Value of Quantity', () => {
    const defVal:number = component.quantity;
    expect(defVal).toBe(1);
  });


  it('Check Default Value of Result', () => {
    const defVal:string = component.result;
    expect(defVal).toBe("");
  }); 

  it('Check Result Message', () => {
    component.unitPrice = 120;
    component.quantity = 4;
    component.btn_click();
    const strOutput:string  = component.result;
    expect(strOutput).toBe("480");
  });

  it('Check Result Message in case of Wrong', () => {
    component.unitPrice = -1;
    component.quantity = 4;
    component.btn_click();
    const strOutput:string  = component.result;
    expect(strOutput).toBe("NaN");
  });

  it('Check the textbox value of price', () => {

    let inputArray = fixture.nativeElement.querySelectorAll("input");

    inputArray[1].value = 100;
    inputArray[1].dispatchEvent(new Event('input'));
     expect(component.unitPrice).toBe(100);
   });

   it('Check the textbox value of Quantity', () => {

    let inputArray = fixture.nativeElement.querySelectorAll('input');
    console.log(inputArray[2].value);

    inputArray[2].value = '10';
    inputArray[2].dispatchEvent(new Event('input'));
     expect(component.quantity).toBe(10);
   });

   it('Check Button Click Event Value Change', () => {

    const inputArray =  fixture.nativeElement.querySelectorAll("input");
  
    inputArray[0].value = 'Apple';
    inputArray[0].dispatchEvent(new Event('input'));
  
    inputArray[1].value = 150;
    inputArray[1].dispatchEvent(new Event('input'));

    inputArray[2].value = 15;
    inputArray[2].dispatchEvent(new Event('input'));
  
    let inputObj = fixture.nativeElement.querySelector('button');
    inputObj.dispatchEvent(new Event('click'));
  
    //console.log(component.result);  // should modify paragraph
    fixture.detectChanges();
  
    let resObj = fixture.nativeElement.querySelector('span');
    console.log(resObj);
    expect(resObj.textContent).toBe('2250');
  });
  


});
