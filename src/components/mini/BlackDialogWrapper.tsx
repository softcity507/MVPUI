// components/common/BlackDialogWrapper.tsx
import React from "react";
import { BlackDialog } from "./BlackDialog";

interface BlackDialogWrapperProps {
  open: boolean;
  title: string;
  submitText?: string;
  onCloseOrSubmit: () => void;
  children: React.ReactNode;
}

export const BlackDialogWrapper: React.FC<BlackDialogWrapperProps> = ({
  open,
  title,
  submitText,
  onCloseOrSubmit,
  children
}) => {
  return (
    <BlackDialog
      open={open}
      title={title}
      submitText={submitText}
      onCloseOrSubmit={onCloseOrSubmit}
    >
      {children}
    </BlackDialog>
  );
};
