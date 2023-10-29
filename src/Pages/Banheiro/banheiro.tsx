import BanheiroComponent from "../../Components/BanheiroComponent/banheiroComponet"
import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import PayMentMethod from "../../Components/PayMethod/payMethod"
import Section from "../../Components/Section/section"

function Banheiro() {

    return (
     <div>
      <Header />
      <Section />
      <PayMentMethod />
      <BanheiroComponent />
      <Footer />
     </div>
    )
  }
  
  export default Banheiro