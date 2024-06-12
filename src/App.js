import './App.css';
import {useState} from 'react';
import 'remixicon/fonts/remixicon.css'
const  App = () => {

  const model = {
    FullName: '',
    class : '',
    Roll : '',
    Subject : '',
    DOB : ''
  }
  const [right,setright] =useState(-450)
  const [editindex, seteditindex] = useState (null)
  const [students,setstudents] = useState([])
  const [form, setform] =useState(model)

  const clickbutton = ()=>{
    setright(0)
  }
  const InputHandle =(e) =>{
    const input = e.target
    const value = input.value
    const key = input.name
    setform({
      ...form,
      [key] : value
    })}
    const CreateStudent = (e) =>{
      e.preventDefault()
      setstudents([
        ...students,
        form
      ])
      setform(model)
      setright(-450)
    }
    const deletestudent = (index) =>{
      const backup = [...students]
      backup.splice(index,1)
      setstudents(backup)
    }

    const editstudent = (index) =>{
      seteditindex(index)
      setright(0)
      setform(students[index])
    }
    const savestudent = (e) =>{
      e.preventDefault()
      const backup = [...students]
      backup[editindex] = form
      setstudents(backup)
      setform(model)
      seteditindex(null)
      setright(-450)
    }
    const Closedrawer = () =>{
      setright(-450)
      setform(model)
      seteditindex(null)
    }
  return (
    <div style={{
      background: '#ddd',
      minHeight:'100vh'
    }}>
      <div style = {{
        width: '70%',
        background: 'white',
        margin:'32px auto',
        padding: 32
      }}>
          <h1 style={{
            padding: 0,
            margin:0,
            textAlign:'center'
          }}> Israr Crud App</h1>
          <button 
          onClick={clickbutton}
          style={{
            border: 'none',
            background: 'skyblue',
            color: 'black',
            padding: '14px 24px',
            borderRadius: 4,
            fontSize: 16,
            margin: '24px 0'
          }}>
            <i className="ri-user-3-fill" style={{marginRight:8}} ></i>
            Student

          </button>
          <table className ='Crud-app'>
            <thead>
              <tr>
                <th>S/No</th>
                <th>Students</th>
                <th>Subjects</th>
                <th>Class</th>
                <th>Roll</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((item,index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.FullName}</td>
                    <td>{item.Subject}</td>
                    <td>{item.class}</td>
                    <td>{item.Roll}</td>
                    <td>{item.DOB}</td>
                    <td>
                    <div>
                    <button 
                     onClick={()=>editstudent(index)}
                     style={{
                      border: 'none',
                      width: 32,
                      height:32,
                      color:'white',
                      background: '#07c65d',
                      borderRadius: 4,
                      marginRight: 12
                    }}>
                    <i className="ri-image-edit-line"></i>
                    </button>
                    <button 
                      onClick={()=>deletestudent(index)}
                      style={{
                      border: 'none',
                      width: 32,
                      height:32,
                      color:'white',
                      background: 'red',
                      borderRadius: 4
                      }}>
                    <i className="ri-delete-bin-6-line"></i>
                    </button>
                     </div>
                    </td>
                  </tr>
                ))
              }
             
            </tbody>
          </table>
      </div>
      <aside style={{
        position: 'fixed',
        top:0,
        right:right,
        width:450,
        background: 'white',
        height:'100%',
        boxShadow: '0 0 40px rgba(0,0,0,0.2)',
        padding:32,
        boxSizing:'border-box',
        transition: '0.3s'
      }}>
        <button 
        onClick={Closedrawer}
        style={{
          border: 'none',
          background: 'transparent',
          fontSize:18,
          color:'black',
          position: 'absolute',
          top: 20,
          right:20
        }}>
        <i className="ri-close-circle-line"></i>
        </button>
        <h1>Students List</h1>
        <form 
          onSubmit={ editindex === null ? CreateStudent : savestudent}
          style={{
          display: 'flex',
          flexDirection:'column',
          gap: 24
        }}>
          <input 
           value={form.FullName}
           onChange={InputHandle}
           required
           name='FullName'
           type='text'
           placeholder='Enter Your Full Name Here'
           style = {{
            border: '1px solid #ccc',
            padding : 16,
            borderRadius : 4

          }}
          />
          <input
           value={form.class}
           onChange={InputHandle} 
           required
           name='class'
           type='number'
           placeholder='Enter Your Class Here'
           style = {{
            border: '1px solid #ccc',
            padding : 16,
            borderRadius : 4

          }}
          />
          <input 
           value={form.Roll}
           onChange={InputHandle}
           required
           name='Roll'
           type='text'
           placeholder='Enter Your Roll Number Here'
           style = {{
            border: '1px solid #ccc',
            padding : 16,
            borderRadius : 4

          }}
          />
          <input 
           value={form.Subject}
           onChange={InputHandle}
           required
           name='Subject'
           type='text'
           placeholder='Enter Your Subject Here'
           style = {{
            border: '1px solid #ccc',
            padding : 16,
            borderRadius : 4

          }}
          />
          <input 
           value={form.DOB}
           onChange={InputHandle} 
           required
           name='DOB'
           type='Date'
           style = {{
            border: '1px solid #ccc',
            padding : 16,
            borderRadius : 4

          }}
          />
          {
            editindex === null ? 
            <button 
            style={{
            border: 'none',
            background: 'skyblue',
            color: 'black',
            padding: '14px 0px',
            borderRadius: 4,
            fontSize: 16
          }}>
            Submit
          </button> 
          : 
          <button 
            style={{
            border: 'none',
            background: 'Green',
            color: 'black',
            padding: '14px 0px',
            borderRadius: 4,
            fontSize: 16
          }}>
            Save
          </button>
            } 
        </form>
      </aside>
    </div>
  );
}

export default App;
