// Write your JS here
alert ("WINTER HAS COME TO CODAISSEUR!!!")
alert ("Defeat the evil hordes and score more than 10 to fight the Night King")
const hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
}

function Creature(name, heroic, health, damage){
    this.name = name;
    this.heroic = heroic;
    this.health = health;
    this.damage = damage
}

const monster = new Creature("monster", false, 2, 1)
const dragon = new Creature("dragon", false, 5, 2)
const nightking = new Creature("nightking", false, 100, 4)



function rest(hero) {
    hero.health = 10;
    displayStats();
    alert("Zzzzzzzzz..." + hero.name + " rested.  Full health restored.  Ready to fight again!");
    return hero;

}

function pickUpItem(hero,item) {
    item.type = "dagger";
    item.damage = 2;
    hero.inventory.push(item);
    console.log(hero.inventory);
    document.getElementById("dagger").style.visibility = "hidden";
    alert(hero.name + " picked up a dagger!")
}

function pickUpSword(hero,item) {
    item.type = "longsword";
    item.damage = 5;
    hero.inventory.push(item);
    console.log(hero.inventory);
    document.getElementById("longsword").style.visibility = "hidden";
    alert(hero.name + " picked up a longsword!")
}

function pickUpLightsaber(hero,item) {
    item.type = "lightsaber";
    item.damage = 100;
    hero.inventory.push(item);
    console.log(hero.inventory);
    document.getElementById("lightsaber").style.visibility = "hidden";
    alert(hero.name + " picked up a lightsaber!")
}

function equipWeapon(hero) {
    if (hero.inventory != "") {
        hero.weapon = hero.inventory[0];
        displayStats();
        alert(hero.weapon.type + " equipped!")
    }
}

function changeHeroName(){
    hero.name = document.getElementById("HeroName").value;
    alert ("Hero name changed to " + hero.name)
    document.getElementById("HeroName").value = "";
    displayStats();
}

let m = 0;
let d = 0;
let k = 0;
let points = 0;
document.getElementById("pointsBox").innerText = "SCORE: " + points;

function fightEnemy(hero,creature){
    hero.health = hero.health - creature.damage;
    creature.health = creature.health - hero.weapon.damage;
    if (hero.health <=0) {
        alert("DEFEAT!! You are now part of the undead!.  Rest in the Inn to restore health.")
    // } else if (k>0){
    //     createBigBoss();
    //     createBigBoss();
    //     createBigBoss();
    //     createBigBoss();
    //     createBigBoss();
    //     createBigBoss();
    //     createBigBoss();
    //     createBigBoss();
    //     createBigBoss();
    //     alert("THE WORLD HAS ENDED! :(  TRY AGAIIIN!!")

    } else if (points >= 10) {
        points = 0;
        if (k === 0){
            createBigBoss();
            alert ("I AAAMMMM THEEEE NIGHHHT KIIIIINNNGGGG!!!! (Hint: Use the lightsaber");
            k++;
            console.log (k);
        } 

    } else if (creature.health <= 0 && creature.name === "monster") {
        creature.health = creature.health - hero.weapon.damage;
        document.getElementsByClassName("monster")[m].style.visibility = "hidden";
        m++
        points++
        document.getElementById("pointsBox").innerText = "SCORE: " + points;
        alert(creature.name + m + " defeated!")
        createMonster();
        creature.health = 2;
        console.log(creature.health)
    } else if (creature.health <= 0 && creature.name === "dragon"){
        document.getElementsByClassName("dragon")[d].style.visibility = "hidden";
        console.log(creature.health)
        d++;
        points = points + 2;
        document.getElementById("pointsBox").innerText = "SCORE: " + points;
        alert(creature.name + d + " defeated!");
        createDragon();
        creature.health = 5;
        console.log(creature.health);
    } else if (creature.health > 2 && creature.name === "dragon"){
        alert("Keep clicking to defeat the dragon!")
    } else if (creature.health <= 0 && creature.name === "nightking"){
        points = points + 99999999;
        document.getElementById("pointsBox").innerText = "SCORE: " + points;
        document.getElementById("nightking").style.visibility = "hidden";
        document.getElementsByClassName("dragon")[d].style.visibility = "hidden";
        document.getElementsByClassName("monster")[m].style.visibility = "hidden";
        alert("YOU WIN! CONGRATULATIONS!  " + creature.name + " DEFEATED!.  YOU CAN NOW ATTEND YOUR CLASS IN CODAISSEUR :D" );
        console.log(creature.health);
    }
    displayStats();
}

function createMonster(){
    const p = document.getElementById("playArea");
    let imageCreature = document.createElement('img');
    let x = Math.floor(Math.random() * 700)
    let y = Math.floor(Math.random() * 500)
    imageCreature.src = "./images/Monster.png";
    imageCreature.className = "monster";
    imageCreature.setAttribute("onclick","fightEnemy(hero,monster)");
    imageCreature.alt = "monster picture";
    imageCreature.style.top = y;
    imageCreature.style.left = x;
    p.appendChild(imageCreature);
}

function createDragon(){
    const p = document.getElementById("playArea");
    let imageCreature = document.createElement('img');
    let x = Math.floor(Math.random() * 700)
    let y = Math.floor(Math.random() * 500)
    imageCreature.src = "./images/dragon.png";
    imageCreature.className = "dragon";
    imageCreature.setAttribute("onclick","fightEnemy(hero,dragon)");
    imageCreature.alt = "dragon picture";
    imageCreature.style.top = y;
    imageCreature.style.left = x;
    p.appendChild(imageCreature);
}


function createBigBoss(){
    const p = document.getElementById("playArea");
    let imageCreature = document.createElement('img');
    let x = Math.floor(Math.random() * 700)
    let y = Math.floor(Math.random() * 500)
    imageCreature.src = "./images/nightking.png";
    imageCreature.id = "nightking";
    imageCreature.setAttribute("onclick","fightEnemy(hero,nightking)");
    imageCreature.alt = "Night King picture";
    imageCreature.style.top = y;
    imageCreature.style.left = x;
    p.appendChild(imageCreature);
}

createMonster();
createDragon();





function displayStats(){
    document.getElementById("displayName").innerText = hero.name;
    document.getElementById("displayHealth").innerText = hero.health;
    document.getElementById("displayWT").innerText = hero.weapon.type;
    document.getElementById("displayWD").innerText = hero.weapon.damage;
}

displayStats ();