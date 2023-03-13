export class Log {
  static success(msg: string) {
    // showing success message in console!
    console.log(`%c ${msg}`, "color:green");
  }
  static danger(msg: string) {
    // showing danger message in console!
    console.log(`%c ${msg}`, "color:red");
  }

  static info(msg: string) {
    // showing info message in console!
    console.log(`%c ${msg}`, "color:black; background:yellow");
  }
}
/**
 *
 * this is my first library that i created.
 * I added some cool ffeatures in it.
 * this is about console log messages
 * thannks for seeing my code.
 * happy coding DEAR FOLKS
 */
