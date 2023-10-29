import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import PassadeiraComponent from "../../Components/PassadeirasComponet/passadeiraComponent"
import PayMentMethod from "../../Components/PayMethod/payMethod"
import Section from "../../Components/Section/section"

function Passadeira() {

    return (
     <div>
      <Header />
      <Section />
      <PayMentMethod />
      <PassadeiraComponent />
      <Footer />
     </div>
    )
  }
  
  export default Passadeira