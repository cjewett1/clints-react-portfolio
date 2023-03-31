import * as React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

import Location from "/public/static/Location.svg";
import PhoneNumber from "/public/static/PhoneNumber.svg";
import Email from "/public/static/Email.svg";
import Website from "/public/static/Website.svg";

const questions = [
    {
        value: "colleague",
        label: "A colleague mentioned your name to me.",
    },
    {
        value: "linkedin",
        label: "I saw your profile on LinkedIn.",
    },
    {
        value: "website",
        label: "I found you via your website.",
    },
    {
        value: "other",
        label: "Other",
    },
];

export default function QuestionForm() {
    const [formData, setFormData] = useState([]);
    const [question, setQuestion] = useState("");
    const [name, setName] = useState("");
    const [askedQuestion, setAskedQuestion] = useState("");
    const [form, setForm] = useState(false);

    const questionHandler = (event) => {
        setQuestion(event.target.value);
    };

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const askedQuestionHandler = (event) => {
        setAskedQuestion(event.target.value);
    };

    const submitHandler = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch(`${DATABASE_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question,
                    name,
                    askedQuestion,
                    email,
                }),
            });
            if (!response.ok) {
                throw new Error(`Bad Status = ${response.status}`);
            }
            const data = await response.json();
            setFormData([data, ...formData]);
            setForm(true);
        } catch (error) {
            console.log(`Error of: ${error.message}`);
        }
    };

    return (
        <>
            <div className='section-heading'>
                <h1>Contact Me</h1>
            </div>
            <section className='contact-background'>
                <div className='contact-flex-container'>
                    <div className='clint-info'>
                        <h3>My Information</h3>
                        <div className='phone'>
                            <div>
                                <PhoneNumber />
                            </div>
                            <div>
                                <p>780-242-4053</p>
                            </div>
                        </div>
                        <div className='email'>
                            <div>
                                <Email />
                            </div>
                            <div>
                                <p>clintondgorda@gmail.com</p>
                                <p>clint@clinton-gorda.com</p>
                            </div>
                        </div>
                        <div className='website'>
                            <div>
                                <Website />
                            </div>
                            <div>
                                <p>www.clinton-gorda.com</p>
                            </div>
                        </div>
                        <div className='location'>
                            <div>
                                <Location />
                            </div>
                            <div>
                                <p>Edmonton, AB</p>
                            </div>
                        </div>
                    </div>
                    <form className='question-form'>
                        <Grid container rowSpacing={4}>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{
                                    gap: "2rem",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                {!form && (
                                    <Typography
                                        sx={{
                                            gap: "1rem",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                        display='flex'
                                        variant='h3'
                                        maxWidth={725}
                                        fontWeight={300}
                                    >
                                        Send me a message and I will get back to
                                        you as soon as possible.{" "}
                                        <HourglassTopIcon></HourglassTopIcon>
                                    </Typography>
                                )}
                                {form && (
                                    <Typography
                                        display='flex'
                                        variant='h3'
                                        fontWeight={300}
                                        sx={{
                                            gap: "1rem",
                                            alignItems: "center",
                                        }}
                                    >
                                        Thank you for your response!{" "}
                                        <ThumbUpAltIcon></ThumbUpAltIcon>{" "}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ justifyContent: "flex-end" }}
                            >
                                <TextField
                                    sx={{ width: 725, background: "#a7a6ab" }}
                                    id='select-where'
                                    select
                                    label='How did you hear about me?'
                                    value={question}
                                    onChange={questionHandler}
                                    defaultValue='Select'
                                >
                                    {questions.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ justifyContent: "flex-end" }}
                            >
                                <TextField
                                    sx={{ width: 725, background: "#a7a6ab" }}
                                    required
                                    id='outlined-required'
                                    value={name}
                                    onChange={nameHandler}
                                    label='Enter your name here'
                                    placeholder='Your Name'
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ justifyContent: "flex-end" }}
                            >
                                <TextField
                                    sx={{ width: 725, background: "#a7a6ab" }}
                                    id='outlined-multiline-static'
                                    label='Question for me?'
                                    value={askedQuestion}
                                    onChange={askedQuestionHandler}
                                    multiline
                                    rows={4}
                                    placeholder='Ask it here!'
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ justifyContent: "flex-end" }}
                                alignItems='center'
                            >
                                <TextField
                                    sx={{ width: 725, background: "#a7a6ab" }}
                                    required
                                    id='outlined-required'
                                    label='Enter your email address'
                                    placeholder='Your Email'
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                sx={{ justifyContent: "flex-end" }}
                            >
                                <Button
                                    sx={{
                                        width: 725,
                                        fontFamily: "Red Hat Display",
                                        fontSize: "2rem",
                                        background: "#53cde1",
                                        color: "black",
                                        fontWeight: "300",
                                    }}
                                    onClick={submitHandler}
                                    variant='contained'
                                    display='flex'
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </section>
        </>
    );
}
