abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  //   getSepia(): void // if we dont provide definition it will give error
  abstract getSepia(): void;

  getReelTime(): number {
    return 8;
  }
}

// const camera = new TakePhoto("test", "test");  // Cannot create an instance of an abstract class.
// abtract class are just for blue print we cannot create an object out of it

class Insta extends TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
