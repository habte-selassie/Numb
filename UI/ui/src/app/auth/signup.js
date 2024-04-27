import React from 'react'
import {Input} from "@nextui-org/react";
import { Link } from '@nextui-org/react';

import { useSession, signIn, signOut } from "next-auth/react";


const Signup = () => {

  const { data:session } = useSession();

const handleSignIn = async () =>{
  await signIn('google')
}

const handleSignOut = async()=>{
  await signOut();
}

{ session ? (
  
    <>
      <p>signed in as {session.user.email}</p> <br/>
      <Button onClick={handleSignOut}> Sign Out</Button>
    </>
  
): (
  
    <>
    <p>please sign in to continue</p> <br/>
      <Button onClick={handleSignIn}> Sign In </Button>
    </>
  )
}
  

  return (
    <>
          <h1>Sign UP</h1>
          <p>Join us now to access unlimited feature and seamless user experience </p>
      


    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" labelPlacement="outside" placeholder="you@example.com" />

      <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />

      <Input type="email" label="Email" placeholder="Enter your email" />

      <Input isClearable type="email" label="Email" variant="bordered" placeholder="Enter your email" defaultValue="junior@nextui.org"
       onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />

    </div>

   
    <div className="flex gap-4">
      <Checkbox defaultSelected color="default">Default</Checkbox>
      
      <Checkbox defaultSelected color="success">Success</Checkbox>
      <p>by signing up, you agree to our  <Link href="#" size="md">terms of service</Link></p>
    </div> 

    <Button color="success" fullWidth="true"> Sign Up </Button> 
 

  



     <div>signup</div>
     </>
  )
}


export default Signup

