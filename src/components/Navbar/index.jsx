import React from 'react';
import styled from "styled-components";
import logo from "../../assets/images/my-logo.png"

const Nav = styled.nav`
   display:flex;
   padding:20px 0px;
   font-weight:bold;
   font-size:40px;
`;




const Navbar = () => {
    // let input = "stay home stay safe";
    // let output = [];

    // input =input.split("");
    // console.log(input);
    // let counter = 0;
    // for(let i=0;i<input.length;i++) {
    //     console.log(input[i])
    //     if(counter == 2) { 
    //         //    if(!input[i-1]) {
    //         //     output.push(input[i]); 
    //         //     counter= counter + 1;
    //         //    }               
    //         //    else
    //             if(input[i-1]!=  'a' && input[i-1]!=  'e'  && input[i-1]!=  'i' && input[i-1]!=  'o' && input[i-1]!=  'u') {
    //                 console.log("current input-->",  input[i-1]);
    //                 console.log("  vowel is e");
    //                 output.push(input[i].toUpperCase())
    //                 counter = 0;
    //             }
    //             else {
    //                 output.push(input[i]);
    //                 counter++;
    //             }
    //         }
    //     else {
    //         counter++;
    //         output.push(input[i]);
    //         console.log("counter-->", counter)
    //     }

        
    // }
    // console.log("output-->", output.join(""))
  
    return (
        <Nav>
            <img className="logo" src={logo}  alt=""  style={{height:"50px"}}/>
        </Nav>
            
        
    )
}

export default Navbar;
