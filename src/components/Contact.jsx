import React from "react";

const Contact = () => (
  <section id="contact" className="py-20 px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Contact</h2>

     <p className="text-text mb-5">Phone: <a className="text-primary hover:underline">+88 01778157278</a></p>

    <p className="text-text mb-6">You can reach me via email: <a href="mailto:souravmondol135@gmail.com" className="text-primary hover:underline">souravmondol135@gmail.com</a></p>
    <form className="flex flex-col max-w-xl mx-auto gap-4">
      <input type="text" placeholder="Your Name" className="p-2 border border-primary rounded-lg bg-background text-text" />
      <input type="email" placeholder="Your Email" className="p-2 border border-primary rounded-lg bg-background text-text" />
      <textarea placeholder="Your Message" className="p-2 border border-primary rounded-lg bg-background text-text"></textarea>
      <button type="submit" className="bg-primary text-background px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition hover:scale-110">Send Message</button>
    </form>
  </section>
);

export default Contact;
