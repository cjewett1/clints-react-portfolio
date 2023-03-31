import { Box, Typography } from "@mui/material";
import Container from "@mui/material";
import { margin, padding } from "@mui/system";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

export default function Intro() {
  return (
    <>
      <div className="intro-paragraph">
        <Typography
          variant="h1"
          fontSize="9rem"
          fontFamily={"Red Hat Display"}
          fontWeight={700}
        >
          My name is Clinton Gorda.
        </Typography>
        <Typography
          variant="h2"
          fontFamily={"red hat display"}
          fontWeight={"300"}
          fontSize={"6rem"}
          padding={"2rem 0rem"}
        >
          I <span>love</span> creating things on the internet.
        </Typography>
        <p>
          I am a recent NAIT Web Design and Development graduate with a passion
          for web accessibility and user experience with proficiency in various
          programming languages and front-end frameworks. I'm a developer and
          you can count on me to figure out the problems, pay attention to the
          details, and get the job done.
        </p>
        <Box display="flex" gap="2rem" padding="4rem 0">
          <Button
            variant="outlined"
            sx={{
              border: "1px solid #178F45",
              color: "#178F45",
              fontSize: "1.5rem",
              padding: "1rem 2.5rem",
            }}
          >
            Work With Me
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: "1rem 2rem",
              border: "1px solid #57cbff",
              color: "#57cbff",
              fontSize: "1.5rem",
            }}
          >
            Learn About Me
          </Button>
        </Box>
      </div>
    </>
  );
}
