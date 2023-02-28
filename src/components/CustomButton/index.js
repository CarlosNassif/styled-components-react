import Button from '../Button';

const ReverseButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()}></Button>
);

export default ReverseButton;
