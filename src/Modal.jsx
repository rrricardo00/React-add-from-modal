import React from 'react'

import Items from './Items'

const Modal = ({ setArr, setDataItems, dataItems }) => {

    return (
        <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
            {dataItems && dataItems.map((item, index) =>
                <Items key={index} nome={item.nome} id={item.id} setDataItems={setDataItems} dataItems={dataItems} setArr={setArr} isAdd={true} />
            )}
        </div>
    )
}

export default Modal