import React from 'react';
import {Card,CardMedia,CardContent,CardActions, Typography,IconButton} from '@material-ui/core';
import { AddShoppingCard } from '@material-ui/icons';
import useStyle from './style';


const Product = ({ product }) => {
  const classes = useStyle();
  

  return (
     <Card className={classes.root}>
       <CardMedia  className={classes.media} image='' title={product.name}/>
       <CardContent >
         <div className={classes.CardContent}>
           <Typography variant="h5" gutterBottom>
             {product.name}

           </Typography>
           <Typography variant="h5" gutterBottom>
             {product.name}

           </Typography>
           <Typography variant="h2" color="textSecondary">
             {product.description}

           </Typography>
         </div>
       </CardContent>
       <CardActions disableSpacing className={classes.cardAction}>
         <IconButton aria-label="Add to Cart">
           <AddShoppingCard />

         </IconButton>
       </CardActions>

     </Card>
  )
}

export default Product