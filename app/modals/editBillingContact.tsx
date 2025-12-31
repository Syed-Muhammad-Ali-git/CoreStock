"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const EditBillingContact = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
  );
};

export default EditBillingContact;
