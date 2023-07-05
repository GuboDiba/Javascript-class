
// NO1
// you are afashion designer known for your unique and vibrant Ankara designs.
// Recently,you have discovered  that some of your fabroic parttens  change their designs 
// based on the temperature and mood of the wearer.your want to create a software that 
// can predict the change in the fabric design given the mood and temperature data.
// think about the classes you will need to model the changing Ankara and how to predict the changes

// class Ankara{
//     constructor(temperature,mood){
//         this.temperature=temperature
//         this.mood=mood
//     }
//     getcolor(){
//         const temp=20
//         const mood=5
//         if (this.temperature>=temp &&this.mood>=mood) {
//             console.log("wear light and more pattened ankara");
//         }
//         else{
//             console.log("wear dull and less partened ankara");
//         }
//     }
// }
// let ankara=new Ankara(10,3)
// ankara.getcolor();

// second sol
class Ankara_design {
    constructor(temperature, mood) {
      this.temperature = temperature;
      this.mood = mood;
    }
  
    detectPatternChanges() {
      const moods = ["happy", "sad", "bored"];
  
      if (this.temperature > 30 && moods.includes(this.mood)) {
        return "The pattern changes to Polka dot";
      } else if (this.temperature < 30 && moods.includes(this.mood)) {
        return "The pattern changes to Wavy";
      } else {
        return "The pattern does not change";
      }
    }
  }
  
  const person = new Ankara_design(20, "sad");
   let res=person.detectPatternChanges();
   console.log(res);



  //  The Magical Baobab: In a small village, there is a Baobab tree believed to have magical
  //  properties. Every season, it bears different types of fruits, each with its own unique power. 
  // You've decided to create a software system that tracks the changes in the tree and predicts 
  // what type of fruit it will bear next season and what powers it will possess. The system should The Magical Baobab: In a small village, there is a Baobab tree believed to have magical properties. Every season, it bears different types of fruits, each with its own unique power. You've decided to create a software system that tracks the changes in the tree and predicts what type of fruit it will bear next season and what powers it will possess. The system should also record the effect of each fruit when consumed
   
  // also record the effect of each fruit when consumed
  class PossibleFruit{
    constructor(fruit,effect,power,season){
      this.fruit=fruit;
      this.effect=effect;
      this.power=power;
      this.season=season;
    }
  }
  let database = [];
  let fruit = new PossibleFruit("Mango","Health","Healing","dry");
  let fruit1 = new PossibleFruit("Orange","Strength","Strong","wet");
  database.push(fruit,fruit1);
  console.log(database);

  class Season{
    constructor(season){
      this.season = season;
    }
    predicFruit(){
      let fruit = database.filter(item=>
        item.season === this.season
        );
        return fruit
    }
  }
  let seasons = new Season("dry");
  console.log(seasons.predicFruit());