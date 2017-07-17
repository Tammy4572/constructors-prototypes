//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color, status, hungry, owner) {
     this.color = color;
     this.status = status;
     this.hungry = hungry;
     this.owner = owner;
};
let sadie = new Dog("black", "normal", false, undefined);
let moonshine = new Dog("black", "normal", true, undefined);
let atticus = new Dog("black", "normal", true, undefined);

// console.log(sadie);
// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
     this.cool = cool;
};
Human.prototype.feed = function (dog) {
     return dog.hungry = false;
}
Human.prototype.pet = function (dog) {
     return dog.status = "happy";
};
let mason = new Human(false);
let julia = new Human(true);
// Instances of Human
// Needed: mason, julia
