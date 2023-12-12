import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  emailjs.init("EAfi-a877NAIhgLbE");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.message.value);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    setIsLoading(true);
    emailjs.send("service_tsbphxf", "template_258qpyp", data).then(
      function (response) {
        console.log("Email sent successfully:", response);
        setIsMessageSent(true);
        setIsLoading(false);
      },
      function (error) {
        console.error("Email not sent, error:", error);

        setIsLoading(false);
      }
    );
  };
  return (
    <Wrapper id="contact">
      <h2 className="overline">What’s Next?</h2>
      <h2 className="title">Contact</h2>
      {isMessageSent ? (
        <p className="mt-20 font-bold text-lg text-white max-w-sm mx-auto">
          Thank you; I have received your message and will be in touch with you
          shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-20">
          <input
            type="text"
            className="px-3 py-4 rounded-xl bg-transparent text-white border w-full border-slate-600"
            name="name"
            required
            placeholder="Your Name"
            id=""
          />
          <input
            type="email"
            className="px-3 py-4 rounded-xl bg-transparent text-white border w-full border-slate-600"
            name="email"
            required
            placeholder="Your Email"
            id=""
          />
          <textarea
            type="email"
            required
            className="px-3 min-h-[150px] py-4 rounded-xl text-white bg-transparent border w-full border-slate-600"
            name="message"
            placeholder="Your Message"
            id=""
          />
          <button disabled={isLoading} type="submit" className="email-link">
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </form>
      )}
    </Wrapper>
  );
};

export default Contact;
const Wrapper = styled.section`
  max-width: 600px;
  padding: 0px 0 100px 0;
  text-align: center;
  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }
  .overline::before {
    bottom: 0px;
    font-size: var(--fz-sm);
  }
  /* .overline::before {
    position: relative;
    bottom: 0px;
    counter-increment: section 4;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 3vw, var(--fz-sm));
    margin-top: 15px;
    font-weight: 400;
  } */
  .title {
    font-size: clamp(40px, 5vw, 40px);
  }
  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;
  }
  .email-link:hover {
    background-color: var(--green-tint);
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    margin: 0px auto 50px;
  }
`;
