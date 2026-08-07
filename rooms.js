const rooms = {
  entrance: {
    info: "You are in the south hall. There is a room to the east and west, and further north is the balcony.",
    direction: { right: "laboratory", left: "kitchen", up: "north hallway" },
    itemInfo: "There is nothing to search for here.",
    inspect: "You look around the entrance and see the now abandoned castle, where the royal family once roamed.",
    image: './assets/background/entrance.jpg'
  },
  kitchen: {
    info: "You are in the kitchen. There is a room to the north and the south hallway to your east. You may also look around to find something useful.",
    direction: { up: "storage room", right: "entrance"},
    itemInfo: "While looking around, you surprisingly find fresh bread! You put it inside your pouch for now.",
    item: bread,
    inspect: "You look at the old unused kitchen tools, some of the utensils are starting to rust. It smells a little bit rotten in here.",
    lookAround: false,
    image: './assets/background/kitchen.jpg'
  },
  "storage room": {
    info: "You are in the storage room. There is a room to the south and the north hall is to your east. You may also look around to find something useful.",
    direction: { down: "kitchen", right: "north hallway"},
    itemInfo: "While looking through the storage room, you could not find anything other than water bottle sprays. You take one for good measure.",
    item: waterBottle,
    inspect: "The dust fills your lungs as you walk around the room. There are crates and barrels everywhere, seemingly filled with nothing.",
    lookAround: false,
    image: './assets/background/storage.jpg'
  },
  "north hallway": {
    info: "You are in the north hallway. There is a room to the north, east, and west, and the south hall on your south.",
    direction: { up: "balcony", right: "armory", left: "storage room", down: "entrance" },
    itemInfo: "There is nothing to search for here.",
    inspect: "You remember walking down these hallways, serving the royal family. But alas, the dragon has taken over the castle. You must stop it at all costs.",
    image: './assets/background/north.jpg'
  },
  balcony: {
    info: "You are in the balcony. This is where the dragon may appear, better prepare yourself! You may head back to the north hallway to your south and investigate the castle more.",
    direction: { down: "north hallway" },
    itemInfo: "There is nothing to search for here.",
    inspect: "I don't have enough items to prepare myself against the dragon. I need to look back and search the rooms again.",
    image: './assets/background/balcony.jpg'
  },
  armory: {
    info: "You are in the armory. There is the north hall to your west, and another room down to the south. You may also look around to find something useful.",
    direction: { left: "north hallway", down: "laboratory"},
    itemInfo: "You found some decent armor and a sword. You put on the armor and the sword to gear yourself up.",
    item: sword,
    inspect: "Only the best quality of steel and metal were forged into mighty weapons enough to take on anything. However, as soon as the dragon cast its spell, even your greatest comrades fell.",
    lookAround: false,
    image: './assets/background/armory.jpg'
  },
  laboratory: {
    info: "You are in the laboratory. It reeks of chemicals, you feel nauseous. There is a room to your north, and the south hall to your west. You may also look around to find something useful.",
    direction: {up: "armory", left: "entrance"},
    itemInfo: "You found a strengthening potion! This will definitely come in handy.",
    item: potion,
    inspect: "You remember the greatest alchemists used to spend their hours at this laboratory, crafting and inventing the next potion. If they were here, perhaps they might have helped you.",
    lookAround: false,
    image: './assets/background/laboratory.jpg'
  }
};
