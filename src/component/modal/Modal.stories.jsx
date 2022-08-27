import Modal from "./Modal";

import "./Modal.stories.css";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <div class="modal"></div>
  </Modal>
);

export const Primary = Template.bind({});

Primary.args = {
  opened: true,
  handleOpen: () => {},
};
