import IdleTimer from 'react-idle-timer'
import React, { useRef, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function IdleTimerContainer() {
    const idleTimerRef = useRef(null)
    const sessionTimeOutRef = useRef(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const onIdle = () => {
        console.log('User is Idle')
        setModalIsOpen(true)
        sessionTimeOutRef.current = setTimeout(logOut,5000)
    }

    const logOut = () => {
        setModalIsOpen(false)
        setIsLoggedIn(false)
        clearTimeout(sessionTimeOutRef.current)
        console.log('User has logged out')
    }

    const stayActive = () => {
        setModalIsOpen(false)
        clearTimeout(sessionTimeOutRef.current)
        console.log('User is Active')
    }

    return (
        <div>
            {
                isLoggedIn ? <h2>Hello DeadMan</h2> : <h2>Hey Man</h2>
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You've been idle for a while!</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={logOut}>Log me out</button>
                    <button onClick={stayActive}>Keep me signed in</button>
                </div>
            </Modal>
            <IdleTimer
                ref = {idleTimerRef}
                timeout={20 * 1000}
                onIdle = {onIdle}
            ></IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
