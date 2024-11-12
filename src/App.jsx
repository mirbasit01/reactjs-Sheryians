// import React from 'react'
// import Card from './Components/Card'

// function App() {

//   const  users =
//   [
//     {
//       "name": "Ali Ahmed",
//       "city": "Lahore",
//       "profession": "Web Developer",
//       "age": "25",
//       "profile_photo": "https://media.istockphoto.com/id/1693515277/photo/profile-of-female-engineer.webp?a=1&b=1&s=612x612&w=0&k=20&c=H20dvm0ztBEeVIogEvdd7VYPedByxlhIPhCNxlJ_HUQ="
//     },
//     {
//       "name": "Sara Khan",
//       "city": "Karachi",
//       "profession": "Graphic Designer",
//       "age": "28",
//       "profile_photo": "https://media.istockphoto.com/id/1487465664/photo/portrait-employee-and-asian-woman-with-happiness-selfie-and-confident-entrepreneur-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=wS14CqknuT6mj3bnzopHuMbyhSernzpXIKeKFJhHDro=  "
//     },
//     {
//       "name": "Bilal Malik",
//       "city": "Islamabad",
//       "profession": "Digital Marketer",
//       "age": "32",
//       "profile_photo": " https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc="
//     },
//     {
//       "name": "Ayesha Bibi",
//       "city": "Faisalabad",
//       "profession": "Content Writer",

//       "age": "30",
//       "profile_photo": "https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?a=1&b=1&s=612x612&w=0&k=20&c=SDt3m8BFs88Olzf_Ak_yA42qHmsPVp_oPg1s_Ad7GdY="
//     },
//     {
//       "name": "Usman Qureshi",
//       "city": "Multan",
//       "profession": "SEO Specialist",
//       "age": "35",
//       "profile_photo": "https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?a=1&b=1&s=612x612&w=0&k=20&c=SDt3m8BFs88Olzf_Ak_yA42qHmsPVp_oPg1s_Ad7GdY= "
//     }
//   ]

//   // users.forEach(function(kk){
//   //   console.log(kk)  // Log user details to the console for debugging purposes.
//   //   // You can replace this with your own logic to render the user data in your application.  // Example: <Card name={user.name} city={user.city} profession={user.profession} profile_photo={user.profile_photo} />  //
//   // })
//   return (
//     <div>
//       <div className='p-10'>
//           {users.map(function(elem,idx){
//             return  <Card Key={idx} username={elem.name} age={elem.age} city={elem.city} phptu={elem.profile_photo} prof={elem.profession}/>
//           })}
//        </div>
//     </div>
//   )
// }

// export default App

// yyh uper wala code ha demo

import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
   
  const getData = async ()=>{
    // console.log("helo");
      const response = await axios.get("https://picsum.photos/v2/list")
         setUsers(response.data);
         console.log(users)
      }
  return (
    <div className="p-10">
      <button onClick={getData} className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">
        Get Data{" "}
      </button>
      <div className="p-5 mt-5 bg-gray-950">
        {/* map chla ka funcion clha de aha  */}
        {users.map(function(elem,idx){
          return  <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-ful px-7 py-6 rounded mb-3"> 
            <img className="h-40" src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
          
      </div>
    </div>
  );
}

export default App;
