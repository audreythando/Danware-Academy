import { Box, Button, Img } from "@chakra-ui/react";
import Link from "next/link";
const Navbar = () => {

    return(
            <>
            <Box>
            <Img  src='.\Images\logo.png' alt='logo' width={'223px'} height={'86px'} position={'absolute'} alignItems={'flex-start'}/>
            </Box>
            <Box width={'252px'} height={'46px'} position={'absolute'} left={'500px'} marginTop={'20px'}>
            <Link href='/signUp'> <a>SignUp</a> </Link>
            </Box>
               <Box width={'252px'} height={'46px'} position={'absolute'} left={'700px'} marginTop={'20px'}> 
               <Link href='/login'> <a>Login</a> </Link>
             </Box> 
            <Box >
             <Button width={'240px'} height={'50px'} colorScheme={'orange'} border-radius={'15px'} position={'absolute'} right={'70px'}>Add Lesson Plan</Button> 
            </Box>
             </>
    )
}

export default Navbar;