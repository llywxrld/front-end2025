import { useState } from "react";

export default function Form() {
    const [form, setForm] = useState({ firstname: "", lastname:"", age:"", school:"", class:"" });
    const [data, setData] = useState ([]);
    const handleSubmit = (e) => {
      e.preventDefault();
        setData([...data, form]);
        setForm({firstname: "", lastname:"", age:"", school:"", class:"" })
    
    };
    console.log(form);
    
CD
    const inputStyle = {
        width : "100%",
        padding: "10px",
        marginBottom: "15px"
    };

    console.log(form);
    
    return (
        <div className="px-20 m-0 border-solid " >
            <h1 className="text-2xl">Form</h1>

            <form  onSubmit = {handleSubmit}>
                <input value = {form.firstname} onChange = {(e) => setForm({...form, firstname: e.target.value})} placeholder = "firstname" style = {inputStyle}/>
                <input value = {form.lastname} onChange = {(e) => setForm({...form,lastname: e.target.value})} placeholder = "lastname" style = {inputStyle}/>
                <input  value = {form.age} onChange = {(e) => setForm( {...form,age: e.target.value})} placeholder = "age" style = {inputStyle}/>
                <input value = {form.school} onChange = {(e) => setForm({...form, school: e.target.value})} placeholder = "school" style = {inputStyle}/>
                <input value = {form.class} onChange = {(e) => setForm({...form,class: e.target.value})} placeholder = "class" style = {inputStyle}/>

                <button className="rounded-full px-12 bg-pink-200">Submit</button>
            </form>
            <h2 className="text-2xl">Submitted</h2>
            {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="border-solid  px-15 mx-10 border-r-8"
          >
            <p>Firstname: {item.firstname}</p>
            <p>Lastname: {item.lastname}</p>
            <p>Age: {item.age}</p>
            <p>School: {item.school}</p>
            <p>Class: {item.class}</p>
          </div>
        ))
      ) : (
        <div className="md:col-span-full text-center text-gray-500 p-10 bg-white rounded-2xl shadow-inner">
          <p className="text-xl">No data</p>
        </div>
      )}
        </div>
    )

}