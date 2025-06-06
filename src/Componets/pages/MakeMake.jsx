import React from 'react'
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


//import {useState} from 'react';
function RemovePost() {
      window.location.reload()
  }

  const submitPost = async () => {
    const HOST = "https://blog-react-6uzs.onrender.com"
    const title = document.getElementById("box-put").value;
    const content = document.getElementById("box-putb").value;
    const description = document.getElementById("box-putc").value;

    const response = await fetch(`${HOST}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, description })
    });

    if (response.ok) {
   

       toast("Blog Posted Successfully! Click here to find your Blog! ", {
         onClick: () => { 
           window.location.href = `${HOST}/view`;
         }
       });
       <button className="btn btn-success" onClick={() => window.location.href = 'http://localhost:5173/view'}>Click to View</button>
       console.log(toast)
       setTimeout(function() {
  window.location.reload();
}, 6000); // 10000 milliseconds = 10 seconds PS: by default the progress bar on the toast is 6 seconds about so set it to 6000 after testing
      
    } else {
      toast("Failed to Create Blog. Remember to fill in all of the Blogs parts! ");
    }
  }


export const MakeMake = () => {

//const [newItem, setNewItem] = useState("")

  return( <>
    
    

     <div className="crt-blgy">
            <h2 className="crt-her">Create Blog Here!</h2>
            <div className="box-c">   
                <form id="postForm">
                    <div>
                        <label htmlFor="box-put" className="blg-bg postheading">Blog Title</label>
                        <input type="text" id="box-put" className="box-put postTitle boxo" required name="title" autoComplete="off" placeholder="Title your Blog!" maxLength="68"></input>
                    </div>
                    <div>
                        <label htmlFor="content" className="blg-bg">Blog Body</label>
                        <input name="content" id="box-putb" autoComplete="off" className="box-putb boxo" required placeholder="Start Your Blog!" maxLength="30000"></input>
                    </div>
                    <div>
                        <label htmlFor="box-putc" className="blg-bg">Blog Description</label>
                        <input name="description" id="box-putc" autoComplete="off" className="box-putc boxo" required placeholder="Describe Your Blog!" maxLength="159"></input>
                    </div>
                    <div>
                      
                       <button type="button" id="liveToastBtn" className="pust btn1 btn-success" onClick={submitPost}>Post</button>
                        <button type="button" id="Reost" className="clust btn1 btn-danger" onClick={RemovePost}>Reset</button>
                    </div>
                </form>
                <ul id="Vissy" className="Vissy"></ul>
            </div>
            
            </div>
            <div className='main-footer'>
    <div className="wordak">&copy; 2025 BlogCorp </div>
    <script src="page2.js"></script>
    </div>
            </> )
}
