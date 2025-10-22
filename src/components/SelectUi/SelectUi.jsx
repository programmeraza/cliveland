import React, { useEffect, useMemo } from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import './SelectUi.scss'

const SelectUi = () => {
  const { i18n } = useTranslation()

  const options = useMemo(() => [
    { value: 'ru', label: 'РУ' },
    { value: 'en', label: 'EN' },
    { value: 'uz', label: 'UZ' }
  ], [])

  const currentLanguage = options.find(option => option.value === i18n.language) || options[0]

  const handleLanguageChange = (selectedOption) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value)
    }
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng')
    if (savedLanguage && options.some(option => option.value === savedLanguage)) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n, options])

  return (
    <Select
      value={currentLanguage}
      options={options}
      onChange={handleLanguageChange}
      styles={{
        control: (provided) => ({
          ...provided,
          width: '80px',
          minHeight: '28px',
          border: 'none',
          boxShadow: 'none',
          backgroundColor: '#F4FAFF',
          cursor: 'pointer',
          appearance: 'none',
          outline: 'none',
          caretColor: 'transparent',
          '&:focus': { outline: 'none' }
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: '12px 10px'
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          padding: 0
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          padding: 2,
          color: '#1E1E1E',
          paddingRight: '12px'
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        menu: (provided) => ({
          ...provided,
          width: '90px',
          borderRadius: '6px',
          backgroundColor: '#fff',
          zIndex: 10
        }),
        option: (provided, state) => ({
          ...provided,
          padding: '4px 6px',
          backgroundColor: state.isFocused ? '#f0f0f0' : '#fff',
          color: '#000',
          cursor: 'pointer'
        })
      }}
    />
  )
}

export default SelectUi
