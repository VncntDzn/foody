import {
  createStyles,
  makeStyles,
  Theme,
  Card,
  CardContent,
  Container,
  CardMedia,
  Typography,
} from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface I_StepSlides {
  data?: object;
  id?: number;
  img?: string;
  content?: string;
  name?: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      textAlign: 'justify',
      borderRadius: '10px',

      margin: '1rem 0',
      [theme.breakpoints.up('sm')]: {
        width: '60%',
      },
      [theme.breakpoints.up('md')]: {
        width: '25rem',
        height: '25rem',
      },
    },
    slidesContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const responsive = {
  tablet: {
    breakpoint: { max: 3000, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const StepSlides = ({ data }: I_StepSlides) => {
  const styles = useStyles();
  return (
    <Carousel responsive={responsive}>
      {data.map(({ id, img, content, name }) => (
        <Container className={styles.slidesContainer} key={id}>
          <Card className={styles.cardContainer} raised>
            <CardMedia component='img' title={name} image={img.src} />

            <CardContent>
              <Typography color='primary' variant='h5' gutterBottom>
                {id}. {name}
              </Typography>
              {content}
            </CardContent>
          </Card>
        </Container>
      ))}
    </Carousel>
  );
};

StepSlides.propTypes = {};

export default StepSlides;
