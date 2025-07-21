import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TITLE = String.raw`
$$\                                    
$$ |                                   
$$ |      $$$$$$\  $$$$$$$\   $$$$$$\  
$$ |     $$  __$$\ $$  __$$\ $$  __$$\ 
$$ |     $$ /  $$ |$$ |  $$ |$$ /  $$ |
$$ |     $$ |  $$ |$$ |  $$ |$$ |  $$ |
$$$$$$$$\\$$$$$$  |$$ |  $$ |\$$$$$$$ |
\________|\______/ \__|  \__| \____$$ |
                             $$\   $$ |
                             \$$$$$$  |
                              \______/                                        
`;

export function ASCIITitle() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(TITLE);
  }, []);

  return (
    <Box as="pre" fontSize={{ base: "4px", sm: "6px", md: "11px" }}>
      {title}
    </Box>
  );
}
