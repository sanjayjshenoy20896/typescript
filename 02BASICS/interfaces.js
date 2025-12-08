/***
 * Interfaces:
 * Some examples of practical use cases for Amazon Neptune are social network user connection mapping, fraud detection systems, and search and recommendation systems.
 *
 * It defines the shape of objects.It is a loosely coupled version of class.
 *
 */
var hitesh = {
    dbId: 22,
    role: "admin",
    githubToken: "github",
    email: "h@gmail.com",
    userId: 1121,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return off;
    }
};
hitesh.email = "h@hc.com";
// hitesh.dbId = 23; // not allowed as the field is readonly
console.log(hitesh);
