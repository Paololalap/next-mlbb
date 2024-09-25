const WEEKS = [
  {
    week: 1,
    characters: [
      {
        name: "roger",
        role: ["fighter", "marksman"],
        lane: ["gold"],
        tierScore: 5,
      },
      {
        name: "harith",
        role: ["mage"],
        lane: ["gold"],
        tierScore: 5,
      },
      {
        name: "moskov",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 4,
      },
      {
        name: "ruby",
        role: ["fighter"],
        lane: ["gold"],
        tierScore: 3,
      },
      {
        name: "claude",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 3,
      },
      {
        name: "natan",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 2,
      },
      {
        name: "karrie",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 2,
      },
      {
        name: "brody",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 1,
      },
      {
        name: "bruno",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 1,
      },
      {
        name: "chip",
        role: ["support", "tank"],
        lane: ["roam"],
        tierScore: 5,
      },
      {
        name: "edith",
        role: ["tank", "marksman"],
        lane: ["roam"],
        tierScore: 5,
      },
      {
        name: "hylos",
        role: ["tank"],
        lane: ["roam"],
        tierScore: 4,
      },
      {
        name: "jawhead",
        role: ["fighter"],
        lane: ["roam"],
        tierScore: 3,
      },
      {
        name: "ruby",
        role: ["fighter"],
        lane: ["roam"],
        tierScore: 3,
      },
      {
        name: "tigreal",
        role: ["tank"],
        lane: ["roam"],
        tierScore: 3,
      },
      {
        name: "grock",
        role: ["tank", "fighter"],
        lane: ["roam"],
        tierScore: 3,
      },
      {
        name: "chou",
        role: ["fighter"],
        lane: ["roam"],
        tierScore: 2,
      },
      {
        name: "mathilda",
        role: ["support", "assassin"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "khufra",
        role: ["tank"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "angela",
        role: ["support"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "minotaur",
        role: ["tank", "support"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "franco",
        role: ["tank"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "kaja",
        role: ["support", "fighter"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "edith",
        role: ["tank", "marksman"],
        lane: ["exp"],
        tierScore: 5,
      },
      {
        name: "terizla",
        role: ["fighter", "tank"],
        lane: ["exp"],
        tierScore: 4,
      },
      {
        name: "hylos",
        role: ["tank"],
        lane: ["exp"],
        tierScore: 3,
      },
      {
        name: "arlott",
        role: ["fighter", "assassin"],
        lane: ["exp"],
        tierScore: 3,
      },
      {
        name: "ruby",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 2,
      },
      {
        name: "grock",
        role: ["tank", "fighter"],
        lane: ["exp"],
        tierScore: 2,
      },
      {
        name: "chou",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 2,
      },
      {
        name: "barats",
        role: ["tank", "fighter"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "khaleed",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "phoveus",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "thamuz",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "cici",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "yu zhong",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "zhuxin",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 5,
      },
      {
        name: "zhask",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 4,
      },
      {
        name: "aurora",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 3,
      },
      {
        name: "valentina",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 2,
      },
      {
        name: "faramis",
        role: ["support", "mage"],
        lane: ["mid"],
        tierScore: 2,
      },
      {
        name: "vexana",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 2,
      },
      {
        name: "angela",
        role: ["support"],
        lane: ["mid"],
        tierScore: 1,
      },
      {
        name: "luo yi",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 1,
      },
      {
        name: "lylia",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 1,
      },
      {
        name: "fanny",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 5,
      },
      {
        name: "roger",
        role: ["fighter", "marksman"],
        lane: ["jungle"],
        tierScore: 5,
      },
      {
        name: "ling",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 5,
      },
      {
        name: "hayabusa",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 4,
      },
      {
        name: "nolan",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 3,
      },
      {
        name: "julian",
        role: ["fighter", "mage"],
        lane: ["jungle"],
        tierScore: 3,
      },
      {
        name: "alpha",
        role: ["fighter"],
        lane: ["jungle"],
        tierScore: 2,
      },
      {
        name: "joy",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "bane",
        role: ["fighter", "mage"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "xborg",
        role: ["fighter"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "hanzo",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "martis",
        role: ["fighter"],
        lane: ["jungle"],
        tierScore: 1,
      },
    ],
  },
  {
    week: 2,
    characters: [
      {
        name: "harith",
        role: ["mage"],
        lane: ["gold"],
        tierScore: 5,
      },
      {
        name: "roger",
        role: ["fighter", "marksman"],
        lane: ["gold"],
        tierScore: 5,
      },
      {
        name: "ruby",
        role: ["fighter"],
        lane: ["gold"],
        tierScore: 4,
      },
      {
        name: "moskov",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 4,
      },
      {
        name: "claude",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 3,
      },
      {
        name: "karrie",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 2,
      },
      {
        name: "natan",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 1,
      },
      {
        name: "clint",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 1,
      },
      {
        name: "bruno",
        role: ["marksman"],
        lane: ["gold"],
        tierScore: 1,
      },
      {
        name: "chip",
        role: ["support", "tank"],
        lane: ["roam"],
        tierScore: 5,
      },
      {
        name: "edith",
        role: ["tank", "marksman"],
        lane: ["roam"],
        tierScore: 5,
      },
      {
        name: "hylos",
        role: ["tank"],
        lane: ["roam"],
        tierScore: 4,
      },
      {
        name: "jawhead",
        role: ["fighter"],
        lane: ["roam"],
        tierScore: 4,
      },
      {
        name: "tigreal",
        role: ["tank"],
        lane: ["roam"],
        tierScore: 3,
      },
      {
        name: "grock",
        role: ["tank", "fighter"],
        lane: ["roam"],
        tierScore: 3,
      },
      {
        name: "ruby",
        role: ["fighter"],
        lane: ["roam"],
        tierScore: 3,
      },
      {
        name: "kaja",
        role: ["support", "fighter"],
        lane: ["roam"],
        tierScore: 2,
      },
      {
        name: "chou",
        role: ["fighter"],
        lane: ["roam"],
        tierScore: 2,
      },
      {
        name: "angela",
        role: ["support"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "lolita",
        role: ["support", "tank"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "mathilda",
        role: ["support", "assassin"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "khufra",
        role: ["tank"],
        lane: ["roam"],
        tierScore: 1,
      },
      {
        name: "edith",
        role: ["tank", "marksman"],
        lane: ["exp"],
        tierScore: 5,
      },
      {
        name: "hylos",
        role: ["tank"],
        lane: ["exp"],
        tierScore: 5,
      },
      {
        name: "grock",
        role: ["tank", "fighter"],
        lane: ["exp"],
        tierScore: 4,
      },
      {
        name: "ruby",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 4,
      },
      {
        name: "terizla",
        role: ["fighter", "tank"],
        lane: ["exp"],
        tierScore: 3,
      },
      {
        name: "phoveus",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 3,
      },
      {
        name: "arlott",
        role: ["fighter", "assassin"],
        lane: ["exp"],
        tierScore: 2,
      },
      {
        name: "chou",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 2,
      },
      {
        name: "gloo",
        role: ["tank"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "thamuz",
        role: ["fighter"],
        lane: ["exp"],
        tierScore: 1,
      },
      {
        name: "zhuxin",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 5,
      },
      {
        name: "zhask",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 5,
      },
      {
        name: "valentina",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 4,
      },
      {
        name: "aurora",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 4,
      },
      {
        name: "faramis",
        role: ["support", "mage"],
        lane: ["mid"],
        tierScore: 3,
      },
      {
        name: "luo yi",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 3,
      },
      {
        name: "vexana",
        role: ["mage"],
        lane: ["mid"],
        tierScore: 2,
      },
      {
        name: "ling",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 5,
      },
      {
        name: "roger",
        role: ["fighter", "marksman"],
        lane: ["jungle"],
        tierScore: 5,
      },
      {
        name: "fanny",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 5,
      },
      {
        name: "hayabusa",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 4,
      },
      {
        name: "nolan",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 4,
      },
      {
        name: "julian",
        role: ["fighter", "mage"],
        lane: ["jungle"],
        tierScore: 3,
      },
      {
        name: "xborg",
        role: ["fighter"],
        lane: ["jungle"],
        tierScore: 2,
      },
      {
        name: "lancelot",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "alpha",
        role: ["fighter"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "bane",
        role: ["fighter", "mage"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "joy",
        role: ["assassin"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "benedetta",
        role: ["assassin", "fighter"],
        lane: ["jungle"],
        tierScore: 1,
      },
      {
        name: "fredrinn",
        role: ["fighter", "tank"],
        lane: ["jungle"],
        tierScore: 1
      },
    ],
  },
];

export { WEEKS };
