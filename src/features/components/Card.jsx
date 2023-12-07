  import * as React from 'react';
  import { styled } from '@mui/material/styles';
  import Card from '@mui/material/Card';
  import CardHeader from '@mui/material/CardHeader';
  import CardMedia from '@mui/material/CardMedia';
  import CardContent from '@mui/material/CardContent';
  import CardActions from '@mui/material/CardActions';
  import Collapse from '@mui/material/Collapse';
  import Avatar from '@mui/material/Avatar';
  import IconButton from '@mui/material/IconButton';
  import Typography from '@mui/material/Typography';
  import { red } from '@mui/material/colors';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import ShareIcon from '@mui/icons-material/Share';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import MoreVertIcon from '@mui/icons-material/MoreVert';

  import { makeStyles } from '@mui/styles'
  

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

  const useStyles = makeStyles((theme) => ({
    customImage: {
      height: '14rem',  // Specify the desired height
      // You can also add other styles if needed
    },
  }));

  export default function RecipeReviewCard({title,description,thumbnail, price}) {
    const [expanded, setExpanded] = React.useState(false);

    const classes = useStyles();



    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        className='md:text-xl text-base py-8 h-10'
          
          title={title}
          
        />
        <CardMedia
          component="img"
          className={classes.customImage}
          image={thumbnail}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" className='h-10'>
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className='flex justify-between'>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon className='hover:text-red-600' />
          </IconButton>
       
        <Typography>
          ${price}
        </Typography>
        </CardActions>
      
      </Card>
    );
  }
