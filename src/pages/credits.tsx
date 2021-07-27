import Head from "next/head";
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import MainLayout from "layouts/MainLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "5rem 1rem",
    },
  })
);

const Credits = () => {
  const styles = useStyles();
  return (
    <div>
      <Head>
        <title>Credits</title>
        <meta
          name="description"
          content="Discover foods by ingredients in Foody!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.root}>
        <MainLayout>
          <Grid container justify="center" direction="column">
          <Typography variant="h5">Credits to the following:</Typography>
            <Typography>Hanna Gomozova for the amazing design</Typography>
            <a href="https://www.behance.net/hanna_gomozova">
              Visit her profile on Behance
            </a> 
            <Typography>Vincent Dizon for the amazing website</Typography>
            <Typography variant="subtitle1">Email: <span style={{fontWeight:600}}>workvpdizon@gmail.com</span></Typography>
            <a href="https://vpdizon.vercel.app/">
              Visit his personal website
            </a>
            <hr style={{width: '100%'}}/>
             
          </Grid>
        </MainLayout>
      </main>
    </div>
  );
};

export default Credits;
