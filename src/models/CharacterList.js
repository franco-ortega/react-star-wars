export class CharacterList {

  constructor({ count, results }) {
    this.count = count;
    this.characters = results
      .map(character => {
        return {
          name: character.name,
          gender: character.gender,
          hairColor: character.hair_color,
          mass: character.mass,
          height: character.height
        };
      })
      .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
  
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
  
        return 0;
      });
  }

  allMasses() {
    return this.characters.map(character => character.mass);
  }

  allHeights() {
    return this.characters.map(character => character.height);
  }

  calculateAverage(values) {
    let totalCharacters = values.length;

    const average = values.reduce((acc, cur) => {
      // If the value has a comma, remove the comma
      if(cur.includes(',')) {
        const commaRemoved = cur.split(',').join('');

        // If the value converted to a number is not NaN, add it to the total
        if(!isNaN(Number(commaRemoved))) return acc + Number(commaRemoved);

        // Otherwise, decrement totalCharacters and return previous total
        totalCharacters--;
        return acc;
      }

      // If the value converted to a number is NaN, decrement totalCharacters
      // and return previous total
      if(isNaN(Number(cur))) {
        totalCharacters--;
        return acc;
      }

      // Otherwise, add the current value to the previous total
      return acc + Number(cur);
    }, 0) / totalCharacters;

    // Check if the average has a decimal
    if(String(average).includes('.')) {
      // If the decimal is longer than 2 places, return only 2 decimal places
      if(String(average).split('.')[1].length > 2) {
        return Number(average.toFixed(2));
      }
    }

    // Otherwise, return the entire average
    return average;
  }

  averageMass() {
    return this.calculateAverage(this.allMasses());
  }

  averageHeight() {
    return this.calculateAverage(this.allHeights());
  }

  totalPages() {
    return Math.ceil(this.count / 10);
  }
}
