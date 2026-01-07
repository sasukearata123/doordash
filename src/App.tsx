
import './App.css'
import Logo from './Logo';

function App() {
  

  return (
    <>
      <div className='background'>
        <div className='sign'>
          <span className='signin'>Sign In</span>
          <span className='signup'>Sign Up</span>
        </div>
        <div>
          
          <div className='order'>
            <Logo />
            <div className='doordash'>DOORDASH</div>
          
            <h1 className='deli'>$0 DELIVERY FEE ON FIRST ORDER</h1>
            <span className='fees'>Other fees apply</span>
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
      <div className='secondpart'>
        <div>
          <h2> 
            Become a Dasher
          </h2>
          <div>
            As a delivery driver, make money and work on your schedule. Sign up in minutes.

          </div>
          <div>
            <button>
              Start earning
            </button>
          </div>

        </div>
        <div>
          <h2> 
            Become a Merchant
          </h2>
          <div>
            Attract new customers and grow sales, starting with 0% commissions for up to 30 days.

          </div>
          <button>
              Sign up for DoorDash

          </button>

        </div>
        <div>
          <h2> 
            Get the best DoorDash experience
          </h2>
          <div>
            Experience the best your neighborhood has to offer, all in one app.

          </div>
          <button>
              Get the app

          </button>

        </div>
      </div>
    </>
  )
}

export default App
