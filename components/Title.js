import Typography from "@mui/material/Typography";

export default function Title(props) {
  return (
    <Typography
      style={{
        textAlign: "center",
        padding: "2rem",
        textTransform: "uppercase",
      }}
      variant="h2"
    >
      {props.children}
    </Typography>
  );
}
