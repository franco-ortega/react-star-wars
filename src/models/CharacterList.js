export class CharacterList {

  constructor({ count, next, previous, results }) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.characters = results.map(character => {
      return {
        name: character.name,
        gender: character.gender,
        hairColor: character.hair_color,
        mass: character.mass,
        height: character.height
      };
    });
  }

  averageMass() {
    return this.characters.reduce((acc, cur) => {
      return acc + Number(cur.mass);
    }, 0) / this.characters.length;
  }

  averageHeight() {
    return this.characters.reduce((acc, cur) => {
      return acc + Number(cur.height);
    }, 0) / this.characters.length;
  }

  totalPages() {
    return Math.ceil(this.count / 10);
  }
}
