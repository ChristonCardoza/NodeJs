import './App.css';
import React, { useState, forwardRef } from 'react'

import { Divider } from 'antd';
import 'antd/dist/antd.css'

import {IconContext} from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Modal from 'react-modal'

import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

import CountUp, {useCountUp} from 'react-countup'

import IdleTimerContainer from './components/IdleTimerContainer';

import { ChromePicker } from 'react-color'

import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import ReactPlayer from 'react-player'

import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'
import { css } from '@emotion/react'

import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';

toast.configure()
Modal.setAppElement('#root')

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      This is Custom Toast
      <button onClick={closeToast}>Close</button>
    </div>
  )
}

const notify = () => {
  toast('Basic notification!',{
    position: toast.POSITION.TOP_LEFT
  })
  toast.success('Success notification!',{
    position: toast.POSITION.TOP_CENTER,
    autoClose:8000
  })
  toast.info('Info notification!',{
    position: toast.POSITION.TOP_RIGHT
  })
  toast.warn('Warning notification!',{
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose:false
  })
  toast.error(<CustomToast />,{
    position: toast.POSITION.BOTTOM_CENTER
  })
  toast('Basic notification!',{
    position: toast.POSITION.BOTTOM_RIGHT
  })
}

const CustomToolTip = forwardRef((props,ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  )
})

const ColoredToolTip = () => {
  return <span style= {{ color: 'yellow' }}>Colored Component</span>
}

const loaderCSS = css `
  margin-top: 25px;
  margin-bottom: 25px;
`

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { countUp, start, pauseResume, reset, update } = useCountUp({duration:5, end: 10000,startOnMount:false})

  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  const [selectedDate, setSelectedDate ] = useState(null)

  return (

    <div className="App">

      <IconContext.Provider value={{color:'blue',size:'5rem'}}>
        <Divider orientation="left"> React Icons </Divider>
          {/* <FaReact color='purple' size='10rem' />
          <MdAlarm color='purple' size='10rem' /> */}
        <FaReact />
        <MdAlarm />
      </IconContext.Provider>

      <Divider orientation="left"> React Toasts </Divider> 
      <button onClick={notify}>Notify!</button>

      <Divider orientation="left"> React Modal </Divider> 
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal 
        isOpen = {modalIsOpen}
        onRequestClose ={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick = {false}
        style = {
          {
            overlay: {
              background: 'grey'
            },
            content: {
              color: 'orange'
            }
          }
        }
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>

      <Divider orientation="left"> React ToolTip </Divider> 
      <Tippy 
        arrow={false}
        delay={1000}
        placement = 'right'
        content='Basic Tool Tip'
      >
        <button>Hover</button>
      </Tippy>
      <div style={{ paddingBottom: '20px'}}>
        <Tippy content={<ColoredToolTip />}>
          <CustomToolTip></CustomToolTip>
        </Tippy>
      </div>

      <Divider orientation="left"> Count Up </Divider> 
      <h1><CountUp end={200} /></h1>
      <h1><CountUp end={200} duration={5}/></h1>
      <h1><CountUp start={500} end={1000} duration={5}/></h1>
      <h1><CountUp start={0} end={1000} duration={5} prefix='$' decimals={2}/></h1>
      <h1><CountUp start={0} end={1000} duration={5} suffix='USD' decimals={2}/></h1>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>

      <Divider orientation="left"> Idle Timer </Divider> 
      <IdleTimerContainer />

      <Divider orientation="left"> Color Picker </Divider> 
      <div>
        <button onClick={() => setShowColorPicker(showColorPicker => ! showColorPicker)}>
          {showColorPicker ? ' Close Color Picker ' : 'Pick a Color' }
        </button>
       { showColorPicker && (
          <ChromePicker 
          color={color} 
          onChange={updatedColor => setColor(updatedColor.hex)}
        />
        )}
        <h2>You Picked {color} </h2>
      </div>

      <Divider orientation="left"> Credit Cards </Divider>
      <div>

        <Cards
          number = {number}
          name = {name}
          expiry = {expiry}
          cvc = {cvc}
          focused = {focus}
        />

        <form>

          <input
            type='tel'
            name= 'number'
            placeholder= 'Card Number'
            value = {number}
            onChange = { e => setNumber(e.target.value)}
            onFocus = { e => setFocus(e.target.name)}
          />

          <input
            type='text'
            name= 'name'
            placeholder= 'Name'
            value = {name}
            onChange = { e => setName(e.target.value)}
            onFocus = { e => setFocus(e.target.name)}
          />

          <input
            type='text'
            name= 'expiry'
            placeholder= 'MM/YY Expiry'
            value = {expiry}
            onChange = { e => setExpiry(e.target.value)}
            onFocus = { e => setFocus(e.target.name)}
          />

          <input
            type='tel'
            name= 'cvc'
            placeholder= 'CVC'
            value = {cvc}
            onChange = { e => setCvc(e.target.value)}
            onFocus = { e => setFocus(e.target.name)}
          />

        </form>
      </div>
      
      <Divider orientation="left"> Date Picker </Divider>
      <DatePicker 
        selected={selectedDate}
        placeholderText='Select a Date'
        onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        // minDate={new Date()}
        // maxDate={new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />

      <Divider orientation="left"> Video Player</Divider>
      <div style={{display:'flex', justifyContent: 'center'}}>
          <ReactPlayer 
            controls 
            width='480px'
            height='240px'
            url='https://www.youtube.com/watch?v=5GRbUnw64W0' onPause
            onReady={() => console.log('onReady Callback')}
            onStart={() => console.log('onStart Callback')}
            onPause={() => console.log('onPause Callback')}
            onEnded={() => console.log('onEnded Callback')}
            onError={() => console.log('onError Callback')}
          />
      </div>

      <Divider orientation="left"> React Spinner</Divider>
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <BounceLoader 
            size={24} 
            color='red' 
            loading 
            css={loaderCSS}
          />
          <BarLoader 
            size={48} 
            color='orange' 
            loading 
            css={loaderCSS}
          />
          <BeatLoader 
            size={72} 
            color='maroon' 
            loading 
            css={loaderCSS}
          />
      </div>

      <Divider orientation="left"> React Charts </Divider> 
      <div style={{display:'flex', width: '720px'}}>
          <LineChart />
          <BarChart />
          <DoughnutChart />
      </div>
     
    </div>
   
  );
}

export default App;
