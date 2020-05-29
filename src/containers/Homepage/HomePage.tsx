
import Button from '@material-ui/core/Button'

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "store/types";
import { getItems } from "actions/items";
import Spinner from "components/spinner";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
      
    },
  }),
);

const HomePage = () => {
    const loading = useSelector((state: IState) => state.loading);
    const items = useSelector((state: IState) => state.items);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    
    const classes = useStyles();
    return (<Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h2" align="center">
                Home Page
            </Typography>
            <Spinner loading={loading} />
            <div>{!loading &&      
                <List component="nav"  aria-label="main mailbox folders">
                    {items.map((e,i) =>
                        <ListItem divider key={i} >
                            <ListItemText primary={e.name}></ListItemText>
                        </ListItem>
                    )}
                </List>
            }</div>
            <div style={{textAlign: 'center'}}>
                <Button variant="contained" color="primary" onClick={() =>
                    dispatch(getItems())
                }>Reload Items</Button>
            </div>

        </CardContent>
    </Card>);
}

export default HomePage;
