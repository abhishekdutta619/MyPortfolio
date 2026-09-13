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
    linkedInUrl: "https://www.linkedin.com/in/jake-madrigal-39360947/",
    // LinkedIn icon on the card to actually link somewhere. Without it,
    // the component just omits the icon rather than linking nowhere.
  },
  {
    id: "suyog-devale",
    quote:
      "I had the opportunity to work with Abhishek and lead him as part of the UI development team. He is technically strong, especially in UI and frontend technologies, and has excellent communication skills.\n\nAbhishek is a highly reliable and dedicated team member who always takes ownership of his work. Even during critical situations or after working hours, he was always willing to support the team and never hesitated to take on additional responsibilities.\n\nHis positive attitude, teamwork, and technical expertise made him a valuable member of the team. I would highly recommend Abhishek for his skills, dedication, and professionalism.",
    name: "Suyog Devale",
    role: "Product Manager, AGCO",
    linkedInUrl: "https://www.linkedin.com/in/suyog-devale-31380168/",
  },
  {
    id: "yasenia-leanos",
    quote:
      "I had the pleasure of working with Abhishek and can speak firsthand to his skill as a front-end engineer and his dedication to client success. He regularly supported iFrame updates for our customers, and his knowledge in this area made a real difference — he consistently got these right and handled them efficiently.\n\nWhat set Abhishek apart was his willingness to go beyond his core responsibilities. When clients ran into issues on their own websites that fell outside our scope, he didn't just point them elsewhere — he'd dig in, troubleshoot, and offer clear recommendations to help resolve them. On more than one occasion, he joined client calls directly to walk through technical issues in real time, which built a lot of trust with our accounts.\n\nAbhishek is knowledgeable, dependable, and genuinely invested in doing right by the customer. Any team would be lucky to have him.",
    name: "Yasenia Leanos",
    role: "Account Management, AI-Powered Public Affairs SaaS",
    linkedInUrl: "https://www.linkedin.com/in/yasenia-leanos/",
  }

];
