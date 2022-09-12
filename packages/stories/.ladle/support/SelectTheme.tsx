import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { NativeSelect } from '@mantine/core';
import { css } from '@emotion/react';

const style = css`
  margin-bottom: 1rem;
`;

interface Props {
  themePacks: Acima.ThemePack[];
  setThemeId: Dispatch<SetStateAction<string>>;
}

const SelectTheme: React.FC<Props> = ({ themePacks, setThemeId }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setThemeId(event.target.value);
  };

  return (
    <NativeSelect
      css={style}
      onChange={handleChange}
      data={themePacks.map(themePack => ({
        value: themePack.id,
        label: themePack.name
      }))}
    />
  );
};

export default SelectTheme;
