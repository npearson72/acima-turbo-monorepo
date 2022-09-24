import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { NativeSelect } from '@mantine/core';
import { css } from '@emotion/react';

const style = css`
  margin-bottom: 1rem;
`;

type Props = {
  themes: any;
  setThemeId: Dispatch<SetStateAction<string>>;
};

const SelectTheme = ({ themes, setThemeId }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setThemeId(event.target.value);
  };

  return (
    <NativeSelect
      css={style}
      onChange={handleChange}
      data={themes.map((theme: any) => ({
        value: theme.other.id,
        label: theme.other.name
      }))}
    />
  );
};

export { SelectTheme };
