import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';



export default function PopoverPopupState() {


  const {categoryId} = useParams()
  const category = fakeData.find(cat => cat.id === categoryId)

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" style={{backgroundColor:"#FF6E40", width:"80%"}} {...bindTrigger(popupState)}>
            Submit
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical:'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              {/* <Typography>The content of the Popove {category.id} </Typography> */}

              <div class="d-flex justify-content-around" style={{width:"220px"}}>
                 <img src={category.image} style={{width:"10%"}} alt="" />
                 <p>{category.category} </p>
                 <img src={category.icon} style={{width:"5%"}} alt="" />
                 <h6>{category.passenger} </h6>
                  <h6>{category.price} </h6>
              
              </div>
              <div class="d-flex justify-content-around" style={{width:"220px"}}>
                 <img src={category.image} style={{width:"10%"}} alt="" />
                 <p>{category.category} </p>
                 <img src={category.icon} style={{width:"5%"}} alt="" />
                 <h6>{category.passenger} </h6>
                  <h6>{category.price} </h6>
              
              </div>
              <div class="d-flex justify-content-around" style={{width:"220px"}}>
                 <img src={category.image} style={{width:"10%"}} alt="" />
                 <p>{category.category} </p>
                 <img src={category.icon} style={{width:"5%"}} alt="" />
                 <h6>{category.passenger} </h6>
                  <h6>{category.price} </h6>
              
              </div>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
