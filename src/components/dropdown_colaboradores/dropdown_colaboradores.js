import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function Dropdown_colaboradores() {
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
                <p style={{ color: '#587169' }}>Colaboradores</p> <img src='/assets/menu.png' />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button', }}
            >
                <MenuItem style={{ width: '280px', height: '61px' }} onClick={handleClose}>
                    <Link href='./' ><p style={{ margin: '1rem', color: '#587169' }}>Colaboradores</p></Link></MenuItem>
                <MenuItem style={{ width: '280px', height: '61px' }} onClick={handleClose}>
                    <Link href='./cargos' ><p style={{ margin: '1rem', color: '#587169' }}>Cargos</p></Link></MenuItem>
            </Menu>
        </div >
    );
}
