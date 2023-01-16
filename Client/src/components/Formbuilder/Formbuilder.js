import React, { useState } from 'react';
import formimage from "./formimage.png";
import { NavLink } from "react-router-dom";
 
const Formbuilder = () => {

    const [formdata,setFormData] = useState({
        createdfor:"", formtitle:"", description:"", selectedFile:""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setFormData({...formdata, [name]:value})
    }



    const PostData = async (e) => {
        e.preventDefault();
        const { createdfor, formtitle, description, selectedFile } = formdata;
        
        const res = await fetch("/formbuilder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ 
                // name: name doesnt need to be written because its the same name
                createdfor, formtitle, description, selectedFile
            })
        });


        
        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid - If error persists, contact admin");
            console.log("Invalid - If error persists, contact admin");
        } else {
            window.alert("Form Posted Successfully!");
            console.log("Form Posted Successfully!");
        }
}

    return (
        <>
            <div className="form-body">
                        <div className="form-content">
                            <div className="form-items">

                                <form>
                                    <div class="container">
                                    
                                    
                                        <div class="row">

                                                        <div class="col">
                                                            <h3>FORMS</h3>
                                                            <div class="container">
                                                                <div class="row">
                                                                    <div class="col order-last">
                                                                    <img src={formimage} alt="FormImage"/>
                                                                    </div>

                                                                    <div class="col">
                                                                    <img src={formimage} alt="FormImage"/>
                                                                    </div>

                                                                    <div class="col">
                                                                    <img src={formimage} alt="FormImage"/>
                                                                    </div>

                                                                    <div class="col">
                                                                    <img src={formimage} alt="FormImage"/>
                                                                    </div>
                                                                    
                                                                    <div class="col">
                                                                    <img src={formimage} alt="FormImage"/>
                                                                    </div>

                                                                    <div class="col order-first">
                                                                    <img src={formimage} alt="FormImage"/>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <NavLink to="/canvas" >Canvas</NavLink>
                                                        </div>



                                                        <form method="POST" className="requires-validation" novalidate class="col" id="createform">
                                                            <h3>Create Form</h3>
                                                            <p>Fill in the details below to get started!</p>

                                                            <div class="col">
                                                                <input type="text" name="createdfor" value={formdata.createdfor} class="form-control" onChange={handleInputs} placeholder="Created For"/>
                                                            </div>
                                                            
                                                            <div class="col">
                                                                <input type="text" name="formtitle" value={formdata.formtitle} class="form-control" onChange={handleInputs} placeholder="Form Title"/>
                                                            </div>
                                                            
                                                            <div class="form-group">
                                                                <label for="exampleFormControlTextarea1"></label>
                                                                <textarea class="form-control" name="description" value={formdata.description} onChange={handleInputs} placeholder="Description (optional)" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                            </div>

                                                            <div class="form-group">
                                                                <label for="exampleFormControlFile1">Form Thumbnail:</label>
                                                                <input type="file" name="selectedFile" value={formdata.selectedFile} class="form-control-file" onChange={handleInputs} color="white" id="exampleFormControlFile1"/>
                                                            </div>

                                                            <div className="form-button mt-3">
                                                                <button id="signup" name="signup" type="submit"  onClick={PostData} className="btn btn-primary">Submit</button>
                                                            </div>
                                                        </form>

                                        </div>

                                    </div>
                                </form>


                        </div>
                    </div>
                </div>

        </>
    )
};

export default Formbuilder;