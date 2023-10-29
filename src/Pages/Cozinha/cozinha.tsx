import CozinhaComponent from "../../Components/CozinhaComponent/cozinhaComponet"
import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import PayMentMethod from "../../Components/PayMethod/payMethod"
import Section from "../../Components/Section/section"

function Cozinha() {

    return (
     <div>
      <Header />
      <Section />
      <PayMentMethod />
      <CozinhaComponent />
      <Footer />
     </div>
    )
  }
  
  export default Cozinha