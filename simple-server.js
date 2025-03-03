const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS (you will modify this later for the CORS failure test)
app.use(cors());

// Dice roll API: Returns a random number between 1 and 6
app.get("/roll-dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.json({ roll: diceRoll });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Dice Roller API running on port ${PORT}`);
});
