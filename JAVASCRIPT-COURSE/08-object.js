function updateResult(value, containerID) {
    document.getElementById(containerID).innerHTML = value;
}

const product = {
    name: 'iPhone',
    quantity: 2,
};

product.name = 'Android' //Change value in an object
product.newProperty = true;
delete product.newProperty; //Delete a property
console.log(product)
updateResult(product.name, "demo");

//Instrument Sound
const trumpet = {
    name: "Trumpet",
    type: "Brass",
    sound: "🎺 Tu-tu-tu-tu! 🎺",
};

const saxophone = {
    name: "Saxophone",
    type: "Woodwind",
    sound: "🎷 Bee-boo-bop! 🎷",
};

const trombone = {
    name: "Trombone",
    type: "Brass",
    sound: "🎶 Wa-wa-wa-wa! 🎶",
};


const violin = {
    name: "Violin",
    type: "String",
    sound: "🎻 Screeeech! 🎻",
  };
  
const clarinet = {
    name: "Clarinet",
    type: "Woodwind",
    sound: "🎼 Doo-doo-doo! 🎼",
  };
  
const flute = {
    name: "Flute",
    type: "Woodwind",
    sound: "💨 Toooooot! 💨",
  };
  
  const guitar = {
    name: "Guitar",
    type: "String",
    sound: "🎸 Strum-strum-strum! 🎸",
  };
  
  const drum = {
    name: "Drum",
    type: "Percussion",
    sound: "🥁 Boom-boom-tss! 🥁",
  };
  
  const piano = {
    name: "Piano",
    type: "Keyboard",
    sound: "🎹 Ding-ding-ding! 🎹",
  };


function play_sound(instrument) {
    updateResult(instrument.sound, 'Instrument')
}



