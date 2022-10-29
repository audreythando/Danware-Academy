import React, { useState } from 'react'
import {
  Flex,
  Heading,
  Box,
  Input,
  Image,
  Center,
  useDisclosure,
 
  useMediaQuery,
  Text
} from '@chakra-ui/react'
import DetailModal from '../pages/detailsmodal'
import { TriangleDownIcon } from '@chakra-ui/icons'
import {useForm, SubmitHandler } from 'react-hook-form';


interface FormInputs {
  fullName: string
  password: string
  email: string;
}
  

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
    const submitForm = (data : FormInputs) => {
      console.log(JSON.stringify(data, null));
    };


  const [isMobile] = useMediaQuery('(max-width: 600px)')

  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeFullNameHandler = (e: React.ChangeEvent<any>): void => {
    setFullName(e.target.value)
  }
  const changeEmailHandler = (e: React.ChangeEvent<any>): void => {
    setEmail(e.target.value)
  }
  const changePasswordHandler = (e: React.ChangeEvent<any>): void => {
    setPassword(e.target.value)

  }

  const { register,
    handleSubmit,
    watch,
    formState: { errors } }
    = useForm<FormInputs>();

  const submitFormHandler: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log('submit form is', data);
    // setShowModal(true)
  }
 


 

  return (
    <Flex direction={isMobile ? 'column-reverse' : 'row'}  justify='center' maxHeight='100vh'>

      <Center width={isMobile ? '100%' : '50%'} >
        <Image src='./Images/picture.png' />
      </Center>

  
      <Box width= {isMobile ? '100%' : '50%'} background='#F7F8FF'>
      <Flex direction='row' justify='space-between'>
        <Box></Box>
        <Box>
          <h5>English UK <TriangleDownIcon color='black' /></h5>
        </Box>
      </Flex>

        <Center flexDirection='column' height='-webkit-fit-content'>
          <Box>
            <Heading
              fontFamily='Roboto' fontWeight='700'
              size='30px' mt='30px' mb='15px' >
              Sign Up
            </Heading>
          </Box>

          <Box>
            <Image src='./Images/logo.png' alt='logo' width='313px' height='158px' />
          </Box>
 <Box></Box>
        <Box mt='10px' fontWeight='100' color='grey' fontSize='15px'>
          <h5>-OR-</h5>
        </Box>


        <form onSubmit={handleSubmit(submitFormHandler)}>
<Input
  variant='flushed'
  type='text'
  value={fullName}
  {...register('fullName', { required: true })}
  placeholder='Enter FullName'
  onChange={(e: React.ChangeEvent<any>): void => changeFullNameHandler(e)} />
<div>
  {errors.fullName && <span>Fullname is required</span>}

</div>
<Input
  variant='flushed'
  type='email'
  value={email}
  {...register('email',{ required: true, pattern: /\S+@\S+\.\S+/ })}
  placeholder='Email'
  onChange={(e: React.ChangeEvent<any>): void => changeEmailHandler(e)} />
<div>
  {errors.email && <p>Invalid Email Address</p>}

</div>
<Input
  variant='flushed'
  type='text'
  value={password}
  {...register('password', { required: true , maxLength:8 ,minLength:4})}
  placeholder='Password'

  onChange={(e: React.ChangeEvent<any>): void => changePasswordHandler(e)} />

  
<div>
  {errors.password && <p>Password is required</p>}

</div>
<DetailModal name={fullName} email={email} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />

</form>
          <Text text-align='center' color=' #000000' font-family='Roboto' font-style='normal' font-size='13px' font-weight='100' line-height='40px'>Already have an account ? Login</Text>


        </Center>
      </Box>

    </Flex>



  )
}

export default SignUp;