/**
 *
 * Menu
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box, Link } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';
import { changeTheme, selectThemeKey } from 'theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'theme/utils';
import Menus from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
import { Link as RouterLink } from 'react-router-dom';
import i18next from 'i18next';

interface Props {}
export const Menu = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    saveTheme(theme === 'light' ? 'dark' : 'light');
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (data: any) => {
    i18next.changeLanguage(data);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense">
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Link component={RouterLink} to="/" color="secondary">
              <Typography color="secondary" variant="h5">
                Flight Booker
              </Typography>
            </Link>
          </Box>
          <Box>
            <Button onClick={() => handleThemeChange()}>
              {theme === 'light' ? <Brightness7 /> : <Brightness4 />}
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Box marginRight={1}>
                <TranslateIcon fontSize="small" />
              </Box>
              <Typography variant="button">
                {i18next.language === 'en_US'
                  ? 'English'
                  : i18next.language === 'PT_BR'
                  ? 'Português'
                  : 'Español'}
              </Typography>
            </Button>
            <Menus
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleLanguageChange('en_US');
                  handleClose();
                }}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLanguageChange('PT_BR');
                  handleClose();
                }}
              >
                Português
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLanguageChange('es');
                  handleClose();
                }}
              >
                Español
              </MenuItem>
            </Menus>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
});
