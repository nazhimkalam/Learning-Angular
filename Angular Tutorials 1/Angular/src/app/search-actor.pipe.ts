import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchActor',
})
export class SearchActorPipe implements PipeTransform {
  transform(pipeData, pipeModifier): any {
    return pipeData.filter((eachItem) => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['gender'].toLowerCase().includes(pipeModifier.toLowerCase())
      );
    });
  }
}
