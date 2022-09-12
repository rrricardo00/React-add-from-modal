import React from 'react'
import Items from './Items'
import Modal from './Modal'
import data from './Data'

const App = () => {

  const [arr, setArr] = React.useState([])
  const [dataItems, setDataItems] = React.useState([])

    React.useEffect(() => {
        setDataItems(data)
    }, [])

  return (
    <>
      <div>App</div>
      <div style={{ display: 'flex', gap: '20px'}}>
        {arr.length > 0 &&
          arr.map((item, index) =>
            <Items key={index} nome={item.nome} id={item.id} arr={arr} setArr={setArr} setDataItems={setDataItems} dataItems={dataItems}/>
          )
        }
      </div>
      <Modal setArr={setArr} arr={arr} setDataItems={setDataItems} dataItems={dataItems}/>
    </>
  )
}

export default App