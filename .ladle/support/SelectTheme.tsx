import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { NativeSelect } from '@mantine/core';
import styled from '@emotion/styled';

const StyledNativeSelect = styled(NativeSelect)`
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
    <StyledNativeSelect
      onChange={handleChange}
      data={themePacks.map(themePack => ({
        value: themePack.id,
        label: themePack.name
      }))}
    />
  );
};

export default SelectTheme;
