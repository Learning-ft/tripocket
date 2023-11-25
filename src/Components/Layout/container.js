import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';


const Container = () =>{
    const isPc = useMediaQuery("(min-width:1024)");
    const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
    const isMobile = useMediaQuery("(max-width:767px)");

    return(
        <>
            {isPc && <p>Pc</p>}
            {isTablet && <p>Tablet</p>}
            {isMobile && <p>Mobile</p>}
        </>
    );
}

export default Container;