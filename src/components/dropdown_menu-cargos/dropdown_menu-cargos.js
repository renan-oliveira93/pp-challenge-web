import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function BasicMenuCargos() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src='/assets/menu.png' />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button', }}
            >
                <MenuItem style={{ width: '280px', height: '61px' }} onClick={handleClose}>
                    <img src='/assets/eye.png' /><Link href='./permissoes' ><p style={{ margin: '1rem', color: '#587169' }}>Ver cargo</p></Link></MenuItem>
                <MenuItem style={{ width: '280px', height: '61px' }} onClick={handleClose}>
                    <img src='/assets/edit.png' /><p style={{ margin: '1rem', color: '#CAD6D1' }}>Editar</p></MenuItem>
                <MenuItem style={{ width: '280px', height: '61px' }} onClick={handleClose}>
                    <img src='/assets/duplicate.png' /><p style={{ margin: '1rem', color: '#CAD6D1' }}>Duplicar</p></MenuItem>
                <MenuItem style={{ width: '280px', height: '61px' }} onClick={handleClose}>
                    <img src='/assets/repeat.png' /><p style={{ margin: '1rem', color: '#CAD6D1' }}>Excluir</p></MenuItem>
            </Menu>
        </div >
    );
}
