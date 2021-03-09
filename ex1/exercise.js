var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
}

object.name = "Joshua";
console.log(object);

var myjson = JSON.stringify(object);
console.log(myjson);

var newobj = JSON.parse(myjson);
console.log(newobj);

var values = Object.values(newobj);
for (var elements of values) {
    console.log(elements);
}