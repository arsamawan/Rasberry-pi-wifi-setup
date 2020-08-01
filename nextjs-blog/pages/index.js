import Head from 'next/head'
export default function Home() {

  function firstScript() {

<<<<<<< HEAD
  }
  function secondScript() {}
  function thirdScript() {}
  function fourthScript() {}
  function fifthScript() {}
  function sixthScript() {}
  function seventhScript() {}
  function eighthScript() {}
=======



export default function Home() {
  
  function firstScript() {
    fetch('http://127.0.0.1:3001/autohospot_internet').then(response => {
      return response;})
  }
  function secondScript() {
    fetch('http://127.0.0.1:3001/autohotspot_direct').then(response => {
      return response;})
  }
  function thirdScript() {
    fetch('http://127.0.0.1:3001/static_hotspot').then(response => {
      return response;})
  }
  function fourthScript() {
    fetch('http://127.0.0.1:3001/remove_autohotspot_or_static_hotspot').then(response => {
      return response;})
  }
  function fifthScript() {
    fetch('http://127.0.0.1:3001/change_add_wifi_network').then(response => {
      return response;})
  }
  function sixthScript() {
    fetch('http://127.0.0.1:3001/force_hotspot_force_network').then(response => {
      return response;})
  }
  function seventhScript() {
    fetch('http://127.0.0.1:3001/change_hotspot_sSID_and_password').then(response => {
      return response;})


      // const withImages = require('next-images')
      // module.exports = withImages()
    
    // const img = require("/121.png");   
  }
  let styleConfig = { backgroundimage : '/abc.jpeg' }

  
>>>>>>> bc716e2ecab9ff02754f3ce9c36268adc7191635
  return (

      
    <div className="container"  style={styleConfig} >
      <Head>
        <title>Rasberry-pi-wifi-setup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
      

        <h1 className="title">
          Respberry Pie Auto Wifi!
        </h1>

<<<<<<< HEAD
        <div className="grid">
            <button  className="card" onClick={firstScript}>1</button>
            <button className="card" onClick={secondScript}>2</button>
            <button  className="card" onClick={thirdScript}>3</button>
            <button className="card" onClick={fourthScript}>4</button>
            <button className="card" onClick={fifthScript}>5</button>
            <button className="card" onClick={sixthScript}>6</button>
            <button className="card" onClick={seventhScript}>7</button>
            <button className="card" onClick={eighthScript}>8</button>
=======


        <div className="grid" >
            <button  className="card" onClick={firstScript}>Autohospot Internet</button>
            <button className="card" onClick={secondScript}>Autohotspot Direct</button>
            <button  className="card" onClick={thirdScript}>Static Hotspot</button>
            <button className="card" onClick={fourthScript}>Remove Autohotspot or Static Hotspot</button>
            <button className="card" onClick={fifthScript}>Change/Add Wifi Network</button>
            <button className="card" onClick={sixthScript}>Force Hotspot</button>
            <button className="card" onClick={seventhScript}>Change Hotspot SSID and Password</button>
>>>>>>> bc716e2ecab9ff02754f3ce9c36268adc7191635
        </div>

      </main>


      <style jsx>{`
<<<<<<< HEAD

=======
       
       
>>>>>>> bc716e2ecab9ff02754f3ce9c36268adc7191635
        .container {
          back  
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
<<<<<<< HEAD
         
=======
          background-image : "/public/121.png"
>>>>>>> bc716e2ecab9ff02754f3ce9c36268adc7191635
        }
        

        main {
 
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }
        

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        
      `}</style>



      <style jsx global>{`
        html,
        body {

          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
