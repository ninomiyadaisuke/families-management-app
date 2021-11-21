import { VFC, memo } from 'react';

type Props = {
  onClick: () => void;
  label: string;
  type: 'file' | 'button';
  buttonType: 'submit' | 'upload';
};

const UploadButton: VFC<Props> = memo((props) => {
  const { label, buttonType, type, onClick } = props;

  return (
    <label htmlFor="id">
      <input id="id" type={type} hidden />
      test
    </label>
  );
});

export default UploadButton;
