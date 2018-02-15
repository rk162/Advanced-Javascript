class player {};
Object.defineProperty(player,
    'firstName', {
        value: "Virat",
        writable: true,
        enumerable: true,
        configurable: true
    });

Object.defineProperty(player, 'lastName', {
    value: "Kohli",
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(player, 'fullName', {
    value: function() {
        return this.firstName + " " + this.lastName
    },
    writable: true,
    enumerable: true,
    configurable: true
});
for (let prop in player) {
    console.log(prop + ":" + player[prop])
}

player.firstName = "Virushka";
console.log(player.fullName());