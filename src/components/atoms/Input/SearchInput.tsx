import { VFC } from 'react';
import { useController, Control } from 'react-hook-form';

import { IconArea } from 'components/atoms/Images';

import styles from 'styles/components/atoms/search_input.module.scss';

type Props = {
  type?: string;
  placeholder: string;
  name: string;
  control: Control<any, object>;
  errorMessage?: string;
  onClick: (e?: React.BaseSyntheticEvent<object, any, any>) => Promise<void>;
};

const SearchInput: VFC<Props> = (props) => {
  const { placeholder = '', name = '', errorMessage = '', control, onClick } = props;
  const { field } = useController({ name, control });

  return (
    <div className={styles.search}>
      <input type="text" placeholder={placeholder} {...field} />
      <div className={styles.search__icon} onClick={onClick}>
        <IconArea path={'/search_icon.png'} height={48} width={48} />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SearchInput;
