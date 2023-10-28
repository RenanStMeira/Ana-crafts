import CaminhoComponent from "../../Components/CaminhoComponent/caminhoComponent"
import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import PayMentMethod from "../../Components/PayMethod/payMethod"
import Section from "../../Components/Section/section"

function Caminho() {

    return (
     <div>
      <Header />
      <Section />
      <PayMentMethod />
      <CaminhoComponent />
      <Footer />
     </div>
    )
  }
  
  export default Caminho