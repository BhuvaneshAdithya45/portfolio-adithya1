import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>

      <div className="flex flex-col gap-8 bg-brown p-8 rounded-2xl lg:flex-row">
        {/* Contact Left and Right */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <ContactMeLeft />
          <ContactMeRight />
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:bhuvaneshadithya294@gmail.com"
              className="text-teal-400 hover:underline"
            >
              bhuvaneshadithya294@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/BhuvaneshAdithya45"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              github.com/bhuvanesh
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/bhuvanesh-gowda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              linkedin.com/in/bhuvanesh-gowda
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
