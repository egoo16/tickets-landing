"use client";
import * as React from "react";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/theme/ColorModeContext";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import CheckIcon from "@mui/icons-material/Check";

export default function ColorModeToggle() {
  const { mode, resolvedMode, setMode } = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Tema">
        <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
          {resolvedMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => { setMode("light"); setAnchorEl(null); }}>
          <ListItemIcon>{mode === "light" ? <CheckIcon fontSize="small" /> : <Brightness7Icon fontSize="small" />}</ListItemIcon>
          <ListItemText primary="Claro" />
        </MenuItem>
        <MenuItem onClick={() => { setMode("dark"); setAnchorEl(null); }}>
          <ListItemIcon>{mode === "dark" ? <CheckIcon fontSize="small" /> : <Brightness4Icon fontSize="small" />}</ListItemIcon>
          <ListItemText primary="Oscuro" />
        </MenuItem>
        <MenuItem onClick={() => { setMode("system"); setAnchorEl(null); }}>
          <ListItemIcon>{mode === "system" ? <CheckIcon fontSize="small" /> : <SettingsBrightnessIcon fontSize="small" />}</ListItemIcon>
          <ListItemText primary="Automático" />
        </MenuItem>
      </Menu>
    </>
  );
}
