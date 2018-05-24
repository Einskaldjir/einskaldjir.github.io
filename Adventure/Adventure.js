var iHealth = "100";
var iWealth = 0;
var i = 0;
var back = 0;

if (iWealth === 0)
{
	iWealth = "El Zilcho";
}

 function goTo(newLocale) {
	 back = i;
	i = newLocale;

	setInnerHtml("Header", "<span style='color:red;'>Health:</span> " + iHealth + " <span style='color:brown;'>Wealth:</span> " + iWealth);
	setInnerHtml("Title", allTiles[i].location);
	setInnerHtml("Description", allTiles[i].description);
	setInnerHtml("Options", allTiles[i].options);
}

function setInnerHtml(id, value) {
	document.getElementById(id).innerHTML = value;
}

function orderDrink() {
	if (iWealth < 0 || iWealth === "El Zilcho")
	{
		alert("You don't have any money!");
	}

	console.log(iWealth);
	console.log("orderDrink()");
}

var allTiles = 
[
	{location: 'The Tavern', description: 'Interior. Tavern. Cheap but not too seedy.', options: "<ul><li><button onclick='goTo(1)'>Go to the bar.</button></li><li><button onclick='goTo(2)'>Take a seat at a table.</button></li><li><button onclick='goTo(3)'>Make a hasty exit.</button></li></ul>"},
	{location: 'The Bar', description: 'Worn and damp. About what you expected.', options: "<ul><li><button onclick='orderDrink()'>Order a drink.</button></li><li><button onclick='goTo(0)'>Return to milling about awkwardly.</button></li><li><button onclick='goTo(2)'>Take a seat at a table.</button></li><li><button onclick='goTo(3)'>Make a hasty exit.</button></li></ul>"},
	{location: 'A Table', description: 'Bad lighting and worse company.', options: ""},
	{location: 'The Village', description: 'Muddy roads and sullen peasants.', options: ""},
	{location: 'The Forest', description: 'Deep, dark and full of critters.', options: ""},
	{location: 'The Castle', description: 'Tall, stone and impregnable.', options: ""},
];