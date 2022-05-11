import { TestBed } from '@angular/core/testing';

import { DeptService } from './dept.service';

describe('DeptService', () => {
  let service: DeptService;

let deptAdd ={ deptno : 4, dname : "Marketting",  loc :  "Jaipur"} ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptService);
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test Default items', () => {

    expect(service.deptsList.length).toBe(3);
   });

   it('Test Add Department', () => {

    service.addDept(deptAdd)

    expect(service.deptsList.length).toBe(4);
   });

   it('Test Remove Dept', () => {

    service.removeDept(1)

    expect(service.deptsList.length).toBe(2);
   });

  
  it('Test Remove Dept -- for invalid number', () => {

   let result  = service.removeDept(34)

    expect(result).toEqual(service.deptsList.length);
   });
});
