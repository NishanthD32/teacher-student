import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import TeacherCard from "./TeacherCard";

export default function TeacherList(){
    const {subject, setSubject} = AppState()
    return(
        <Base>
       {subject.map((teacher,index)=>(
        <TeacherCard
        teacher={teacher}
        key={teacher.id}/>
       ))}
        </Base>
    )
}