import React from "react"
import Seo from "../components/seo"
import PropTypes from "prop-types"
// import Footer from "./footer"
// import ScrollToTop from "./scrollToTop"
import "./layout.css"

const Layout = ({ children, title, pageTitle }) => {
  return (
    <>
      <Seo title={title} />
      <header>
        <h1>
          {pageTitle.substring(0, 9)}{" "}
          <strong>{pageTitle.substring(10, 15)}</strong>
        </h1>
        <svg
          fill="#efe7da"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM128 416c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      </header>
      <main>
        <section>
          <div>{children}</div>
        </section>
      </main>
      {/* <ScrollToTop showBelow={250}></ScrollToTop>
      <Footer></Footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.node.isRequired,
}

export default Layout
