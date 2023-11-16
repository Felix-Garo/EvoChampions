function useData() {
  const data = [
    {
      player: "Justin Wong",
      alias: "Jwong",
      country: "United States",
      wins: 9,
      years: [2001, 2002, 2003, 2004, 2006, 2008, 2009, 2010, 2014],
      games: [
        "Marvel vs Capcom 2: New Age of Heroes",
        "Marvel vs Capcom 2: New Age of Heroes",
        "Marvel vs Capcom 2: New Age of Heroes",
        "Marvel vs Capcom 2: New Age of Heroes",
        "Marvel vs Capcom 2: New Age of Heroes",
        "Marvel vs Capcom 2: New Age of Heroes",
        "Street Fighter III: 3rd Strike",
        "Marvel vs Capcom 2: New Age of Heroes",
        "Ultimate Marvel vs. Capcom 3",
      ],
    },
    {
      player: "Dominique McLean",
      alias: "SonicFox",
      country: "United States",
      wins: 6,
      years: [2014, 2015, 2016, 2018, 2019, 2022],
      games: [
        "Injustice: Gods Among Us",
        "Mortal Kombat X",
        "Mortal Kombat XL",
        "Dragon Ball FighterZ",
        "Mortal Kombat 11",
        "Skullgirls 2nd Encore",
      ],
    },
    {
      player: "Adam Lindgren",
      alias: "Armada",
      country: "Sweden",
      wins: 2,
      years: [2015, 2017],
      games: ["Super Smash Bros. Melee", "Super Smash Bros. Melee"],
    },
    {
      player: "Joseph Marquez",
      alias: "Mang0",
      country: "United States",
      wins: 2,
      years: [2015, 2017],
      games: ["Super Smash Bros. Melee", "Super Smash Bros. Melee"],
    },
    {
      player: "Daigo Umehara",
      alias: "Daigo",
      country: "Japan",
      wins: 6,
      years: [2003, 2004, 2009, 2010],
      games: [
        ["Super Street Fighter II Turbo", "Guilty Gear X2"],
        ["Super Street Fighter II Turbo", "Guilty Gear X2"],
        "Street Fighter IV",
        "Super Street Fighter IV",
      ],
    },
    {
      player: "William Hjelte",
      alias: "Leffen",
      country: "Sweden",
      wins: 2,
      years: [2018, 2023],
      games: ["Super Smash Bros. Melee", "Guilty Gear Strive"],
    },
    {
      player: "Seon-Woo Lee",
      alias: "Infiltration",
      country: "South Korea",
      wins: 6,
      years: [2012, 2013, 2016, 2018, 2019],
      games: [
        ["Super Street Fighter IV: Arcade Edition", "Street Fighter x Tekken"],
        "Street Fighter x Tekken",
        "Street Fighter V",
        "Street Fighter V: Arcade Edition",
        "Samurai Shodown",
      ],
    },
    {
      player: "Alex Valle",
      alias: "CaliPower",
      country: "United States",
      wins: 3,
      years: [1996, 2000],
      games: [
        "Street Fighter Alpha 2",
        ["Street Fighter Alpha 2", "Street Fighter III: 3rd Strike"],
      ],
    },
    {
      player: "Gonzalo Barrios",
      alias: "ZeRo",
      country: "Chile",
      wins: 1,
      years: [2015],
      games: ["Super Smash Bros. for Wii U"],
    },
    {
      player: "Hajime Taniguchi",
      alias: "Tokido",
      country: "Japan",
      wins: 3,
      years: [1996, 2000],
      games: [
        "Street Fighter Alpha 2",
        ["Street Fighter Alpha 2", "Street Fighter III: 3rd Strike"],
      ],
    },
  ];

  return { data };
}

export default useData;
