import { Link } from "react-router-dom";

const Contact = () => {
  const contactData = {
    name: 'Alyssa Grey',
    email: 'alyssagreyinquiries@gmail.com',
    linktree: 'https://linktr.ee/alyssagrey'
  };

  return (
    <div style={{color: 'white'}}>
      <h2>Contact me</h2>
      <p><strong></strong> {contactData.name}</p>
      <p><strong>Email:</strong> {contactData.email}</p>
      <Link style={{textDecoration: 'none'}} to={contactData.linktree}><p><strong>Linktree</strong></p></Link>
    </div>
  );
};

export default Contact;
