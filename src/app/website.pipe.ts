import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'website'
})
export class WebsitePipe implements PipeTransform {

  transform(url : String): String {
    if(url.substring(0,4) == "http"){
      return url;
    }else{
      return "";
    }
  }

}
