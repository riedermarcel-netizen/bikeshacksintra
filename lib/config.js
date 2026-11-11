// Central place for business details that change per-launch.
// Everything marked TODO_REPLACE must be updated with real values before going live.

export const site = {
  name: "Bike Shack Sintra",
  domain: "https://bikeshacksintra.com",
  tagline: "From the forest to land’s end.",
};

export const film = {
  title: "Ride Your Dreams",
  vimeoId: "1245420467",
  credits: "Film by James & Nicole",
};

export const retreat = {
  nights: 6,
  price: "€2,390",
  maxRiders: 7,
  months2027: [
    { label: "March", tentative: true },
    { label: "April" },
    { label: "May" },
    { label: "June" },
    { label: "September" },
    { label: "October" },
  ],
};

export const brands = [
  "Bike Shack Sintra",
  "Bike Shack Alps",
  "Bike Shack Portugal",
  "Bike Shack Women",
  "Shack Stays",
];

export const contact = {
  whatsappNumber: "491753887321",
  email: "hello@bikeshacksintra.com",
};

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}`;

export const booking = {
  // TODO_REPLACE: Formspree form endpoint, e.g. "https://formspree.io/f/xxxxabcd"
  // Create a free form at https://formspree.io (50 submissions/month on the free tier)
  // and paste the endpoint URL it gives you here.
  formEndpoint: "https://formspree.io/f/xwloekvz",



};

// Partners shown on the homepage. Add `url` once confirmed; without it the name shows unlinked.
export const partners = [
  { name: "Ride Alpine Trails", role: "Guided enduro trips in the Alps", url: "https://www.ridealpinetrails.com" },
  { name: "808 Project", role: "Gravel trips through Portugal", url: "https://www.808project.de" },
  { name: "Flow Bike Shop Sintra", role: "Bike shop & rentals in Sintra", url: null },
  { name: "Fahrwerk Sonthofen", role: "Bike shop in the Allgäu", url: "https://www.fahrwerk-bikeservice.com" },
];

// Guest voices. Only real quotes, used with the guest's permission.
// Example shape: { quote: "…", name: "Meik", trip: "Dolomites to Trieste, 2026" }
export const testimonials = [];
