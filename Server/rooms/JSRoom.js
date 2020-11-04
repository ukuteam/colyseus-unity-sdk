const colyseus = require('colyseus');
const schema = require('@colyseus/schema');
const Schema = schema.Schema;

const context = new schema.Context();

class Player extends Schema {
    constructor(id, name, points, position, lastRoundPoint) {
        super();
        this.id = id;
        this.name = name;
        this.points = points;
        this.position = position;
        this.lastRoundPoint = lastRoundPoint;
        this.vueKeyVersion = 0;
        this.vueKey = id + this.vueKeyVersion;
    }
}

schema.defineTypes(Player, {
    id: "string",
    name: "string",
    points: "int16",
    position: "int8",
    lastRoundPoint: "int16",
    vueKey: "string",
    vueKeyVersion: "int8"
}, context);

// class Word extends Schema {
//     constructor(text) {
//         super();
//         this.text = text;
//     }
// }

// schema.defineTypes(Word, {
//     text: "string"
// }, context);

class State extends Schema {
    constructor(
        currentEvent,
        currentTurn,
        currentRound,
        totalRound,
        secondsPerRound,
        category,
        lead,
        players,
        words,
        drawingWord,
        suggestingWord
    ) {
        super();
        this.currentEvent = currentEvent;
        this.currentTurn = currentTurn;
        this.currentRound = currentRound;
        this.totalRound = totalRound;
        this.secondsPerRound = secondsPerRound;
        this.category = category;
        this.lead = lead;
        this.players = players;
        this.words = words;
        this.drawingWord = drawingWord;
        this.suggestingWord = suggestingWord;
    }
}

schema.defineTypes(State, {
    currentEvent: "int8",
    currentTurn: "string",
    currentRound: "int8",
    totalRound: "int8",
    secondsPerRound: "int8",
    category: "int8",
    lead: "string",
    players: [Player],
    words: ["string"],
    drawingWord: "string",
    suggestingWord: "string"
}, context);


module.exports = class JSRoom extends colyseus.Room {

  onCreate (options) {
    this.setState(new State(
      1, "one", 1, 1, 10, 1, "lead", new schema.MapSchema(), new schema.ArraySchema(), "Bubbaloo", "Alface"
    ));


    setTimeout(() => this.state.words.push("Dolly"), 500);
    setTimeout(() => this.state.words.push("Guaraná"), 1000);
  }

  onJoin (client, options, user) {
    console.log("client joined!", client.sessionId);
  }

  async onLeave (client, consented) {
    console.log("client left!", client.sessionId);
  }


  onDispose () {
    console.log("DemoRoom disposed.");
  }

}
