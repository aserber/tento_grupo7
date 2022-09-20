import React from "react";
import Footer from "./Footer/Footer";
import TopBar from "./TopBar/TopBar";
import ContentRowTop from "./ContentRowTop/ContentRowTop";

function ContentWrapper (){
    return(
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Content Wrapper */}
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <TopBar />
              {/* End of Topbar */}
              {/* Content Row Top */}
              <ContentRowTop />
              {/*End Content Row Top*/}
            </div>
            {/* End of MainContent */}
            {/* Footer */}
            <Footer />
            {/* End of Footer */}
          {/* End of Content Wrapper */}
          </div>
    )
}

export default ContentWrapper