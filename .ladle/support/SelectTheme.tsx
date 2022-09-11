import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { NativeSelect } from '@mantine/core';
import styled from '@emotion/styled';

const StyledNativeSelect = styled(NativeSelect)`
  margin-bottom: 1rem;
`;

interface Props {
  themes: any[];
  setThemeId: Dispatch<SetStateAction<string>>;
}

const SelectTheme: React.FC<Props> = ({ themes, setThemeId }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setThemeId(event.target.value);
  };

  return (
    <StyledNativeSelect
      onChange={handleChange}
      data={themes.map(theme => ({ value: theme.id, label: theme.name }))}
    />
  );
};

export default SelectTheme;
