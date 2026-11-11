// Journal stories. Facts come from the trips themselves; images live in /public/images/journal.
// Block types: text {heading?, lead?, paras[]}, figure {src, alt, caption?, ratio?},
// grid {items:[{src,alt}], ratio?, min?}, wide {src, alt, height?}

const F = (n) => `/images/journal/friaul-${n}.jpg`;
const M = (n) => `/images/journal/monterosa-${n}.jpg`;
const Z = (n) => `/images/journal/zinnen-${n}.jpg`;

export const stories = [
  {
    slug: "friuli-three-borders",
    title: "Three borders, one week",
    place: "Friuli, Italy",
    date: "August 2026",
    hero: F("08"),
    heroAlt: "A rider descending a steep rocky ridge into the fog",
    intro:
      "An enduro week in the far north-east of Italy, where Friuli meets Austria and Slovenia. Seven riders, two guides, a different mountain every day.",
    photo: "Manfred Stromberg",
    blocks: [
      {
        type: "text",
        lead: "Every morning started the same way: a map spread across the bonnet of the van, coffee still too hot, and a plan that was really only a first guess. In the Julian Alps the weather decides the route, and the clouds rarely sit where the forecast says.",
        paras: [
          "Home for the week was the upper Val Canale, a quiet valley that most people only drive through on the way to somewhere else. Small family guesthouses, breakfast before the shuttle, a set dinner and a cold local beer at night. Nothing fancy, and exactly right.",
        ],
      },
      { type: "figure", src: F("13"), alt: "Guide and riders planning the day over a large paper map", caption: "The plan for the day, decided on the bonnet." },
      { type: "grid", ratio: "4 / 5", items: [
        { src: F("04"), alt: "Trail signpost to Sella Nevea and Monte Canin with limestone peaks behind" },
        { src: F("03"), alt: "Six riders in a line on a grassy alpine traverse" },
      ] },
      {
        type: "text",
        heading: "Limestone above, beech forest below",
        paras: [
          "Up high it’s open grass and white rock, with the walls of Monte Canin always somewhere in view. Lower down the trails drop into beech and pine: roots, leaves and soft dirt, the kind of riding where you stop thinking and start flowing.",
          "Kanin, above Sella Nevea, is the moonscape: pale rock, almost no green, and lines you pick stone by stone. Around Malborghetto the trails change character every few hundred metres. And under the Plöckenpass, on the Austrian border, the riding turns slow and technical, with the north face of Monte Coglians filling the view whenever you dare to look up.",
        ],
      },
      { type: "wide", src: F("14"), alt: "Panorama of green ridges and limestone peaks in the Julian Prealps", height: 420 },
      { type: "grid", items: [
        { src: F("06"), alt: "Marcel cornering hard past the roots of a large beech tree" },
        { src: F("20"), alt: "Marcel riding through a beech forest" },
      ] },
      { type: "figure", src: F("19"), alt: "Marcel holding a manual through a grassy clearing in a pine forest", caption: "Front wheel up, because the trail allowed it." },
      { type: "grid", ratio: "4 / 5", min: 260, items: [
        { src: F("02"), alt: "Marcel lifting the front wheel between beech trunks" },
        { src: F("07"), alt: "Marcel riding over beech roots toward the camera" },
        { src: F("10"), alt: "Marcel leaning hard into a turn on a steep forest trail" },
      ] },
      { type: "grid", items: [
        { src: F("05"), alt: "A rider coming down a grassy singletrack between pine trunks" },
        { src: F("12"), alt: "Marcel leading riders through a pine forest" },
      ] },
      {
        type: "text",
        heading: "The small things in between",
        paras: [
          "A guide’s best work often happens off the bike: a crouched conversation about brake levers, a hint on where to look in the next turn, and the decision to stop for lunch before anyone asks.",
        ],
      },
      { type: "grid", captions: true, items: [
        { src: F("09"), alt: "Marcel and a rider kneeling by a bike, talking through the setup", caption: "Five minutes on setup, a better afternoon." },
        { src: F("17"), alt: "Riders preparing bread, cheese and ham outside a stone hut", caption: "Lunch on the steps of a hut." },
      ] },
      {
        type: "text",
        heading: "Why we go back",
        paras: [
          "Friuli is still one of the quiet corners of the Alps. No lift queues, no bike-park crowds, long descents you have to yourselves. Seven riders, two guides and a week of mountains most people never hear of. That’s the kind of trip we like to plan.",
        ],
      },
      { type: "grid", items: [
        { src: F("15"), alt: "A limestone peak wrapped in cloud above the Julian Prealps" },
        { src: F("11"), alt: "The group smiling on a summit with mountain ranges behind" },
      ] },
      { type: "wide", src: F("01"), alt: "The group with their bikes on a grassy ridge under towering clouds", height: 680 },
    ],
  },
  {
    slug: "dolomites-to-trieste",
    title: "From the Three Peaks to the sea",
    place: "Dolomites to Trieste",
    date: "August 2026",
    hero: Z(5),
    heroAlt: "The Tre Cime di Lavaredo under a deep blue sky",
    intro:
      "An enduro traverse from the Tre Cime di Lavaredo to the Adriatic: the Dolomites, Friuli, a slice of Slovenia, and five final trails down to Trieste.",
    photo: "Eric Haufe",
    blocks: [
      {
        type: "text",
        lead: "Few trips start with a view like this. On the first morning the Tre Cime stood right in front of us, and for a moment nobody was in a hurry to ride away from them.",
        paras: [
          "From there the route ran east through quiet forest towards the source of the Tagliamento. High up the trails were rocky and technical; lower down they turned soft and fast under the trees.",
        ],
      },
      { type: "grid", items: [
        { src: Z(3), alt: "Jagged Dolomite peaks rising out of drifting cloud" },
        { src: Z(4), alt: "A rocky plateau with Dolomite towers and clouds in the distance" },
      ] },
      {
        type: "text",
        heading: "Into the Friulian Dolomites",
        paras: [
          "Further east the mountains get wilder and emptier. Old military paths cling to steep slopes along the Slovenian border, and they ride far better than they look.",
        ],
      },
      { type: "grid", ratio: "4 / 5", min: 260, items: [
        { src: Z(2), alt: "A huge pale rock face towering over a trail in the Dolomites" },
        { src: Z(6), alt: "Grey limestone towers half wrapped in cloud" },
        { src: Z(1), alt: "Bare limestone ridges under a bright sky" },
      ] },
      {
        type: "text",
        heading: "Slovenia, pizza and wine",
        paras: [
          "Out of the mountains, the trip changed character: a day crossing into Slovenia, the turquoise Soča, and in Gorizia a pizza that set a new standard for the whole group.",
          "Above the Vipava Valley the trails ran across a high plateau of meadows and woods, and the evening ended with dinner at a winery.",
        ],
      },
      { type: "figure", src: Z(8), alt: "The group resting in the shade of a tree on a dry meadow", caption: "Shade, finally." },
      { type: "grid", items: [
        { src: Z(7), alt: "Golden grass on a high meadow with mountains on the horizon" },
        { src: Z(10), alt: "Green hills and pines above a valley in Slovenia" },
      ] },
      {
        type: "text",
        heading: "Down to Trieste",
        paras: [
          "The last day started on a border mountain and ended at the sea: five trails one after another, down through gorges, with the Adriatic getting bigger each time the trees opened up.",
        ],
      },
      { type: "wide", src: Z(9), alt: "View over pine trees to the Adriatic coast near Trieste", height: 520 },
      {
        type: "text",
        heading: "Why we go back",
        paras: [
          "Mountains in the morning, the sea at the end, and three countries in one week. A traverse like this only works with a group that wants the whole journey, not just the descents.",
        ],
      },
    ],
  },
  {
    slug: "monte-rosa-lake-to-glacier",
    title: "Lake to glacier",
    place: "Monte Rosa, Italy",
    date: "September 2026",
    hero: M(49),
    heroAlt: "A rider descending a rocky ridge with the Monte Rosa glaciers behind",
    intro:
      "One week from the warm hills above Lake Maggiore, across the Monte Rosa massif, to Aosta. Seven riders, two guides, and a mountain that rarely took its clouds off.",
    photo: "Eric Haufe",
    blocks: [
      {
        type: "text",
        lead: "It started hot. The first trails twisted through the hills behind Lake Maggiore, steep and technical, with the lake shimmering somewhere below and everyone already looking for shade.",
        paras: [
          "The first night was in Quarna di Sotto, a small village above the lake, with a dinner far better than anyone expected from a place that size. Over Monte Mottarone and up the long climb to the Massa del Turlo, the riding opened up: ridgelines first, then a long descent through forest into Val Sesia.",
        ],
      },
      { type: "grid", items: [
        { src: M(18), alt: "A dry singletrack past a dead tree in the hills above Lake Maggiore" },
        { src: M(17), alt: "Riders on a grassy summit ridge under a deep blue sky" },
      ] },
      { type: "grid", items: [
        { src: M(21), alt: "The group resting below a summit cross above the clouds" },
        { src: M(15), alt: "A rider dropping off a rock with snow-capped peaks behind" },
      ] },
      {
        type: "text",
        heading: "Shoulders, then wheels",
        paras: [
          "Some days the mountain decides how you get there. The way up to the Mantova hut, high under the Monte Rosa glaciers, was on foot, bikes on shoulders, one step at a time over rock and scree.",
          "That night was spent at altitude. In the morning the valleys were full of cloud, with the ice right above us.",
        ],
      },
      { type: "figure", src: M(1), alt: "Riders carrying their bikes up a rocky slope under a blue sky", caption: "The only way up to the Mantova hut.", ratio: "4 / 5" },
      { type: "grid", items: [
        { src: M(5), alt: "Glacier and ice fields of Monte Rosa under heavy cloud" },
        { src: M(29), alt: "A rider lifting the front wheel on rock above a glacier" },
      ] },
      { type: "wide", src: M(4), alt: "Morning light over a sea of clouds below the Mantova hut", height: 480 },
      {
        type: "text",
        heading: "From Bettaforca to Tournalin",
        paras: [
          "A lift, a Land Rover shuttle and a flowing forest trail after the Bettaforca. An easier day, and a welcome one. The night after was at the Rifugio Tournalin, where the hosts made it feel less like a hut and more like being invited home.",
        ],
      },
      { type: "grid", ratio: "4 / 5", min: 260, items: [
        { src: M(24), alt: "Riders and bikes inside a cable car cabin" },
        { src: M(9), alt: "The Monte Rosa massif emerging from clouds" },
        { src: M(31), alt: "A small glacial lake between grey boulders" },
      ] },
      {
        type: "text",
        heading: "Zerbion, larches and Aosta",
        paras: [
          "The Roisetta day was long, mostly walking, with the summit lost in cloud the whole time. Pizza and pasta in Valtournenche fixed that.",
          "Then Monte Zerbion: a full circle of peaks from the top, a ridge to start, and a long run down through larch forest to Châtillon. The week ended in Aosta with an aperitivo and dinner at an osteria that knows how to feed hungry riders.",
        ],
      },
      { type: "grid", items: [
        { src: M(45), alt: "A pyramid-shaped peak above a long ridge under a pale sky" },
        { src: M(47), alt: "The group relaxing on a rocky terrace with snowy peaks behind" },
      ] },
      { type: "wide", src: M(50), alt: "A wide view over the Aosta Valley from a grassy summit", height: 560 },
      {
        type: "text",
        heading: "Why we go back",
        paras: [
          "Monte Rosa is not an easy week. Some trails you earn by carrying, some days the mountain stays hidden. That is exactly why it stays with you.",
        ],
      },
    ],
  },
];

export function getStory(slug) {
  return stories.find((s) => s.slug === slug);
}
