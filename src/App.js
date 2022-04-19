import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, IoCodeWorking} from 'react-icons/io5';
import dri from './image/dris.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
    const [isActive, setisActive] = useState(false);
    return (
    <div className = "flex pb-20 w-screen min-h-screen flex-col items-center relative bg-primary"> 
     
     {/* Navigation Bar */}
     <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'> 
     <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
         <p className='text-4xl text-slate-200 font-medium' style={{fontFamily: 'Sacramento'}}>Drishti</p>

         <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
             <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Home</a>
             <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>About</a>
             <a href='#project' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Projects</a>
             <a href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Contact</a>
             <a href='#d' className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl'>Download</a>
         </div>
         <div className='block md:hidden ml-auto cursor-pointer'  onClick={() => setisActive(!isActive)}>
             <IoMenu className='text-2xl text-textBase'/>
         </div>
         {isActive && (
                 <div className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
                     <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setisActive(false)}>Home</a>
             <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setisActive(false)}>About</a>
             <a href='#project' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setisActive(false)}>Projects</a>
             <a href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setisActive(false)}>Contact</a>
             <a href='#d' className='text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl' onClick={() => setisActive(false)}>Download</a>
                 </div>
             )}
     </div>
      </nav>

     <div className="relative bg-slate-300 " id="home">
     <Spline scene="https://draft.spline.design/eRchUEcfgyJmaGyn/scene.spline" />
     <div className='absolute bottom-10 w-full justify-center items-center flex'>
         <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
             <p className='text-textBase'>Hi, I am Baymax</p>
         </div>
     </div>
    </div>

    {/* Main section */}
    <main className='w-[80%] mt-5'>
        {/* About section */}
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24' id='about'>
            
            {/* Image box */}
            <div className='w-full h-420 flex items-center justify-center '>
                <div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
                    <img className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg' src={dri} alt="Drishti"/>
                </div>
            </div>
            {/* Content box */}
            <div className='w-full h-420 flex flex-col items-center justify-center'>
                <p className='text-lg text-textBase text-center'>
                A passionate CSE student who loves writing code and is interested in solving real-life problems and devising algorithms for the same. Proficient in C++/C, HTML, CSS, PYTHON and JAVASCRIPT. Ready to learn new skills as required.
                </p>
                <button className='w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 md-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80'><span class='w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Download</span></button>
                
                
                
                </div>
        </section>

        {/* Timeline */}
        <section className='w-full flex justify-center items-center'>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(21,24,31)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
    icon={< IoCodeWorking />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  
  
        </VerticalTimeline>
        </section>
    </main>

    </div>
    );
}

export default App;