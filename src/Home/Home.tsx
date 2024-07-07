import Navbar from '../Navbar/Navbar';
import './Home.css'

function Home() {

  return (
    <>
      <Navbar />
      <main className='main-content'>
      <h1>Web Accessibility 101: Common Issues and Solutions</h1>
      <p>
        Explore side-by-side comparisons of inaccessible and accessible web elements. Learn how to build a more inclusive digital world
      </p>
      </main>
    </>
  )
}

export default Home;
