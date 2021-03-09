var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
}

object.name = "Joshua";
console.log(object);

var myjson = JSON.stringify(object);
console.log(myjson);

var new_obj = JSON.parse(myjson);
console.log(new_obj);

var values = Object.values(new_obj);
for (var elements of values) {
    console.log(elements);
}