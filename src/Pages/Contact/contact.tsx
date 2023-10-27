
import ContactForm from "../../Components/ContactForm/contactForm"
import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import PayMentMethod from "../../Components/PayMethod/payMethod"

function Contact() {

    return (
     <div>
      <Header />
      <ContactForm />
      <PayMentMethod />
      <Footer />
     </div>
    )
  }
  
  export default Contact