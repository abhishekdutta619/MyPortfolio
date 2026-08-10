// Real LinkedIn recommendation. LinkedIn's own API doesn't expose
// recommendations publicly, so these are copied by hand from the
// profile's Recommendations tab -- update manually as new ones come in.
export interface Testimonial {
  id: string;
  quote: string; // paragraphs separated by \n\n, rendered as separate <p> tags
  name: string;
  role: string;
  linkedInUrl?: string; // omit rather than guess if you don't have their profile URL handy
}

export const testimonials: Testimonial[] = [
  {
    id: "jake-madrigal",
    quote:
      "I had the opportunity to work with Abhishek for five years at Annex Cloud, where he was a software developer and a trusted partner to our Customer Success team. He regularly supported us on the front lines, helping debug complex issues for key customers and working quickly to identify solutions.\n\nAbhishek was always willing to jump in and help, and he consistently kept the customer's needs in mind. His technical expertise, responsiveness, and collaborative approach made him a valuable partner to both our team and our customers. I really enjoyed working with Abhishek and would recommend him to any team looking for a skilled and customer-focused developer.",
    name: "Jake Madrigal",
    role: "VP of Customer Success, Badge",
    // linkedInUrl not set -- add Jake's profile URL here if you want the
    // LinkedIn icon on the card to actually link somewhere. Without it,
    // the component just omits the icon rather than linking nowhere.
  },
];
