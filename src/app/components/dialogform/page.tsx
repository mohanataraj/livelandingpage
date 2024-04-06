/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { useState, FormEvent, ChangeEvent, ChangeEventHandler } from 'react';
  
export default function dialogForm (){

    const [open, setOpen] = useState<boolean>(false);
 
    const handleOpen = () => setOpen(!open);

    return (
        <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Thank you for Signing up</DialogHeader>
        <DialogBody>
         Please keep an eye on your inbox, we will update you with our progress.
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    )
}