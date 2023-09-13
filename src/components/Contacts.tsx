import { ContactData } from "../data/contacts"
import { useEffect, useRef, useState } from "react"

export const Contacts = () => {

  const itemRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const itemPosition = itemRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contacts">
      <div className={`container ${isScrolled ? 'animate-container' : 'opacity'}`}>
        <h1 className="text-title">
          Contatos
          <div className="bar-title"></div>
        </h1>
        <ul>
          <div className="contact-container-extern" ref={itemRef}>
            {ContactData.map((contact, index) => (
              <div key={index} className="container-contacts">
                <a href={contact.link} target="_blank">
                  <li className="container-contacts-item">
                    <div className="contact-container-img">
                      <img src={contact.image} alt={contact.name} />
                    </div>
                    <h1 className="contact-title">{contact.name}</h1>
                    <p className="contact-desc">{contact.contact}</p>
                  </li>
                </a>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  )
}