// グローバル変数の定義
let cards;
let timeoutID;
const hey = new Audio("Hey.mp3");

// 初期化の実行
init();

// 以下、関数群
function init(){
    cards = Array.from(sounds); // 音声の設定を配列にコピー 
}
function reset() {
    //playAudio("click.mp3"); 
    location.reload();
}
function start(){
    //playAudio("click.mp3"); 
    timeoutID = setTimeout(playGame, drawTime);
}
function end() {
    playAudio("click.mp3");
}

// カルタの読み札をランダムに引いて読み上げる
function draw(){
    
    const hey = new Audio("Hey.mp3");
    hey.play();
    const key = Math.floor(Math.random() * cards.length);
    const audio = new Audio(cards[key]);
    hey.addEventListener("ended", function(e) {
        // audioの再生開始
        audio.play();
    });
    //audio.play();
    cards.splice(key, 1);
}
// 設定された時間の感覚でカルタを引き続ける
function playGame(){
    draw();
    if (cards.length >= 1) {
        timeoutID = setTimeout(playGame, drawTime);
    } else {
        timeoutID = setTimeout(end, drawTime);
    }
}
function playAudio(path){
    const hey = new Audio("Hey.mp3");
    hey.play();
    const audio = new Audio(path);
    hey.addEventListener("ended", function(e) {
        // audioの再生開始
        audio.play();
    });
    //audio.play();
}

function onestop() {
    clearTimeout(timeoutID)
    const hey = new Audio("Hey.mp3");
    hey.pause();
    audio.pause();
}
