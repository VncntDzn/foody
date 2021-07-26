import { Typography } from "@material-ui/core";

const Instructions = ({ strInstructions }: { strInstructions: any }) => {
  return (
    <div>
      <Typography color="primary" variant="h5" align="center">
        -- How to cook --
      </Typography>
      {strInstructions?.split(".").map((tag: string, i: number) => (
        <ul key={i}>
          <li>{tag}</li>
        </ul>
      ))}
    </div>
  );
};

export default Instructions;
