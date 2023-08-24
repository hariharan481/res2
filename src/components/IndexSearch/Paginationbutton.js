import React, { useState } from 'react';
import"../styles/Paginationbuton.css"
import Sectionnotes1 from './Sectionnotes2';
import Codenotes1 from '../Codesnotes1';




const PageNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const pills = ['A', 'B', 'C', 'D',"E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // Replace this array with your actual pill names

  const handleNextClick = () => {
    setActiveIndex(prevIndex => Math.min(prevIndex + 1, pills.length - 1));
  };

  const handlePreviousClick = () => {
    setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNavigateToSectionnotes1 = () => {
    // Set the active index to the index of "C" button (index 2)
    setActiveIndex(2);
    // Update global.clickedTab with the value "C"
    global.clickedTab = "C";
  };

  const activeItem = pills[activeIndex]; 
  console.log(activeItem);
   global.clickedTab = activeItem;
   console.log( global.clickedTab );


  // Array of content correspondi//ng to each pill
  const content = [//
    <div style={{
      height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
    }}>
<Codenotes1/>
    </div>,
    <div style={{
      height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
      
    }}>
         <Sectionnotes1/> 
    </div>,
   <div style={{
    height: "58vh",
    width: "45.5vw",
    overflowY: "scroll",
    paddingLeft: "30px",
  }}  >,
     <Sectionnotes1/> 
   </div>,
    <div style={{
      height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
    }}>
    <Sectionnotes1/> 
  </div  >,
   <div style={{
    height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
  }}>
   <Sectionnotes1/> 
 </div>,
    <div style={{
      height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
    }}>
    <Sectionnotes1/> 
  </div>,
     <div style={{
      height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
    }}>
     <Sectionnotes1/> 
   </div>,
      <div style={{
        height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
      }}>
      <Sectionnotes1/> 
    </div>,
       <div>
       <Sectionnotes1/> 
     </div>,
        <div style={{
          height: "58vh",
          width: "45.5vw",
          overflowY: "scroll",
          paddingLeft: "30px",
        }}> 
        <Sectionnotes1/> 
      </div>,
         <div  style={{
          height: "58vh",
          width: "45.5vw",
          overflowY: "scroll",
          paddingLeft: "30px",
        }}>
         <Sectionnotes1/> 
       </div>,
          <div style={{
            height: "58vh",
            width: "45.5vw",
            overflowY: "scroll",
            paddingLeft: "30px",
          }}>
          <Sectionnotes1/> 
        </div>,
           <div style={{
            height: "58vh",
            width: "45.5vw",
            overflowY: "scroll",
            paddingLeft: "30px",
          }}>
           <Sectionnotes1/> 
         </div>,
            <div style={{
              height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
            }}>
            <Sectionnotes1/> 
          </div>,
             <div style={{
              height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
            }}>
             <Sectionnotes1/> 
           </div>,
              <div style={{
                height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
              }}>
              <Sectionnotes1/> 
            </div>,
             <div style={{
              height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
            }}>,
             <Sectionnotes1/> 
           </div>,
            <div style={{
              height: "58vh",
              width: "45.5vw",
              overflowY: "scroll",
              paddingLeft: "30px",
            }}>
            <Sectionnotes1/> 
          </div>,
           <div style={{
            height: "58vh",
            width: "45.5vw",
            overflowY: "scroll",
            paddingLeft: "30px",
          }}>
           <Sectionnotes1/> 
         </div>,
            <div style={{
              height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
            }}>
            <Sectionnotes1/> 
          </div>,
             <div  style={{
              height: "58vh",
              width: "45.5vw",
              overflowY: "scroll",
              paddingLeft: "30px",
            }}>
             <Sectionnotes1/> 
           </div>,
              <div  style={{
                height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
              }}>
              <Sectionnotes1/> 
            </div>,
               <div  style={{
                height: "58vh",
                width: "45.5vw",
                overflowY: "scroll",
                paddingLeft: "30px",
              }}>
               <Sectionnotes1/> 
             </div>,
                <div  style={{
                  height: "58vh",
                  width: "45.5vw",
                  overflowY: "scroll",
                  paddingLeft: "30px",
                }}>
                <Sectionnotes1/> 
              </div>,
                 <div  style={{
                  height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
                }}>
                 <Sectionnotes1/> 
               </div>,
                  <div  style={{
                    height: "58vh",
                    width: "45.5vw",
                    overflowY: "scroll",
                    paddingLeft: "30px",
                  }}>
                  <Sectionnotes1/> 
                </div>,
                   <div  style={{
                    height: "58vh",
                    width: "45.5vw",
                    overflowY: "scroll",
                    paddingLeft: "30px",
                  }}>
                   <Sectionnotes1/> 
                 </div>,
                    <div>
                    <Sectionnotes1/> 
                  </div>,
                     <div  style={{
                      height: "58vh",
      width: "45.5vw",
      overflowY: "scroll",
      paddingLeft: "30px",
                    }}>
                     <Sectionnotes1/> 
                   </div>,
                      <div  style={{
                        height: "58vh",
                        width: "45.5vw",
                        overflowY: "scroll",
                        paddingLeft: "30px",
                      }}>
                      <Sectionnotes1/> 
                    </div>,
                    <div  style={{
                      height: "58vh",
                      width: "45.5vw",
                      overflowY: "scroll",
                      paddingLeft: "30px",
                    }}>
                    <Sectionnotes1/> 
                  </div>,
          
  

 

    

  
    
    
  ];
  //const [activeBtnIndex, setActiveBtnIndex] = useState(0);
  //const handleClick1 = (index  ,event, newValue)=> {
   // setActiveBtnIndex(index);
   // const clickedTabLabel = tabLabels[newValue];
   // console.log("Tab clicked: ", clickedTabLabel);
 
  //  global.clickedTab=clickedTabLabel
 // };
  //const handleChange = (event, newValue) => {
  //  setValue(newValue);
   // const clickedTabLabel = tabLabels[newValue];
   // console.log("Tab clicked: ", clickedTabLabel);
   // global.clickedTab = clickedTabLabel;
 // };
  const [value, setValue] = useState(0);

  return (
    <div className='center'>
      <ul className="pagination">
       
         
          
            {pills.map((item, index) => (

            <button 
            //onChange={handleChange} 
            style={{
  }}  onClick={() => setActiveIndex(index)   }  className={`btn ${activeIndex === index ? 'active' : ''}`}> {item}</button> ))}
 
     
      </ul>
      <div className="content-wrapper">{content[activeIndex]}</div>
      
    </div>
  );
};

export default PageNavigation;