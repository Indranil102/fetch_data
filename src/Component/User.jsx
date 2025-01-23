
import { useState } from "react"
import { useEffect } from "react"

const User = () => {
    const [userdata, setUserdata] =useState([]);
    

    const getUser=async()=>{
        const res= await fetch(' https://api.github.com/users')
        
        setUserdata( await res.json());
        

    }

    useEffect(()=>{
        getUser();
    },[]);
  return (
    <div>
      <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto flex flex-wrap ">
    <div className="flex flex-wrap -m-4 justify-evenly ">
        {
            userdata.map((pElemnt)=>{
                return(
                    <div key={pElemnt.id}>

          <div className="p-4  md:w-full w-[700px] lg:w-2xl ">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-gray-100">
          <div className="w-36 h-44 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-4  text-indigo-500 flex-shrink-0">
            <img src={pElemnt.avatar_url} alt="" />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3 ml-5">{pElemnt.login}  </h2>
            <p className="leading-relaxed text-base">
                user profile <br />
                {pElemnt.html_url}
            </p>
            <p className="leading-relaxed text-base">
                repos
                <br />
                {pElemnt.gists_url}
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">click
              
            </a>
          </div>
        </div>
      </div>
    </div>

                )
            })
        }
      
     
    </div>
  </div>
</section>
    </div>
  )
}

export default User
