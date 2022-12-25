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
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm64 120c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
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
