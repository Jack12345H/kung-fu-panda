// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    setCharacter("Po", "po", "Buddy, I am the Dragon Warrior");
    ("Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    setCharacter("Tigress", "tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    setCharacter("Mantis", "mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    setCharacter("Monkey", "monkey", "We should hang out");
  } else if (name === "crane" || name === "master crane") {
    setCharacter(
      "Crane",
      "crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    setCharacter("Viper", "viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    setCharacter("Shifu", "shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    setCharacter(
      "Mr.Ping",
      "mr-ping",
      "We are noodle folk, broth runs through our veins!"
    );
  } else if (name === "kai" || name === "general kai") {
    setCharacter("Kai", "kai", "Kai has RETURNED!");
  } else if (name === "wolf" || name === "boss-wolf") {
    setCharacter(
      "Wolf",
      "boss-wolf",
      "If you mess with the wolf, you get the fangs."
    );
  } else if (name === "croc" || name === "master croc") {
    setCharacter("Croc", "croc", "Vengeance is served!");
  } else if (name === "oogway" || name === "master oogway") {
    setCharacter(
      "Oogway",
      "oogway",
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present."
    );
  } else if (name == "shen" || name === "lord shen") {
    setCharacter("Shen", "shen", "here.. let me heal you");
  } else if (name === "soothsayer") {
    setCharacter(
      "Soothsayer",
      "soothsayer",
      "Your story may not have such a happy beginning, but that doesn't make you who you are."
    );
  } else if (name === "storming-ox" || name === "ox") {
    setCharacter("Storming-Ox", "storming-ox", "You insolent fool!");
  } else if (name === "tai-lung") {
    setCharacter(
      "Tai-Lung",
      "tai-lung",
      "The real Dragon Warrior is coming home."
    );
  } else {
    // Update page to Question Mark
    setCharacter("?????", "question-mark", "Character Not Found");
  }
}

function setCharacter(name, imgName, quote) {
  //updates the characters
  document.getElementById("character-name").innerHTML = name;
  document.getElementById("main-img").src = `img/${imgName}.png`;
  document.getElementById("quote").innerHTML = quote;
}
