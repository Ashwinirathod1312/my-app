import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export const ReusableRadioGroup=(props)=>{
   
    const {data,className,onClick,value}= props;
    console.log(data,"props");
    return(
        <FormControl>
      
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          style={{display:"flex",flexDirection:"row",marginTop:"2%"}}
          className={className}
          onClick={onClick}
          value={value}
        >
            {data.map((el)=>{
               return  <FormControlLabel value={el} control={<Radio />} label={el} />
            })}
         
        </RadioGroup>
      </FormControl>
    )
}