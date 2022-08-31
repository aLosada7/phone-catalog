import { Button, Title, Text, Stack } from '@edene/components';

interface IPhoneDeleteComponentProps {
  onClick: () => void;
  onCancel: () => void;
}

export const PhoneDeleteComponent = (props: IPhoneDeleteComponentProps) => {
  return (
    <>
      <Title>Delete phone</Title>
      <Text>Are you sure?</Text>
      <Stack>
        <Button variant="outline" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button onClick={props.onClick}>Delete</Button>
      </Stack>
    </>
  );
};
