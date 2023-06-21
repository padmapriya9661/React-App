import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AddToCart } from "../../Movies/AddToCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function MovieModal(props) {
  const { isOpen, onClose } = props;

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddToCart onClose={onClose} />
        </Box>
      </Modal>
    </div>
  );
}
