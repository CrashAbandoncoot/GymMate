import * as React from 'react';
import Button from '@mui/material/Button';
import { Popover, Typography } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


const abdominalsLink = <Link to="./abdominals" underline="none" > Abdominals </Link>
const abductorsLink = <Link to="./abductors" underline="none"> Abductors </Link>
const adductorsLink = <Link to="./adductors" underline="none"> Adductors </Link>
const bicepLink = <Link to="./biceps" underline="none"> Biceps </Link>
const calvesLink = <Link to="./calves" underline="none"> Calves </Link>
const chestLink = <Link to="./chest" underline="none"> Chest </Link>
const forearmsLink = <Link to="./forearms" underline="none"> Forearms </Link>
const glutesLink = <Link to="./glutes" underline="none"> Glutes </Link>
const hamstringsLink = <Link to="./hamstrings" underline="none"> Hamstrings </Link>
const latsLink = <Link to="./lats" underline="none"> Lats </Link>
const lowerBackLink = <Link to="./lower_back" underline="none"> Lower-Back </Link>
const middleBackLink = <Link to="./middle_back" underline="none"> Middle-Back </Link>
const neckLink = <Link to="./neck" underline="none"> Neck </Link>
const QuadricepsLink = <Link to="./quadriceps" underline="none"> Quadriceps </Link>
const trapsLink = <Link to="./traps" underline="none"> Traps </Link>
const tricepsLink = <Link to="./triceps" underline="none" > Triceps </Link>


export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const history = useHistory();
  
    useEffect(() => {
      const unlisten = history.listen(() => {
        window.location.reload();
      });
      return () => {
        unlisten();
      };
    }, [history]);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleNotesClick = () => {

    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
         Add Exercises
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}> {abdominalsLink}{abductorsLink}{adductorsLink} <br/>
           {bicepLink} {calvesLink} {chestLink} <br/> {forearmsLink} {glutesLink} {hamstringsLink} <br/>
           {latsLink} {lowerBackLink} {middleBackLink} <br/> {neckLink} {QuadricepsLink} {trapsLink} {tricepsLink}
           </Typography>
        </Popover>
        <Button variant="contained" onClick={handleNotesClick}> Add Notes </Button>
      </div>
    );
  }