// KATA FOR SATURDAY, 26/3/2022

// Description:

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".


// My Solution :

const dead = x => x.split('n').length > 16 ? "Car Dead" : "Woohoo!"


// My Notes on kata :

// 1) Was fairly straightforward.

// 2) Had a bit of an issue with one of the test cases, where when the function was called without initializing it 
// should return "Woohoo" so my solution was CONST DEAD = X instead of FUNCTION DEAD (X)