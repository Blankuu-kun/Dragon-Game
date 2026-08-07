
let currentRoom = 'entrance';
let itemIndex = 0;
let items = [rock];
let item = null;
let INSPECT = document.querySelectorAll('#inspect button');
const dialogue = document.querySelector('#dialogue p');
const roomImage = document.querySelector('#main img');
const currentItemText = document.querySelector('#items h3');
const currentItemImage = document.querySelector('#items img');
const CURRENT_ITEM = document.querySelector('#items .item');
const DIRECTIONS = document.querySelectorAll('.direction button');
const SEARCH = INSPECT[1];
const NEXT = document.querySelector('#next');
const PREVIOUS = document.querySelector('#previous');
INSPECT = INSPECT[0];


// SHOWS CURRENT ROOM'S INFORMATION
function showRoom(currentRoom){
    dialogue.textContent = rooms[currentRoom].info;
    roomImage.src = rooms[currentRoom].image;
}

function displayItem(){
    const item = items[itemIndex].name;
    currentItemText.textContent = item;
    currentItemImage.src = items[itemIndex].imgSrc;
}

function buttonListeners(){
    // HANDLES THE DIRECTION 
     DIRECTIONS.forEach(direction =>{
        direction.addEventListener('click', e =>{
            direction = e.target.textContent.toLowerCase();
            if (direction in rooms[currentRoom].direction){
                currentRoom = rooms[currentRoom].direction[direction];
                showRoom(currentRoom); 
            }
            else{
                dialogue.textContent = "There is not a room there.";
            }
        })
    })
    // SEARCH THE ROOM FOR ITEMS 
    SEARCH.addEventListener('click', () =>{
        if (rooms[currentRoom].lookAround){
            dialogue.textContent = "You have already scavenged this room, there are no more useful items to get.";
        }
        else{
            dialogue.textContent = rooms[currentRoom].itemInfo;
            const item = rooms[currentRoom].item;
            items.push(item);
            rooms[currentRoom].lookAround = true;
        }
        
    })
    // INSPECTS THE ROOM FOR DESCRIPTION 
    INSPECT.addEventListener('click', () =>{
        dialogue.textContent = rooms[currentRoom].inspect;
    })

    // HANDLES NEXT ITEM INVENTORY 
    NEXT.addEventListener('click', () =>{
        if (itemIndex < items.length - 1){
            itemIndex++
        }
        displayItem();
    })
    // HANDLES PREVIOUS ITEM INVENTORY
    PREVIOUS.addEventListener('click', () =>
    {
        if (itemIndex > 0){
            itemIndex--;
        }
        displayItem();
    })
    CURRENT_ITEM.addEventListener('click', () =>{
        dialogue.textContent = items[itemIndex].desc;
    })
}


function main(){
    dialogue.textContent = "You came back from a trip, having found out your entire town has been wiped by a dragon." +
    " After a few years of training and grieving, a nearby wizard tells you the dragon has weakened and you must use items within the castle to kill it.";
    buttonListeners();
}

main();