const ultraman = {
    name: "tiga",
    height: 100,
    isDead: false,
    color: "green",
    size: 50,
    // address: {
    //     planet: {
    //         name: "namex",
    //         moon: [{
    //             name: "moonlight",
    //             size: 100
    //         }, {
    //             name: "moonshine",
    //             size: 100
    //         }, {
    //             name: "moonterang",
    //             size: 100
    //         }]
    //     },
    //     galaxy: "andromeda 12",
    // },
    waepons: ["sword", "shield", "lasso"],
    attack: () => {
        console.log("sword attack!")
    },
    beam: (number) => console.log("spacium ray beam " + number + "%")
}

ultraman.attack()
ultraman.beam(80)

console.log(ultraman)

//cara untuk ubah hero tp ultraman tidak ikut berubah
// const hero = {...ultraman}

// hero.color = "green"
// console.log(hero)

// ultraman.color = "red"
// delete ultraman.isDead

//console.log(ultraman.address.planet.moon[0].name)

// console.log(ultraman.name)
// console.log(ultraman["name"])

// const prop = "height"
// console.log(ultraman[prop])

// ultraman.name="bambang"
// ultraman["height"] = 99
// console.log(ultraman)