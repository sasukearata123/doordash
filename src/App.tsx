
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
      <div className='thirdpart'>
        <div>
          <div>
            Everything you crave, delivered.
          </div>
          <div>
            Your favorite local restaurants
          </div>
          <h2>
            Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.

          </h2>
          <button>
            Find restaurants
          </button>
        </div>
        <div>
          <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png" />

        </div>

      </div>
      <div className='thirdpart'>
        <div>
          <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png" />
          
        </div>
        <div>
          <div>
            DashPass is delivery for less
          </div>
          <div>
            Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.
          </div>
          
          <button>
            Get DashPass
          </button>
        </div>
        

      </div>
    </>
  )
}

export default App
