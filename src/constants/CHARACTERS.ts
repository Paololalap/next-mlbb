const CHARACTERS = [
  {
    name: "alice",
    role: ["tank", "mage"],
    lane: ["exp"],
  },
  {
    name: "tigreal",
    role: ["tank"],
    lane: ["roam"],
  },
  {
    name: "akai",
    role: ["tank"],
    lane: ["roam"],
  },
  {
    name: "franco",
    role: ["tank"],
    lane: ["roam"],
  },
  {
    name: "minotaur",
    role: ["tank", "support"],
    lane: ["roam"],
  },
  {
    name: "lolita",
    role: ["support", "tank"],
    lane: ["roam"],
  },
  {
    name: "hilda",
    role: ["fighter", "tank"],
    lane: ["roam"],
  },
  {
    name: "grock",
    role: ["tank", "fighter"],
    lane: ["roam"],
  },
  {
    name: "hylos",
    role: ["tank"],
    lane: ["roam"],
  },
  {
    name: "uranus",
    role: ["tank"],
    lane: ["exp"],
  },
  {
    name: "belerick",
    role: ["tank"],
    lane: ["roam"],
  },
  {
    name: "khufra",
    role: ["tank"],
    lane: ["roam"],
  },
  {
    name: "esmeralda",
    role: ["tank", "mage"],
    lane: ["exp"],
  },
  {
    name: "terizla",
    role: ["fighter", "tank"],
    lane: ["exp"],
  },
  {
    name: "baxia",
    role: ["tank"],
    lane: ["jungle"],
  },
  {
    name: "masha",
    role: ["fighter", "tank"],
    lane: ["exp"],
  },
  {
    name: "carmilla",
    role: ["support", "tank"],
    lane: ["roam"],
  },
  {
    name: "atlas",
    role: ["tank"],
    lane: ["roam"],
  },
  {
    name: "barats",
    role: ["tank", "fighter"],
    lane: ["jungle"],
  },
  {
    name: "gloo",
    role: ["tank"],
    lane: ["exp"],
  },
  {
    name: "edith",
    role: ["tank", "marksman"],
    lane: ["exp"],
  },
  {
    name: "fredrinn",
    role: ["fighter", "tank"],
    lane: ["jungle"],
  },
  {
    name: "chip",
    role: ["support", "tank"],
    lane: ["roam"],
  },
  {
    name: "johnson",
    role: ["tank", "support"],
    lane: ["roam"],
  },
  {
    name: "gatotkaca",
    role: ["tank", "fighter"],
    lane: ["roam"],
  },
  {
    name: "balmond",
    role: ["fighter"],
    lane: ["jungle"],
  },
  {
    name: "alucard",
    role: ["fighter", "assassin"],
    lane: ["jungle"],
  },
  {
    name: "bane",
    role: ["fighter", "mage"],
    lane: ["jungle"],
  },
  {
    name: "zilong",
    role: ["fighter", "assassin"],
    lane: ["exp"],
  },
  {
    name: "chou",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "sun",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "alpha",
    role: ["fighter"],
    lane: ["jungle"],
  },
  {
    name: "ruby",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "lapu-lapu",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "roger",
    role: ["fighter", "marksman"],
    lane: ["jungle"],
  },
  {
    name: "jawhead",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "martis",
    role: ["fighter"],
    lane: ["jungle"],
  },
  {
    name: "kaja",
    role: ["support", "fighter"],
    lane: ["roam"],
  },
  {
    name: "aldous",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "leomord",
    role: ["fighter"],
    lane: ["jungle"],
  },
  {
    name: "thamuz",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "minsitthar",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "badang",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "guinevere",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "xborg",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "dyrroth",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "silvanna",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "yu zhong",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "benedetta",
    role: ["assassin", "fighter"],
    lane: ["exp"],
  },
  {
    name: "khaleed",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "paquito",
    role: ["fighter", "assassin"],
    lane: ["exp"],
  },
  {
    name: "phoveus",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "yin",
    role: ["fighter", "assassin"],
    lane: ["jungle"],
  },
  {
    name: "julian",
    role: ["fighter", "mage"],
    lane: ["jungle"],
  },
  {
    name: "arlott",
    role: ["fighter", "assassin"],
    lane: ["exp"],
  },
  {
    name: "cici",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "freya",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "argus",
    role: ["fighter"],
    lane: ["exp"],
  },
  {
    name: "aulus",
    role: ["fighter"],
    lane: ["jungle"],
  },
  {
    name: "saber",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "karina",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "fanny",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "hayabusa",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "natalia",
    role: ["assassin"],
    lane: ["roam"],
  },
  {
    name: "yi sun-shin",
    role: ["assassin", "marksman"],
    lane: ["jungle"],
  },
  {
    name: "harley",
    role: ["assassin", "mage"],
    lane: ["jungle"],
  },
  {
    name: "lancelot",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "helcurt",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "lesley",
    role: ["marksman", "assassin"],
    lane: ["gold"],
  },
  {
    name: "gusion",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "selena",
    role: ["assassin", "mage"],
    lane: ["roam"],
  },
  {
    name: "hanzo",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "kadita",
    role: ["mage", "assassin"],
    lane: ["mid"],
  },
  {
    name: "ling",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "mathilda",
    role: ["support", "assassin"],
    lane: ["roam"],
  },
  {
    name: "aamon",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "joy",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "nolan",
    role: ["assassin"],
    lane: ["jungle"],
  },
  {
    name: "nana",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "eudora",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "gord",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "kagura",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "cyclops",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "aurora",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "vexana",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "odette",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "pharsa",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "valir",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "chang'e",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "vale",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "lunox",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "kimmy",
    role: ["marksman", "mage"],
    lane: ["gold"],
  },
  {
    name: "harith",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "faramis",
    role: ["support", "mage"],
    lane: ["mid"],
  },
  {
    name: "lylia",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "cecilion",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "luo yi",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "yve",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "valentina",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "xavier",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "novaria",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "zhuxin",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "zhask",
    role: ["mage"],
    lane: ["mid"],
  },
  {
    name: "miya",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "bruno",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "clint",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "layla",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "moskov",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "karrie",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "irithel",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "hanabi",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "claude",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "granger",
    role: ["marksman"],
    lane: ["jungle"],
  },
  {
    name: "wanwan",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "popol and kupa",
    role: ["marksman"],
    lane: ["jungle"],
  },
  {
    name: "brody",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "beatrix",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "natan",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "melissa",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "ixia",
    role: ["marksman"],
    lane: ["gold"],
  },
  {
    name: "rafaela",
    role: ["support"],
    lane: ["roam"],
  },
  {
    name: "estes",
    role: ["support"],
    lane: ["roam"],
  },
  {
    name: "diggie",
    role: ["support"],
    lane: ["roam"],
  },
  {
    name: "angela",
    role: ["support"],
    lane: ["roam"],
  },
  {
    name: "floryn",
    role: ["support"],
    lane: ["roam"],
  },
  {
    name: "suyou",
    role: ["assassin", "fighter"],
    lane: ["jungle"],
  },
];

export { CHARACTERS };
