export class Helper {
  constructor() {}

  isValidEmail(str: string): boolean {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(str);
  }

  capitalizeFirstLetter(str: string): string {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
}

const helper = new Helper();

export default helper;
