// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom'
// import AuthContext from '../auth';
// import { GlobalStoreContext } from '../store'

// import EditToolbar from './EditToolbar'

// import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// export default function AppBanner() {

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <Typography
//                         position="relative"                        
//                         variant="h4"
//                         noWrap
//                         component="div"
//                         sx={{ zIndex:3, display: { xs: 'none', sm: 'block' } }}                        
//                     >
//                         <Link onClick={handleHome} style={{ textDecoration: 'none', color: 'white' }} to='/'>⌂</Link>
//                     </Typography>
//                     <Box sx={{ flexGrow: 1 }}>{editToolbar}</Box>
//                     <Box position="relative" sx={{ zIndex: 3, display: { xs: 'none', md: 'flex' } }}>
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             onClick={handleProfileMenuOpen}
//                             color="inherit"
//                         >
//                             { getAccountMenu(auth.loggedIn) }
//                         </IconButton>
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             {
//                 menu
//             }
//         </Box>
//     );
// }

export default function NavigationBar() {
    return (
        <AppBar>
            Meng Jia Ou
        </AppBar>
    )


}