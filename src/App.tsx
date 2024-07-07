import './App.css'

function App() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                PB + J
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#" className="navbar-link">Inaccessible</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">Accessible</a></li>
            </ul>
        </div>
    </nav>
      <main className='main-content'>
      <h1>Web Accessibility 101: Common Issues and Solutions</h1>
      <p>
        Explore side-by-side comparisons of inaccessible and accessible web elements. Learn how to build a more inclusive digital world
      </p>
      </main>
    </>
  )
}

export default App
