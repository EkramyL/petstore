'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

type CheckoutPetButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const CheckoutPetButton = ({ children, onClick }: CheckoutPetButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CheckoutPetButton;
