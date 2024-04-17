import { Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react'
import { SetStateAction, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import { loginDetails } from '../types/PropTypes'

const LoginPopUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate()
  const { setIsLoggedIn, setAuthUser } = useAuth()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleLogin = async () => {
    console.log(email, password)
    const details : loginDetails = {
      email: email!,
      password: password!
    }
    const token = await loginUser(details)
    .then((detail) => {
      localStorage.setItem('loggedInUser', JSON.stringify(detail))
      setIsLoggedIn(true)
      setAuthUser(JSON.stringify(detail))
    }).finally(() => navigate("/dashboard"))
    return token
  }
  const handleChangeEmail = (event: { target: { value: SetStateAction<string> } }) => setEmail(event.target.value)
  const handleChangePassword = (event: { target: { value: SetStateAction<string> } }) => setPassword(event.target.value)

  return (
    <>
      <Button onClick={onOpen} colorScheme='blue'  mt={7}>Make an Appointment Now</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Emaill Address</FormLabel>
              <Input ref={initialRef} placeholder='Email' onChange={ handleChangeEmail } />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type='password' placeholder='Password' onChange={ handleChangePassword } />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => handleLogin()}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}



const loginUser = async (creds: loginDetails) => {
  
  let headers = new Headers()
  headers.set('Content-Type', 'application/json')
  return await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(creds),
    headers,
    credentials: 'include'
    }).then((response) => response.json())
    .then((data) => {
        return data
    })
}

export default LoginPopUp
