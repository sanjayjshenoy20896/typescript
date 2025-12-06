var score = 33;
score = "34";
var hitesh = {
    name: "hitesh",
    id: 334
};
hitesh = {
    username: "hc", id: 334, name: "hotesh"
};
// function getDbId(id:number|string){
//     //making some api calls
//     console.log("DB is is :" + id)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    //making some api calls
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
// literal assignment
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
