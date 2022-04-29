import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryfilterpipe'
})
export class SalaryfilterpipePipe implements PipeTransform 
{

  transform(inputdata:any[],key:string,value1:string,value2:string) 
    {
      if(value1 !="" && value2 !="")
      {
        return inputdata.filter(item=>item[key] >= value1 && item[key] <= value2)
      }
      if(value1 !="" && value2 =="")
      {
        return inputdata.filter(item=>item[key] >= value1)
      }


      return inputdata;
      
    }
  
  

}
