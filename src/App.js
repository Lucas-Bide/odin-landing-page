import psilocybe from './images/main.jpeg';
import redShroom from './images/red.jpeg';
import blueShroom from './images/blue.jpeg';
import yellowShroom from './images/yellow.jpg';
import purpleShroom from './images/purple.jpeg';

import './App.css';

function SignUpBtn(props) {
  let classes = "bg-[#3882f6] px-5 rounded-sm";

  if (props.value === "call")
    classes += " border-[#f9faf8] border";
  
  return (
    <button className={classes}>
      <a href="#">Sign up</a>
    </button>
  );
}

function MushCard(props) {
  return (
    <div className='flex flex-col w-[150px]'>
      <div className=''><img className=' h-[150px] border-[#3882f6] border-[3px] rounded-lg' src={props.img} alt="${props.altd} shroom"/></div>
      <p className='text-[18px] font-thin'>{props.desc}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App font-['Roboto'] bg-[#f9faf8]  rounded border-[1]">
      
      <header className='flex justify-between  items-baseline bg-[#1F2937] text-[#f9faf8] h-16 py-3 px-[15%]'>
        <span className='text-[24px]'>Shroomies</span>
        <ul className='flex font-thin'>
          <li><a href="#" className='hover:text-[#3882f6]'>About</a></li>
          <li><a href="#" className='pl-3 hover:text-[#3882f6]'>Glossary</a></li>
          <li><a href="#" className='pl-3 hover:text-[#3882f6]'>Plans</a></li>
        </ul>
      </header>

      <div className='flex gap-10 bg-[#1F2937] text-[#f9faf8] pb-16 pt-10 px-[15%]'>
        <div className='basis-1/2 flex flex-col items-start'>
          <h1 className='font-black text-[48px] text-left leading-[50px]'>Look at these colorful fungi</h1>
          <p className='text-left text-[18px] text-[#e5e7eb] font-thin'>Mushrooms come in a variety of vibrant colors. You have blue, red, yellow, green, white, and black, to name a few. Want to learn how to distinguish them?</p>
          <SignUpBtn />
        </div>
        <div className='basis-1/2'><img  className='h-[220px] w-full' src={psilocybe} alt="psilocybe shrooms" /></div>
      </div>

      <div className='text-[#1f2937] pt-10 pb-20 px-[15%]'>
        <h1 className='text-[24px] font-black pb-10'>Check These Out</h1>
          <div className='text-[18px] flex justify-center gap-3'>
              <MushCard 
                img={blueShroom}
                alt={'blue'}
                desc={'A pretty shroom'}
              />
              <MushCard 
                img={redShroom}
                alt={'red'}
                desc={'Looks like someone has a bit of a temper.'}
              />
              <MushCard 
                img={yellowShroom}
                alt={'yellow'}
                desc={"When the sun don't shine for you, look at this, instead."}
              />
              <MushCard 
                img={purpleShroom}
                alt={'purple'}
                desc={"You just know you can't eat this. No touchy."}
              />
          </div>
      </div>


      <blockquote className="bg-[#e5e7eb] text-[#1f2937] py-20 px-[15%]">
        <p className='text-[36px] font-thin italic'>I believe that mycelium is the neurological network of nature. Interlacing mosaics of mycelium infuse habitats with information-sharing membranes.</p>
        <p className='text-[24px] text-right pr-4'><cite className='not-italic'>- Paul Stamets in "Mycelium Running"</cite></p>
      </blockquote>

      <div className='py-20 px-[15%]'>
        <div className="bg-[#3882f6] text-[#f9faf8] flex justify-between items-center px-12 py-8 rounded-xl">
          <div className='grow-[2] text-left'>
            <h1 className='text-[24px]'>Learn Mycology!</h1>
            <p className='text-[18px] font-thin'>Purchase a subscription to this course now!</p>
          </div>
          <div><SignUpBtn value="call"/></div>
        </div>
      </div>

      <footer className="bg-[#1F2937] text-[#f9faf8] h-16 flex items-center justify-center">
        <p>Copyright &#169; Shroomies 2022</p>
      </footer>

    </div>
  );
}

export default App;
