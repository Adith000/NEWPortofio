import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWraper  from "../hoc";
import { slideIn } from "../Utils/motion";



const Contact = () => {
  const formRef= useRef();
  const[form ,setForm]=useState({
    name:"",
    email:"",
    message:"",
  });

  const [loading ,setLoading]= useState("false")

  const handelChange=(e)=>{
    const {name , value}= e.target;

    setForm({...form,[name]:[value]})
  }

  
//template_27qqqk7

//service_66ce5a6 

//nYN9k7V-OCsIpRcGE


  const handelSubmit=(e)=>{
e.preventDefault();
setLoading(true);
emailjs.send('service_66ce5a6',
'template_27qqqk7',
{
form_name:form.name,
to_name:"Adith KP",
form_email:form.email,
to_email:"adithkp000@gmail.com",
message:form.message

},
'nYN9k7V-OCsIpRcGE'
)
.then(()=>{
  setLoading(false)
  alert("Thank You for the message i will get back to ypu as soon as possible 😊");
  setForm({
    name:"",
    email:"",
    message:""
  })
}, (error)=>{
  setLoading(false)
  console.log(error)
  alert("Something went wrong")

})
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handelChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </label>




<label className="flex flex-col">
<span className="text-white font-medium mb-4"> Your  Email</span>
<input 
type="email"
name="email"
value={form.email}
onChange={handelChange}
placeholder="Whats your Email "
className="bg-tertairy py-6 px-6 palceholder:text-secondary text-white rounded-lg outline-none  border-none font-medium"

/>
</label>

<label className="flex flex-col">
<span className="text-white font-medium mb-4"> Your Message</span>
<textarea 

name="message"
value={form.message}
onChange={handelChange}
placeholder="What do you want to sat "
className="bg-tertairy py-6 px-6 palceholder:text-secondary text-white rounded-lg outline-none  border-none font-medium"

/>
</label>
<button 
type="submit"
className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
> 
send
</button>
</form>
</motion.div>

  <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWraper( Contact,"contact")