import { SyntheticEvent, useState } from 'react';

const useForm = <T extends Record<string, string>>(
  initialValues: T
  // eslint-disable-next-line no-unused-vars
): [T, (event: SyntheticEvent) => void, () => void] => {
  const [values, setValues] = useState<T>(initialValues);

  const updateValue = (event: SyntheticEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (!name) return;
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetValues = () => setValues(initialValues);

  return [values, updateValue, resetValues];
};

export default useForm;
