// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.1
// 

using Colyseus.Schema;

public class Player : Schema {
	[Type(0, "string")]
	public string id = default(string);

	[Type(1, "string")]
	public string name = default(string);

	[Type(2, "int16")]
	public short points = default(short);

	[Type(3, "int8")]
	public int position = default(int);

	[Type(4, "int16")]
	public short lastRoundPoint = default(short);

	[Type(5, "string")]
	public string vueKey = default(string);

	[Type(6, "int8")]
	public int vueKeyVersion = default(int);
}

