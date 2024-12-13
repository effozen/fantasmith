import ColorModeToggle from "./ColorModeToggle"
import {useColorMode} from "@docusaurus/theme-common";

export const ColorModeToggleButton = () => {
  const {colorMode, setColorMode} = useColorMode();

  return (
    <ColorModeToggle value={colorMode} onChange={setColorMode}/>
  );
}