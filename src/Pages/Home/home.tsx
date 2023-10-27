import Carousel from "../../Components/Carousel/carousel "
import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import Offers from "../../Components/Offers/offers"
import PayMentMethod from "../../Components/PayMethod/payMethod"
import Section from "../../Components/Section/section"

function Home() {

    return (
     <div>
      <Header />
      <Section />
      <PayMentMethod />
      <Carousel />
      <Offers />
      <Footer />
     </div>
    )
  }
  
  export default Home