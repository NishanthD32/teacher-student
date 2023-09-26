import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import Base from "../BasePage/Base";

export default function TeacherEdit(){
  const {id}= useParams();
  const navigate = useNavigate();
  const {subject, setSubject} = AppState()

  
  const [idx, setIdx] = useState("");
  const [name, setName]= useState("");
  const[subjects, setSubjects]= useState("");
  const[email, setEmail]= useState("");
  const[phone, setPhone]= useState("");
  const[education, setEducation]= useState("");

  
  useEffect(()=>{
    console.log("id : ", id)
    const selectedteacher = subject.find((teacher, index)=>teacher.id === parseInt(id));
    setIdx(selectedteacher.idx)
    setName(selectedteacher.name)
    setSubjects(selectedteacher.subjects)
    setEmail(selectedteacher.email)
    setPhone(selectedteacher.phone)
    setEducation(selectedteacher.education)
}, [idx, subject])

function editteacher(){
  const editedTeacherObject ={
      id : idx,
      name, 
      subjects,
      email,
      phone,
      education
  }
  const editIndex =  subject.findIndex((teacher, index) => teacher.id === parseInt(id));
  subject[editIndex]= editedTeacherObject
  setSubject([...subject])
  navigate('/teacherlist/')
}

  

    return(
<Base>
<h1 className="p-5"> Teacher Edit Page</h1>
        <div className="form-control">
           <label className="input-group p-1">
           <span>Id</span>
           <input type="number" placeholder="Enter Id" className="input input-bordered" value={idx} onChange={(e)=>setIdx(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Name</span>
           <input type="text" placeholder="Enter Name" className="input input-bordered" value={name} onChange={(e)=>setName(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Batch</span>
           <input type="text" placeholder="Enter Batch" className="input input-bordered" value={subjects} onChange={(e)=>setSubjects(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Email</span>
           <input type="text" placeholder="Enter Email" className="input input-bordered"value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Phone</span>
           <input type="number" placeholder="Enter Phone No" className="input input-bordered"value={phone} onChange={(e)=>setPhone(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Eduction</span>
           <input type="text" placeholder="Enter Education" className="input input-bordered" value={education} onChange={(e)=>setEducation(e.target.value)}/>
           </label>
</div>
  <button className="bg-base-200 m-5 p-2 rounded"onClick={editteacher}>Edit Teacher</button>
</Base>
    )
}