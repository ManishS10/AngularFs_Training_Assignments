import { isNgTemplate } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProdsComponent } from './prods.component';

describe('ProdsComponent', () => {
  let component: ProdsComponent;
  let fixture: ComponentFixture<ProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test Parent Component Loading', () => {
    expect(component).toBeTruthy();
  });

  it('Test Child Component Loading', () => {
    let childComponent = fixture.debugElement.query(By.css("app-prod-list"));
    expect(childComponent).toBeTruthy();
  });

  it('Test Child Component Count and Verify', () => {
    let childComponents = fixture.debugElement.queryAll(By.css("app-prod-list"));
    expect(childComponents.length).toBe(component.productArr.length);
  });

  it('Test Child Component Properties', () => {
    let childComponent = fixture.debugElement.query(By.css("app-prod-list"));
    expect(childComponent.properties["item"][0].pname).toBe(component.productArr[0].pname);
  });

  it('Test Child Component Events', () => {
    let childComponent = fixture.debugElement.query(By.css("app-prod-list"));
    let pid = childComponent.properties["item"][0].pname;
    childComponent.triggerEventHandler("onremoveproduct",pid);
    let index = component.productArr.findIndex((item:any)=> item.pid == pid);
    expect(index).toBe(-1);
  });




});
