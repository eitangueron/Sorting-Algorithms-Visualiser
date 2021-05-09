//  // eslint-disable-next-line
// import { observable, action, computed } from 'mobx';

// export class BarsStore {
//   @observable numsArray;

//   constructor() {
//       this.numsArray = [5,10,23,45]
//   }

//   getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   @action createRandomNumsArray = (numsAmmount, minNumsRange, maxNumsRange) => {
//     this.numsArray.length = 0  
//     for(let i=0; i++; i<numsAmmount){
//           this.numsArray.push(this.getRandomArbitrary(minNumsRange,maxNumsRange))
//       }
    
//   }
// }

// export default BarsStore;
