import React from 'react'

const UserContext = React.createContext("Cardoza World")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export  {UserProvider, UserConsumer}