const students = 
[
    { name: 'Quincy', grade: 83 },
    { name: 'Jason', grade: 70 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const passedMeans = (students) => 
{
    return students.filter(student => 
    { 
        if(student.grade >= 70)
        {
            return student
        }  
    });
}

console.log(passedMeans(students));


dataSeptember = 
[
    {
      product: 'Dell Inspiration',
      sold: 10,
      priceBuying:200.00,
      priceSelling: 396.99
    },
    {
      product: 'Hp Elite Book',
      sold: 15,
      priceBuying:200.00,
      priceSelling: 496.99
    },
    {
      product: 'Mac Book Air',
      sold: 25,
      priceBuying:400.00,
      priceSelling: 796.99
    },
    {
      product: 'Samsung Galaxy Book',
      sold: 2,
      priceBuying:200.00,
      priceSelling: 396.99
    }
];

const calculateProfit = (input) => 
{
 const x = input.map((a)=>
    {
      return  (a.priceSelling - a.priceBuying)* a.sold
    });
    return x.reduce((a,b)=>
    {
        return a + b ;
    });
}

console.log(calculateProfit(dataSeptember));



const input = [1, -4, 12, 0, -3, 29, -150];

const sumUpPositiveNumbers = (inputs) => 
{
    return inputs.map((a)=>(a>0 )?a:0).reduce((a,b)=>a+b); 
}
console.log(sumUpPositiveNumbers(input));



const letterArray = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];
const  createKeyValuePair = (input) =>
{
    let sumArray = [].concat.apply([], input);
     return  sumArray.reduce((total, letter) =>
     {
         total[letter] ? total[letter]++ : total[letter] = 1;
         return total;
     }, {});
}
console.log(createKeyValuePair(letterArray));


class TV {
    constructor(brand) {
      this.brand = brand;
      this.channel = 1;
      this.volume = 50;
    }
  
    increaseVolume() {
      if (this.volume < 100) {
        this.volume++;
        console.log("Volume", this.volume);
      }
    }
    decreaseVolume() {
      if (this.volume >= 0) {
        this.volume--;
        console.log("Volume", this.volume);
      }
    }
    getNewChannel() {
      this.channel = Math.floor(Math.random() * 51);
      console.log(`Channel: ${this.channel}`);
    }
  
    getTVstatus() {
      return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
  
    resetTV() {
      if(this.volume !== 1 || this.channel !== 50) {
        this.channel = 1;
        this.volume = 50
      }
    }
  }
  
  const tv = new TV("Panasonic");
  tv.increaseVolume();
  tv.decreaseVolume();
  tv.getNewChannel();
  console.log(tv.getTVstatus());
  tv.resetTV();
  console.log(tv.getTVstatus());
