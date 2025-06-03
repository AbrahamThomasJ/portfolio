// [build] library: 'shadcn'
import { RocketIcon } from "@radix-ui/react-icons";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { AlertDialog, AlertDialogDescription, AlertDialogTitle } from "../components/ui/alert-dialog";

const meta = {
  title: "ui/Alert",
  component: AlertDialog,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => {
    return (
      <AlertDialog>
        <RocketIcon className="h-4 w-4" />
        <AlertDialogTitle>Heads up!</AlertDialogTitle>
        <AlertDialogDescription>
          You can add components to your app using the cli.
        </AlertDialogDescription>
      </AlertDialog>
    );
  },
  args: {},
};

export const Destructive = {
  render: () => {
    return (
      <AlertDialog>
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertDialogTitle>Error</AlertDialogTitle>
        <AlertDialogDescription>
          Your session has expired. Please log in again.
        </AlertDialogDescription>
      </AlertDialog>
    );
  },
  args: {},
};