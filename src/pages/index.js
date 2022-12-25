import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Search from "../components/Search"
// import NavMenu from "../components/menu/menu"
// import Header from "../components/header"
// import Footer from "../components/footer"
// import ScrollToTop from "../components/scrollToTop"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    {/* <Header></Header> */}
    <Layout title="Front End Feeds" pageTitle="Front End Feeds">
      <div className="container">
        <Search></Search>
      </div>
    </Layout>
    {/* <ScrollToTop showBelow={250}></ScrollToTop>
    <Footer></Footer> */}
  </>
)

export default IndexPage
