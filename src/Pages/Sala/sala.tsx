import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import PayMentMethod from "../../Components/PayMethod/payMethod"
import SalaComponent from "../../Components/Sala/SalaComponent"
import Section from "../../Components/Section/section"

function Sala() {

    return (
     <div>
      <Header />
      <Section />
      <PayMentMethod />
      <SalaComponent />
      <Footer />
     </div>
    )
  }
  
  export default Sala