import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ReusableRadioGroup } from "./ReusableRadioGroup";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Form.css"
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

const firstRadioGroup = ["Not Relavent", "Yes", "No"]
const secondRadioGroup = ["Not Relavent", "Daily", "several Times/weeks", "afew times/months"]
const checkboxData = ["Not Relavent", "under standing", "when sitting", "in walking"]
const mappedData = Array.from({ length: 10 }, (el, i) => i + 1);
const Form = ({ onSubmit, formData, setFormData, FromBack, setFromBack ,setFormCount, formCount}) => {
    const navigate = useNavigate();
  
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleAddForm = () => {
        setFormCount(prevCount => prevCount + 1);
    }


    const handleFormDataChange = (index, field, value) => {
        setFormData((prevData) => {
           
            const updatedData = [...prevData];
            console.log(updatedData[index],"updatedData",);
            if (!updatedData[index]) {
                updatedData[index] = {};
                console.log(updatedData[index],"updatedData[index]");
            }

            if (field === "multiCheckbox") {
                if (!updatedData[index][field]) {
                    updatedData[index][field] = [];
                }

                const checkboxValues = [...updatedData[index][field]];
                const checkboxIndex = checkboxValues.indexOf(value);

                if (checkboxIndex === -1) {
                    checkboxValues.push(value);
                } else {
                    checkboxValues.splice(checkboxIndex, 1);
                }

                updatedData[index][field] = checkboxValues;
            } else {
                updatedData[index][field] = value;
            }

            return updatedData;
        });
    };

    console.log(FromBack !== "", "FromBack !== ", FromBack);
    const handleNext = (event) => {
        setIsSubmitted(true);
        event.preventDefault();
        onSubmit(formData);
        navigate("/about");
    };
    console.log(formData, "setFormDatasetFormDatasetFormData");
    const renderForms = () => {
        const forms = [];

        for (let i = 0; i < formCount; i++) {
            { console.log(formData[i]?.description, "formData[i]?.description") }
            forms.push(
                <Paper elevation={3} >
                   
                    <h4 style={{
                        color: "black", display: "flex",
                        marginLeft: "12%",    paddingTop: "3%"

                    }}>If you have problems with pain/aches,stifness,weakness or functional problem,describe this/these below(Lis the problems in desending order with most troblesome first)</h4>
                    <Grid container spacing={2}>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                sx={{ paddingLeft: "15%" }}
                                id={`description-${i}`}
                                onChange={(e) => handleFormDataChange(i, "description", e.target.value)}
                                value={formData[i]?.description}

                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <h5 style={{
                                color: "black", display: "flex",
                                marginLeft: "26.2%"
                            }}>Have you been disgnoised with this problem?</h5>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <ReusableRadioGroup data={firstRadioGroup}
                                onClick={(e) => handleFormDataChange(i, "disgnoised", e.target.value)}
                                value={formData[i]?.disgnoised || ""} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <h5 style={{
                                color: "black", display: "flex",
                                marginLeft: "26.2%"
                            }}>Did the problem after physical trauma?</h5>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>

                            <ReusableRadioGroup data={firstRadioGroup}
                                onClick={(e) => handleFormDataChange(i, "physical_trauma", e.target.value)}
                                value={formData[i]?.physical_trauma || ""} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <h5 style={{
                                color: "black", display: "flex",
                                marginLeft: "26.2%"
                            }}>Did the problem start after mental trauma?</h5>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <ReusableRadioGroup data={firstRadioGroup}
                                onClick={(e) => handleFormDataChange(i, "mental_trauma", e.target.value)}
                                value={formData[i]?.mental_trauma || ""} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <div style={{
                                color: "black", display: "flex",
                                marginLeft: "17.2%",
                                marginTop: "3%"
                            }}>How often do you experience this problem?</div>
                            <ReusableRadioGroup data={secondRadioGroup} className="formRadio"
                                onClick={(e) => handleFormDataChange(i, "duration_problem", e.target.value)}
                                value={formData[i]?.duration_problem || ""} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div style={{
                                color: "black", display: "flex",
                                marginLeft: "13.2%",
                                marginTop: "3%"
                            }}>When do you experience this problem?</div>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5} >
                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">

                                <FormGroup                                >


                                    {checkboxData.map((el) => {
                                        return (
                                            <FormControlLabel
                                                key={el}
                                                control={
                                                    <Checkbox
                                                        name={el}
                                                        onClick={() => handleFormDataChange(i, "multiCheckbox", el)}
                                                        checked={formData[i]?.multiCheckbox?.includes(el) || false}
                                                    />
                                                }
                                                label={el}
                                            />
                                        );
                                    })}
                                </FormGroup>

                            </FormControl>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <TextField
                                id={`other_input-${i}`}
                                fullWidth
                                maxRows={4}
                                placeholder="other? for example in rotation, side bends, wing stairs, when working with the arms above the head"
                                style={{ marginTop: "6%", padding: "3%" }}
                                onChange={(e) => handleFormDataChange(i, "other_input", e.target.value)}
                                value={formData[i]?.other_input}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <div style={{
                                color: "black", display: "flex",
                                marginLeft: "17.2%"
                            }}>How intense is the experience of the problem on average on a 1 to 10 scale</div>
                            <ReusableRadioGroup data={mappedData} className="formRadio1"
                                onClick={(e) => handleFormDataChange(i, "intensity", e.target.value)}
                                value={formData[i]?.intensity || ""} />
                        </Grid>
                    </Grid>

                </Paper>
            );
        }

        return forms;
    };
    return (

        <>
            <form onSubmit={handleNext}>
                <Paper elevation={3} >
                <h1 style={{ color: "#2edaff" }}>Pain & Function Description</h1>
                    <h3 style={{
                        color: "black", padding: "0px 16%"
                    }}>The decription for the current situation gives your optimum Trainer a picture and clues to the underliying causes to your Problems</h3>

                    {renderForms()}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "12px 0",
                        }}
                    >
                        <Divider flexItem style={{ width: "40%", marginBottom: "2.5%" }} />
                        <AddCircleIcon
                            style={{
                                fontSize: 40,
                                color: "secondary",
                            }}
                            color="primary" onClick={handleAddForm}
                        />
                        <Divider flexItem style={{ width: "40%", marginBottom: "2.5%" }} />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5%",
                        paddingBottom: "2%"
                    }}>
                        <Button variant="contained">Back</Button>
                        <Button variant="contained" type="submit">Next</Button>
                    </div>
                </Paper>
            </form>
        </>
    )
}

export default Form;