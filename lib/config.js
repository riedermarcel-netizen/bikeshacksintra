// Central place for business details that change per-launch.
// Everything marked TODO_REPLACE must be updated with real values before going live.

export const site = {
  name: "Bike Shack Sintra",
  domain: "https://bikeshacksintra.com",
  tagline: "Ride better. Explore deeper.",
};

export const contact = {
  whatsappNumber: "491753887321",
  email: "hello@bikeshacksintra.com",
};

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}`;

export const booking = {
  // TODO_REPLACE: Formspree form endpoint, e.g. "https://formspree.io/f/xxxxabcd"
  // Create a free form at https://formspree.io (50 submissions/month on the free tier)
  // and paste the endpoint URL it gives you here.
  formEndpoint: "https://formspree.io/f/TODO_REPLACE",

  // Deposit charged via Stripe Checkout to secure a requested date.
  // TODO_REPLACE: confirm the real deposit amount before going live.
  depositAmountCents: 5000, // €50.00
  depositCurrency: "eur",
};
