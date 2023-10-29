import AccountComponent from "../../Components/Account/account"
import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import PayMentMethod from "../../Components/PayMethod/payMethod"
import Section from "../../Components/Section/section"

function Account() {

    return (
     <div>
      <Header />
      <Section />
      <PayMentMethod />
      <AccountComponent />
      <Footer />
     </div>
    )
  }
  
  export default Account