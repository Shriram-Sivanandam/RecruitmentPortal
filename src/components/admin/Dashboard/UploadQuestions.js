import React, { useState, useRef } from "react";
import Nav2 from "../../Nav/Nav2";
import Sidebar from "./Sidebar";
import "./UploadQuestions.css";
import { FileDrop } from "react-file-drop";
import Questions from './Questions'
import { readString } from 'react-papaparse'

function UploadQuestions() {
  const fileInputField = useRef(null);
  // const [files, setFiles] = useState({});
  const [processing , setProcessing] = useState(false);
  const [data , setData] = useState([])
  const onTargetClick = () => {
    fileInputField.current.click();
  };
 
  const csvAdaptor = async (files) => {
    setProcessing(true)
    try{
      console.log("recieved file")
      let reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload =  () => {
        const csv = reader.result
        // console.log(csvJSON(csv))
        // setFiles(csvJSON(csv))
        readString(csv, {
          header: true,
          worker: true,
          complete: (results) => {
            console.log(results.data)
            setData(results.data)
            console.log(JSON.stringify(results.data))
          }
        })
        setProcessing(false)

        // const jsonObj = await csv().fromString(csv)
        // console.log(jsonObj);
        // console.log(csvJSON(csv))
        
      }
    }catch(e){
      console.log(e)
    }
  }

 

 



  const filePickerContent = (
    <div className="py-16 cursor-pointer">
       <div className="row mx-auto mt-5">
                  <svg
                    className="mx-auto my-auto"
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.9928 5.04164C25.8252 4.20926 27.1748 4.20926 28.0071 5.04164L36.5329 13.5674C37.3653 14.3998 37.3653 15.7493 36.5329 16.5817C35.7005 17.4141 34.351 17.4141 33.5186 16.5817L26.5 9.5631L19.4814 16.5817C18.649 17.4141 17.2995 17.4141 16.4671 16.5817C15.6347 15.7493 15.6347 14.3998 16.4671 13.5674L24.9928 5.04164Z"
                      fill="#0A0A4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.5 4.41736C27.6772 4.41736 28.6314 5.37164 28.6314 6.5488V32.1261C28.6314 33.3032 27.6772 34.2575 26.5 34.2575C25.3228 34.2575 24.3686 33.3032 24.3686 32.1261V6.5488C24.3686 5.37164 25.3228 4.41736 26.5 4.41736Z"
                      fill="#0A0A4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5799 25.7318C12.7571 25.7318 13.7114 26.6861 13.7114 27.8632V38.5204C13.7114 40.8748 15.6199 42.7833 17.9743 42.7833H35.0258C37.3801 42.7833 39.2886 40.8748 39.2886 38.5204V27.8632C39.2886 26.6861 40.2429 25.7318 41.4201 25.7318C42.5972 25.7318 43.5515 26.6861 43.5515 27.8632V38.5204C43.5515 43.2291 39.7344 47.0462 35.0258 47.0462H17.9743C13.2656 47.0462 9.4485 43.2291 9.4485 38.5204V27.8632C9.4485 26.6861 10.4028 25.7318 11.5799 25.7318Z"
                      fill="#0A0A4B"
                    />
                  </svg>
                </div>
          <div className="text-black font-bold text-body-4 mt-4 mb-0 text-center">
            {processing ? (
              <>Processing file...</>
            ) : (
              <>
                <div className="row mx-auto">
                  <h5 className="mx-auto my-2" style={{ color: "#0a0a4b" }}>
                    <b>Drag and drop files</b>
                  </h5>
                </div>
                <div className="row">
                  <h5 className="mx-auto mt-3" style={{ color: "#0a0a4b" }}>
                    OR
                  </h5>
                </div>

                <div className="row">
                  <button
                    type="button"
                    class="btn text-white mx-auto "
                    style={{
                      backgroundColor: "#0a0a4b",
                      height: "50px",
                      width: "93.3%",
                      fontWeight: "500",
                    }}
                  >
                    Choose a file
                  </button>
                </div>
                
              </>
            )}
          </div>
    </div>
  )



  return (
    <>
      <Nav2 />
      <div className="container" style={{ margin: "0", padding: "0" }}>
        <div className="row" style={{ margin: "0", padding: "0" }}>
          <div className="col-3" style={{ margin: "0", padding: "0" }}>
            <Sidebar />
          </div>

          <div className="col-9">
            <div className="row">
              <h3 className="mx-3 my-3" style={{ color: "#0A0A4B" }}>
                Upload / View Questions
              </h3>
            </div>
            <div className="row">
              <div
                class="btn-group btn-group-toggle mx-3"
                data-toggle="buttons"
              >
                <label
                  class="btn active"
                  style={{ backgroundColor: "#0a0a4b", color: "white" }}
                >
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked
                  />
                  Aptitude
                </label>
                <label
                  class="btn"
                  style={{
                    backgroundColor: "white",
                    color: "#0a0a4b",
                    borderColor: "#0a0a4b",
                  }}
                >
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autocomplete="off"
                  />{" "}
                  Management
                </label>
              </div>
            </div>

            <div className="row uploadbox my-3 mx-1"
              style={{
                width: "356px",
                backgroundColor: "#D2D4E3",
                height: "300px" }}>
              <div className="insidebox mx-auto mt-3">
              {/* <div className="row mx-auto mt-5">
                  <svg
                    className="mx-auto my-auto"
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.9928 5.04164C25.8252 4.20926 27.1748 4.20926 28.0071 5.04164L36.5329 13.5674C37.3653 14.3998 37.3653 15.7493 36.5329 16.5817C35.7005 17.4141 34.351 17.4141 33.5186 16.5817L26.5 9.5631L19.4814 16.5817C18.649 17.4141 17.2995 17.4141 16.4671 16.5817C15.6347 15.7493 15.6347 14.3998 16.4671 13.5674L24.9928 5.04164Z"
                      fill="#0A0A4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.5 4.41736C27.6772 4.41736 28.6314 5.37164 28.6314 6.5488V32.1261C28.6314 33.3032 27.6772 34.2575 26.5 34.2575C25.3228 34.2575 24.3686 33.3032 24.3686 32.1261V6.5488C24.3686 5.37164 25.3228 4.41736 26.5 4.41736Z"
                      fill="#0A0A4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5799 25.7318C12.7571 25.7318 13.7114 26.6861 13.7114 27.8632V38.5204C13.7114 40.8748 15.6199 42.7833 17.9743 42.7833H35.0258C37.3801 42.7833 39.2886 40.8748 39.2886 38.5204V27.8632C39.2886 26.6861 40.2429 25.7318 41.4201 25.7318C42.5972 25.7318 43.5515 26.6861 43.5515 27.8632V38.5204C43.5515 43.2291 39.7344 47.0462 35.0258 47.0462H17.9743C13.2656 47.0462 9.4485 43.2291 9.4485 38.5204V27.8632C9.4485 26.6861 10.4028 25.7318 11.5799 25.7318Z"
                      fill="#0A0A4B"
                    />
                  </svg>
                </div> */}
                <div className="mx-auto  ">
                <input
                 ref={fileInputField}
                type="file"
                accept="text/csv"
                className="hidden"
                hidden
                onChange={(e) => {
                  csvAdaptor(e.target.files)



                }}
                
                />
                <FileDrop onDrop={csvAdaptor} onTargetClick={onTargetClick} >
                  {filePickerContent}
                </FileDrop>

                </div>
               
               

              </div>
              {/* <div className="container">
                <div className="row">
                  <h5 className="mx-auto" style={{ color: "#0a0a4b" }}>
                    OR
                  </h5>
                </div>
               
              </div> */}
            </div>

            {/* <div
              className="row uploadbox my-3 mx-1"
              style={{
                width: "356px",
                backgroundColor: "#D2D4E3",
                height: "300px",
              }}
            >
              <div className="insidebox mx-auto mt-3">
                <div className="row mx-auto mt-5">
                  <svg
                    className="mx-auto my-auto"
                    width="53"
                    height="52"
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.9928 5.04164C25.8252 4.20926 27.1748 4.20926 28.0071 5.04164L36.5329 13.5674C37.3653 14.3998 37.3653 15.7493 36.5329 16.5817C35.7005 17.4141 34.351 17.4141 33.5186 16.5817L26.5 9.5631L19.4814 16.5817C18.649 17.4141 17.2995 17.4141 16.4671 16.5817C15.6347 15.7493 15.6347 14.3998 16.4671 13.5674L24.9928 5.04164Z"
                      fill="#0A0A4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.5 4.41736C27.6772 4.41736 28.6314 5.37164 28.6314 6.5488V32.1261C28.6314 33.3032 27.6772 34.2575 26.5 34.2575C25.3228 34.2575 24.3686 33.3032 24.3686 32.1261V6.5488C24.3686 5.37164 25.3228 4.41736 26.5 4.41736Z"
                      fill="#0A0A4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5799 25.7318C12.7571 25.7318 13.7114 26.6861 13.7114 27.8632V38.5204C13.7114 40.8748 15.6199 42.7833 17.9743 42.7833H35.0258C37.3801 42.7833 39.2886 40.8748 39.2886 38.5204V27.8632C39.2886 26.6861 40.2429 25.7318 41.4201 25.7318C42.5972 25.7318 43.5515 26.6861 43.5515 27.8632V38.5204C43.5515 43.2291 39.7344 47.0462 35.0258 47.0462H17.9743C13.2656 47.0462 9.4485 43.2291 9.4485 38.5204V27.8632C9.4485 26.6861 10.4028 25.7318 11.5799 25.7318Z"
                      fill="#0A0A4B"
                    />
                  </svg>
                </div>
                <div className="row mx-auto">
                  <h5 className="mx-auto my-2" style={{ color: "#0a0a4b" }}>
                    <b>Drag and drop files</b>
                  </h5>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <h5 className="mx-auto" style={{ color: "#0a0a4b" }}>
                    OR
                  </h5>
                </div>
                <div className="row">
                  <button
                    type="button"
                    class="btn text-white mx-auto"
                    style={{
                      backgroundColor: "#0a0a4b",
                      height: "50px",
                      width: "93.3%",
                      fontWeight: "500",
                    }}
                  >
                    Choose a file
                  </button>
                </div>
              </div>
            </div> */}
          
               {    data?.map((file,index) => {
              return(
                <>
              
                  <Questions index={index}  question={file.Question} />

               
                </>
                
              )
            }) }
             
           

          
            <div className="quizbox container my-3" style={{ width: "65vw" }}>
              <div className="row my-1">
                <b>
                  <h5>Question 2</h5>
                </b>
              </div>
              <div className="row my-3">
                <h5>
                  What is the shortcut for the adding Auto Layout in Figma?
                </h5>
              </div>
              <div className="col">
                <div className="row my-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Ctrl + A
                    </label>
                  </div>
                </div>
                <div className="row my-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Shift + A
                    </label>
                  </div>
                </div>
                <div className="row my-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Tab + A
                    </label>
                  </div>
                </div>
                <div className="row my-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                    />
                    <label class="form-check-label" for="flexRadioDefault4">
                      Alt + A
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadQuestions;
