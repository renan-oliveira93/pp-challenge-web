import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';


export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <MenuItem className={styles.item_menu} style={{ height: '15rem' }}><p>Categorias</p></MenuItem>
            </List>
            <Divider />
            <List>
                <MenuItem className={styles.item_menu} style={{ height: '15rem' }} >
                    <img src='/assets/eye.png' /><Link href='./detalhes_colaborador' >
                        <p style={{ margin: '1rem', color: '#587169' }}>Ver colaborador</p></Link></MenuItem>
            </List>
            <Divider />
            <List>
                <MenuItem className={styles.item_menu} style={{ height: '15rem' }} >
                    <img src='/assets/trash.png' />
                    <p style={{ margin: '1rem', color: '#CAD6D1' }}>Excluir</p></MenuItem>
            </List>
        </Box>
    );

    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Colaboradores <img src='/assets/menu.png' /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
