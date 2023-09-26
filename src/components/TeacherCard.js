import { useNavigate } from "react-router-dom"
import { AppState } from "../Context/AppProvider"

export default function TeacherCard({teacher}){
  const {subject, setSubject} = AppState()
  const removeTeacher= (id)=>{
    const newTeacherData = subject.filter((teacher, idx)=>teacher.id !== id)
    setSubject(newTeacherData)
  }
  const navigate = useNavigate()
 
    return(
      <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{teacher.name}</h2>
    <p>{teacher.subject}</p>
    <p>{teacher.email}</p>
    <p>{teacher.phone}</p>
    <p>{teacher.education}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-denger"onClick={()=>removeTeacher(teacher.id)}>Delete</button>
      <button className="btn btn-primary"onClick={()=>navigate(`/editteacher/${teacher.id}`)}>Edit</button>
    </div>
  </div>
</div>
      </div>
  
    )
}