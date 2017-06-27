//variables for the groove settings

var myPartB,boxPhraseB;
var boxPatB =  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
var drumPatB = [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0];
var hatPatB =  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
var ohatPatB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];


function activateGrooves(myPartB) {

  console.log('beats activated');

  boxPhraseB = new p5.Phrase("beats[0]", playBox, boxPatB);
  var drumPhraseB = new p5.Phrase("beats[1]", playDrum, drumPatB);
  var hatPhraseB = new p5.Phrase("beats[2]", playHat, hatPatB);
  var ohatPhraseB = new p5.Phrase("beats[3]", playOhat, ohatPatB);

  myPartB.addPhrase(boxPhraseB);
  myPartB.addPhrase(drumPhraseB);
  myPartB.addPhrase(hatPhraseB);
  myPartB.addPhrase(ohatPhraseB);

  myPartB.setBPM(110);

  masterVolume(0.5);
}

function playBox(time, playbackRate) {
  console.log('inside playBox');
  console.log(myPartB);
  console.log(beats[0]);
  beats[0].rate(playbackRate);
  beats[0].play(time);
}

function playDrum(time, playbackRate) {
  beats[1].rate(playbackRate);
  beats[1].play(time);
}

function playHat(time, playbackRate) {
  beats[2].rate(playbackRate);
  beats[2].play(time);
}

function playOhat(time, playbackRate) {
  beats[3].rate(playbackRate);
  beats[3].play(time);
}
