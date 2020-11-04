// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.1
// 

using Colyseus.Schema;

public class State : Schema {
	[Type(0, "int8")]
	public int currentEvent = default(int);

	[Type(1, "string")]
	public string currentTurn = default(string);

	[Type(2, "int8")]
	public int currentRound = default(int);

	[Type(3, "int8")]
	public int totalRound = default(int);

	[Type(4, "int8")]
	public int secondsPerRound = default(int);

	[Type(5, "int8")]
	public int category = default(int);

	[Type(6, "string")]
	public string lead = default(string);

	[Type(7, "array", typeof(ArraySchema<Player>))]
	public ArraySchema<Player> players = new ArraySchema<Player>();

	[Type(8, "array", typeof(ArraySchema<string>), "string")]
	public ArraySchema<string> words = new ArraySchema<string>();

	[Type(9, "string")]
	public string drawingWord = default(string);

	[Type(10, "string")]
	public string suggestingWord = default(string);
}

