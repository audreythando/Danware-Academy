import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Image,
    Input,
    Flex,
    Center
} from '@chakra-ui/react'


interface ModalDetails {
    name: string,
    email: string,
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}


function Details(props: ModalDetails) {
    



    const closeModal = () => {
        props.onClose();
        // navigate("/login");
    }




    return (
        <Box>
            <Button type='submit' onClick={props.onOpen} background='#DD6B20' mt='70px' width='290px'
                borderRadius='15px' height='40px' >SignUp</Button>

            <Modal isOpen={props.isOpen} onClose={closeModal} >
                <ModalOverlay />
                <ModalContent background='#F7F8FF' width='fit-content' height='450px' borderRadius='90px'>


                    <Flex maxW='100%' justify='center'>
                        <Center flexDirection='column'>
                            <Box>
                                <Image src='./Images/logo.png' alt='logo' width='204px' height='66px'  />
                            </Box>


                            <ModalHeader mt='50px' alignContent='center'> User Added</ModalHeader>
                        </Center>
                    </Flex>

                    <ModalCloseButton />
                    <ModalBody>





                        <Input value={props.name} variant='flushed' placeholder='Fullname' alignItems='center' fontFamily='Roboto' fontWeight={'100'} size={'18px'}
                            margin='25px' width='-moz-fit-content' />

                        <Input value={props.email} variant='flushed' placeholder='Email' alignItems='center' fontFamily='Roboto' fontWeight={'100'} size={'18px'}
                            margin='25px' width='-moz-fit-content' />



                    </ModalBody>

                    <ModalFooter>
                        <Button background={'#DD6B20'} borderRadius={'15px'} width={'350px'} height={'53px'} mb={'130px'} position={'absolute'} onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>



        </Box>
    )
}

export default Details