const express = require("express");
const app = express();
app.use(express.json());

// Dataset in json format
const HOK = {
  heroes: [
    {
      id: "h1",
      name: "Lu Bu",
      class: "Fighter",
      lane: "Solo",
      faction: "Conquerors",
    },
    {
      id: "h2",
      name: "Zhao Yun",
      class: "Warrior",
      lane: "Jungle",
      faction: "Dragon Clan",
    },
    {
      id: "h3",
      name: "Diaochan",
      class: "Mage",
      lane: "Mid",
      faction: "Frost Order",
    },
    {
      id: "h4",
      name: "Hua Mulan",
      class: "Assassin",
      lane: "Solo",
      faction: "Loyal Guard",
    },
    {
      id: "h5",
      name: "Xiang Yu",
      class: "Tank",
      lane: "Bot",
      faction: "Rebel Forces",
    },
    {
      id: "h6",
      name: "Li Bai",
      class: "Assassin",
      lane: "Jungle",
      faction: "Wandering Poets",
    },
    {
      id: "h7",
      name: "Sun Shangxiang",
      class: "Marksman",
      lane: "Bot",
      faction: "Eastern Seas",
    },
    {
      id: "h8",
      name: "Ying Zheng",
      class: "Mage",
      lane: "Mid",
      faction: "Imperial Court",
    },
    {
      id: "h9",
      name: "Guan Yu",
      class: "Warrior",
      lane: "Solo",
      faction: "Five Tiger Generals",
    },
    {
      id: "h10",
      name: "Da Qiao",
      class: "Support",
      lane: "Bot",
      faction: "Strategists",
    }
  ]
};

// 1. Return all heroes
app.get("/kings-battle/heroes", (req, res) => {
  res.send(HOK.heroes);
});

// 2. Return specific hero
app.get("/kings-battle/heroes/:id", (req, res) => {
  const hero = HOK.heroes.find((hero) => hero.id === req.params.id);
  if (!hero) {
    return res.status(404).send("The hero with the given ID was not found.");
  }
  res.send(hero);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
