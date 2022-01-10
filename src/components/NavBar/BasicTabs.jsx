import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "green" } }}
      >
        <Tab label={<span style={{ color: "black" }}>Map</span>} />
        <Tab label={<span style={{ color: "black" }}>Game</span>} />
      </Tabs>
    </Box>
  );
}
