import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate, useParams } from "react-router-dom";
import CrumBar from "./CrumBar";
import { AppState } from "../Context/AppProvider";

export default function EditStudent({CrumState, setCrumState}){

    const {data, setData} = AppState();

    const {id}= useParams();

    const navigate = useNavigate()

    const [idx, setIdx] = useState("");
    const [name, setName]= useState("");
    const[batch, setBatch]= useState("");
    const[email, setEmail]= useState("");
    const[phone, setPhone]= useState("");
    const[education, setEducation]= useState("");

    useEffect(()=>{
        console.log("id : ", id)
        const selectedStudent = data.find((stud, index)=>stud.id === parseInt(id));
        setIdx(selectedStudent.id)
        setName(selectedStudent.name)
        setBatch(selectedStudent.batch)
        setEmail(selectedStudent.email)
        setPhone(selectedStudent.phone)
        setEducation(selectedStudent.education)
    }, [id, data])

    function editStudent(){
        const editedStudentObject ={
            id : idx,
            name, 
            batch,
            email,
            phone,
            education
        }
        const editIndex =  data.findIndex((stud, index) => stud.id === parseInt(id));
        data[editIndex]= editedStudentObject
        setData([...data])
        navigate('/student/all')

    }

    return(
        <Base>
        <CrumBar
        CrumState={CrumState}
        setCrumState={setCrumState}/>
        <h1 className="p-5"> Student Edit Page</h1>
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
           <input type="text" placeholder="Enter Batch" className="input input-bordered" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
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
  <button className="bg-base-200 m-5 p-2 rounded" onClick={editStudent} >Edit Student</button>
        </Base>
    )
}