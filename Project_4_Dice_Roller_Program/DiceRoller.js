//Dice Roller Program

function rollDice(){

    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(i = 0; i< numofDice; i++)
        {
            const value = Math.floor(Math.random() * 6) + 1;
            //console.log(value);  To see if random number is working

            values.push(value);
            images.push(`<img src="dice_images/${value}.png" alt = "Dice ${value}">` );
        }

        //console.log(values);  Pushing elements in an array
        diceResult.textContent = `dice : ${values.join(', ')}`;
        diceImages.innerHTML = images.join('');
}
