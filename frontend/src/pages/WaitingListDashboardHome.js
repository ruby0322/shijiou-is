import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WaitingList from '../components/WaitingList';
import WaitingListHistory from './WaitingListHistory';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


const WaitingListDashboardHome = () => {

    const navigate = useNavigate();

    const clickHistory = () => {
        console.log("clickHistory");
        navigate('/waiting-list-dashboard/history/');
    }

    const clickDeleteAll = () => {
        console.log("clickDeleteAll");
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Waiting List Dashboard
                    </Typography>
                    <Button variant="outlined" color="inherit" sx={{mr: 1}} onClick={clickHistory}>歷史紀錄</Button>
                    <Button variant="outlined" color="error" sx={{mr: 1}} onClick={clickDeleteAll}>一鍵清除</Button>
                    </Toolbar>
                </AppBar>
                </Box>
            <WaitingList/>
        </div>
    );
}

export default WaitingListDashboardHome;
