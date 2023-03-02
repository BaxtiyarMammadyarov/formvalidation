import React from 'react'
import { useState, useEffect } from 'react';
import Input from '../input/Input';



import "./style.css"
export default function Form() {
  const [title, setTitle] = useState({

  });

  const [data, setData] = useState({
    companyName: "companyName",
    contactName: "contactName", contactTitle: "contactTitle", address: { city: "city", country: "country" }
  });


  function onClickFunction(e) {
    e.preventDefault()
    let bool = false;
    let tt = {}
    if (data.companyName.length < 5) {
      tt.companyName = "Şirket adi 5 simvoldan en az 5 somvol";
      // setTitle({ ...title, companyName:  })
      bool = true;

    }
    if (data.contactName.match("@")) {
      tt.contactName = " @ simvolu olmamalidir ";
      // setTitle({ ...title, contactName: " @ simvolu olmamalidir " })
      bool = true;

    }
    if (data.contactTitle.length === 0) {
      tt.contactTitle = " boş  olmamalidir ";
      // setTitle({ ...title, contactTitle: " boş  olmamalidir " })
      bool = true;
    }
    if (data.address.city.length === 0) {
      tt.city = " Şəhər adı boş  olmamalidir ";
      // setTitle({ ...title, city: " Şəhər adı boş  olmamalidir " })
      bool = true;
    }
    if (data.address.country.length === 0) {
      tt.country = " Şəhər adı boş  olmamalidir ";
      // setTitle({ ...title, country: "Ölkə adı  boş  olmamalidir " })
      bool = true;
    }
    if (bool) {
      setTitle(tt);
      return;
    }
    else {
      data.contactTitle = data.contactTitle.toUpperCase();
      
      setTitle({})
      fetch("https://northwind.vercel.app/api/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }




  }
  return (
    <div className='form'>
      <h3>Registration Form</h3>
      <Input setFun={(e) => setData({ ...data, companyName: e.target.value })}
        id={"companyName"}
        name={"Company"}
        data = {data}
        title={title}
      />
      <Input setFun={(e) => setData({ ...data, contactName: e.target.value })}
        id={"contactName"}
        name={"Contact Name"}
        data = {data}
        title={title}
      />
      <Input setFun={(e) => setData({ ...data, contactTitle: e.target.value })}
        id={"contactTitle"}
        data = {data}
        name={"Contact Title"}
        title={title}
      />
      <Input setFun={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })}
        id={"city"}
        name={"City"}
        data = {data.address}
        title={title}
      />

      <Input setFun={(e) => setData({ ...data, address: { ...data.address, country: e.target.value } })}
        id={"country"}
        name={"Country"}
        data = {data.address}
        title={title}
      />

      <input
        name='save'
        type='button'
        className='btn'
        value='Save'
        onClick={(e) => onClickFunction(e)}
      />

      {/* <ButtonCom data={data} setData={setData} setTitle={setTitle} /> */}


    </div>
  )
}
