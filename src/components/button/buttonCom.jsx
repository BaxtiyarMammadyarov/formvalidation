import React from 'react'
import "./style.css"
function ButtonCom(props) {
    function onClickFunction(e) {
        e.preventDefault()
        if(props.data.companyName.lenght < 5){
            props.setTitle({companyName : "Sirket adi 5 simvoldan en az 5 somvol"})
            return

        }
        if(props.data.contactName.lenght < 5){
            props.setTitle({contactName : " @ simvolu olmamalidir "})
            return

        }
        if(props.data.contactTitle.lenght < 5){
            props.setTitle({contactTitle : " bos  olmamalidir "})
            return
        }
        if(props.data.address.city.lenght < 5){
            props.setTitle({city : " bos  olmamalidir "})
            return
        }
        if(props.data.address.country.lenght < 5){
            props.setTitle({country : " bos  olmamalidir "})
            return
        }
        
       
    }
    return (
        <div className='btnDiv' >

                <input
                    name='save'
                    type='button'
                    className='btn'
                    value='Save'
                    onClick={(e) => onClickFunction(e)}
                />
           

                <input
                    name='cancel'
                    type='button'
                    className='btn'
                    value='cancel'
                    onClick={(e) => props.setData({})}
                />
           



        </div>
    )
}

export default ButtonCom