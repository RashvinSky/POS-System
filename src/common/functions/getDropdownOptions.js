export const getDropdownOptions = (data, valueKey, labelKey) => {
  return data?.map((item) => ({
    value: item[valueKey],
    label: item[labelKey],
  }));
};
