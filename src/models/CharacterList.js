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

  averageMass() {
    let totalCharacters = this.characters.length;

    const average = this.characters.reduce((acc, cur) => {
      // If the mass has a comma, remove the comma
      if(cur.mass.includes(',')) {
        const commaRemoved = cur.mass.split(',').join('');

        // If the mass converted to a number is not NaN, add it to the total
        if(!isNaN(Number(commaRemoved))) {
          return acc + Number(commaRemoved)
        }

        // Otherwise, decrement the totalCharacters and only return the previous total
        totalCharacters--;
        return acc;
      }

      if(isNaN(Number(cur.mass))) {
        totalCharacters--;
        return acc;
      }

      return acc + Number(cur.mass);
    }, 0) / totalCharacters;

    // Check if there is a decimal
    if(String(average).includes('.')) {
      // If the decimal is longer than 2 decimal places, return only 2 decimal places
      if(String(average).split('.')[1].length > 2) return Number(average.toFixed(2));
    }

    return average;
  }

  averageHeight() {
    let totalCharacters = this.characters.length;

    return this.characters.reduce((acc, cur) => {
      if(isNaN(Number(cur.height))) {
        totalCharacters--;
        return acc;
      }

      return acc + Number(cur.height);
    }, 0) / totalCharacters;
  }

  totalPages() {
    return Math.ceil(this.count / 10);
  }
}
