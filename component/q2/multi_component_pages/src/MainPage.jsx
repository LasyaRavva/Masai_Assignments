import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function MainPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default MainPage;
