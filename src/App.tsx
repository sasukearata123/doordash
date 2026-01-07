
import './App.css'
function App() {
  

  return (
    <>
      <div className='background'>
        <div className='sign'>
          <span className='signin'>Sign In</span>
          <span className='signup'>Sign Up</span>
        </div>
        <div>
          <div>
            <svg viewBox="">
              <path d="" />
            </svg>
            <div>DOORDASH</div>
          </div>
          <div>
            <h1>$0 DELIVERY FEE ON FIRST ORDER</h1>
            <span>Other fees apply</span>
          </div>
          <div>
            <input type="text" placeholder="Enter delivery address" />
            <button>
              <svg>
                <path>
                </path>
              </svg>
            </button>
          </div>
          <div>
            <button>
              Login
            </button>
            <button>
              Use current location
            </button>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
