import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Branch from '../components/Branch/Branch';
import Position from '../components/Position/Position';
import Up from '../components/Up/Up';
import { useTranslation } from 'react-i18next';
import Operation from '../assets/img/operation.jpg'
const defaultBackground = Operation;

const ChevronPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const selectedDepartment = location.state?.selectedDepartment || '';
  const apiCategory = location.state?.apiCategory;

  const branchTitle = selectedDepartment || t('pages.chevron.defaultTitle');
  const branchDescription =
    selectedDepartment
      ? `${t('pages.chevron.descriptionPrefix')} ${selectedDepartment.toLowerCase()}.`
      : t('pages.chevron.defaultDescription');

  return (
    <>
      <Header />
      <Branch
        title={branchTitle}
        description={branchDescription}
        backgroundImage={defaultBackground}
      />
      <Position selectedDepartment={selectedDepartment}  apiCategory={apiCategory} />
      <Footer />
      <Up />
    </>
  );
};

export default ChevronPage;
