import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
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

const AddPetButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full">
          <PlusIcon className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new pet</DialogTitle>
          <DialogDescription>Add a pet to the database</DialogDescription>
        </DialogHeader>

        <PetForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddPetButton;
