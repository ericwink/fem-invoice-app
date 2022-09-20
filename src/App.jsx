import { createContext } from 'react'
import { useState } from 'react'
import data from '../public/data.json'
import InvoicePreview from './components/InvoicePreview'

function App() {
  const themeContext = createContext(null)
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <themeContext.Provider value={theme}>
      <div id='App' className={theme}>
        <div className="container">
          <h1>Invoices</h1>
          {data.map((invoice, index) => {
            return (
              <InvoicePreview
                key={index}
                id={invoice.id}
                due={invoice.paymentDue}
                amount={invoice.total}
                name={invoice.clientName}
                status={invoice.status}
                theme={theme}
              />
            )
          })}
          <button onClick={toggleTheme}>Change Theme</button>
        </div>
      </div>
    </themeContext.Provider>
  )
}
export default App
