import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PetForm from '../pet-form';

import React from 'react';

const EditPetButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit pet info</DialogTitle>
          <DialogDescription>edit pet information</DialogDescription>
        </DialogHeader>

        <PetForm />
      </DialogContent>
    </Dialog>
  );
};

export default EditPetButton;
