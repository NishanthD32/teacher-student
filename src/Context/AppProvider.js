import { useState } from "react";
import { createContext, useContext } from "react"

const AppCtx = createContext();


function AppProvider({children}){

    const teacherData =[
        {
          id:1,
          name:"chandru",
          subject:"tamil",
          email:"chandru@gmail.com",
          phone:1234567890,
          education:"M.A tamil"
        },
      {
        id:2,
          name:"sarathy",
          subject:"english",
          email:"sarathy@gmail.com",
          phone:1234567890,
          education:"M.A English"
    
      }];

      const studentData=[
        {
          id:1,
          name:"Nishanth",
          batch:"32",
          email:"abc@gmail.com",
          phone:9988776655,
          education:"BCA"
        },
        {
          id:2,
          name:"Amar",
          batch:"33",
          email:"abcd@gmail.com",
          phone:1122334455,
          education:"BA"
        },
      ]

      const [data, setData]= useState(studentData)

      const pages1 =[{
        name: "Teacher",
        path: "/teacherlist/",
      }];

      const [editPage, setEditPage] = useState(pages1)


    const [subject, setSubject] = useState(teacherData);

    return(
       <AppCtx.Provider 
       value={{
         subject,
         setSubject,
         editPage,
         setEditPage,
         data,
         setData
       }}>
       {children}
       </AppCtx.Provider>
    )
}

export const AppState = ()=>{
    return useContext(AppCtx)
}

export default AppProvider;