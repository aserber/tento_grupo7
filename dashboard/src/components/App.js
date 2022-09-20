import '../assets/css/app.css';
import Sidebar from './SideBar/SideBar';
import ContentWrapper from './ContentWrapper/ContentWrapper'

function App() {
  return (
    <div>
        <div id="wrapper">
          {/* Sidebar */}
          <Sidebar />
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <ContentWrapper />
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
</div>

  );
}

export default App;
