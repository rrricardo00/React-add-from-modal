import React from 'react'

const Items = ({ nome, id, setArr, arr, isAdd, setDataItems, dataItems }) => {

    const handleClick = () => {
        const itemAdd = dataItems.filter(item => item.id === id)
        setArr(ar => [...ar, itemAdd[0]])

        const arrayDelete = dataItems.filter(item => item.id !== id)
        setDataItems(arrayDelete)
    }

    const handleBack = () => {

        const itemAdd = arr.filter(item => item.id === id)
        setDataItems(ar => [...ar, itemAdd[0]])   

        const arrayDelete = arr.filter(item => item.id !== id)
        setArr(arrayDelete)
        
    }

    return (
        <>
            <div onClick={isAdd ? handleClick : handleBack} style={
                {
                    background: 'grey',
                    color: '#fff',
                    borderRadius: "20px",
                    textAlign: 'center',
                    padding: '10px 20px',
                    cursor: 'pointer'
                }
            }>
                {nome}</div>
        </>
    )
}

export default Items