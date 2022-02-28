import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

export default function TemporaryDrawerCargos() {
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
                <MenuItem className={styles.item_menu} ><img src='/assets/eye.png' /><Link href='./permissoes' >
                    <p style={{ margin: '1rem', color: '#587169' }}>Ver cargo</p></Link></MenuItem>
            </List>
            <Divider />
            <List>
                <MenuItem className={styles.item_menu} ><img src='/assets/edit.png' />
                    <p style={{ margin: '1rem', color: '#CAD6D1' }}>Editar</p></MenuItem>
            </List>
            <Divider />
            <MenuItem className={styles.item_menu}> <img src='/assets/duplicate.png' />
                <p style={{ margin: '1rem', color: '#CAD6D1' }}>Duplicar</p></MenuItem>
            <Divider />
            <MenuItem className={styles.item_menu}><img src='/assets/repeat.png' />
                <p style={{ margin: '1rem', color: '#CAD6D1' }}>Excluir</p></MenuItem>
        </Box>
    );

    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Ações <img src='/assets/file-plus.png' /></Button>
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