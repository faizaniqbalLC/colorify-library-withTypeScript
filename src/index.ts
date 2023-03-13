export class Log {
  static success(msg: string) {
    // showing success message in console
    console.log(`%c ${msg}`, "color:green");
  }
  static danger(msg: string) {
    console.log(`%c ${msg}`, "color:red");
  }

  static info(msg: string) {
    // showing info message in console
    console.log(`%c ${msg}`, "color:black; background:yellow");
  }
}
