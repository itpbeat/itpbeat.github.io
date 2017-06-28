var beats = [];
var noBeats = 4;
var beatsRecorded = [0, 0, 0, 0];
var grooveActivated = 0;

function preload() {
  metronome = loadSound('assets/metronome.wav');
  metronome.setVolume(0.7);
}

function setup() {
  mic = new p5.AudioIn();
  createCanvas(0, 0);
  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  for (var i = 0; i < noBeats; i++) {
    beats[i] = new p5.SoundFile();
  }
  myPartB = new p5.Part();
  activateGrooves(myPartB);

}

function recordSound(test) {
  if (test == 1) {
    if (mic.enabled) {

      // record to our p5.SoundFile
      recorder.record(soundFile);

      console.log('Recording!');
    }
  } else if (test == 2) {
    soundFile.play(); // play the result!
  }
}

function keyPressed() {
  var div;
  if (keyCode == 49) { //press 1 to record first sound
    div = $(".loop-st__button-red");
    metronome.play();
    setTimeout(function() {
      recorder.record(beats[0]);
    }, 2000);
    console.log("recording");

  } else if (keyCode == 50) { //press 2 to record first sound
    console.log("in callback");
    div = $(".loop-st__button-blue");
    metronome.play();
    setTimeout(function() {
      recorder.record(beats[1]);
    }, 2000);
  } else if (keyCode == 51) { //press 2 to record first sound

    div = $(".loop-st__button-green");
    metronome.play();
    setTimeout(function() {
      recorder.record(beats[2]);
    }, 2000);
  } else if (keyCode == 52) { //press 2 to record first sound
    div = $(".loop-st__button-yellow");
    metronome.play();
    setTimeout(function() {
      recorder.record(beats[3]);
    }, 2000);
  } else if (keyCode == 80) {
    console.log("play 1");
    beats[0].play();
  } else if (keyCode == 84) {
    console.log("play 2");
    beats[1].play();
  } else if (keyCode == 75) {
    console.log("play 3");
    beats[2].play();
  } else if (keyCode == 83) {
    console.log("play 4");
    beats[3].play();
  }
  //refresh key - resets all variables
  else if (keyCode == 32) {
    grooveActivated = 0;
    for (var i = 0; i < noBeats; i++) {
      beats[i] = new p5.SoundFile();
      beatsRecorded[i] = 0;
    }


    $(".loop-st__button").fadeTo(0.01, 0.5);
    $(".loop-st__groove-button").fadeTo(0.01, 0.5);
  }

  //to activate the grooves
  if (keyCode == 53 && grooveActivated == 1) {
    myPartB.loop();
    print("seq1");
  }


  if (div) {
    for (var i = 0; i < 2; i++) {
      div.animate({
        opacity: 1.
      }, ".1s");
      div.animate({
        opacity: 0.5,
      }, ".1s");
    }
    div.animate({
      opacity: 1
    }, "fast");
  }

}

function keyReleased() {
  if (keyCode === 49 || keyCode === 50 || keyCode === 51 || keyCode === 52) {
    recorder.stop();
    console.log("stop recording");
    if (keyCode == 49) {
      beatsRecorded[0] = 1;
    } else if (keyCode == 50) {
      beatsRecorded[1] = 1;
    } else if (keyCode == 51) {
      beatsRecorded[2] = 1;
    } else if (keyCode == 52) {
      beatsRecorded[3] = 1;
    }
  }
  if (keyCode == 53 && grooveActivated == 1) {
    console.log('released');
    myPartB.stop();
  }

  //if all four beats are recorded, enable the groove buttons
  if (beatsRecorded[0] && beatsRecorded[1] && beatsRecorded[2] && beatsRecorded[3] &&
    !grooveActivated) {
    console.log("all are recorded");
    grooveActivated = 1;
    $(".loop-st__groove-button").fadeTo(0.01, 1);
  }

}

function beginRecord() {
  console.log("in callback");
  recorder.record(beats[1]);
  // div = $(".loop-st__button-blue");
  console.log("recording");
}

function preRecord(callback) {
  console.log("pre record");
  metronome.play();
  if (callback && typeof callback == "function") {
    console.log("pre record2");
    callback();
  }
  console.log("pre record1");
}
