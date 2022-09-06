import React from 'react'
import { useState } from 'react'
import CartContainer from './CartContainer';
import Navbar from './Navbar';
import { AppProvider } from './ContextFile';

const App = () => {
return (
    <main>
     <AppProvider>
     <Navbar/>
     <CartContainer/>
     </AppProvider>
    
    </main>
               )
}

export default App