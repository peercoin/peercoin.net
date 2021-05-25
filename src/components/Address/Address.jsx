import React from 'react';
import { useTranslation } from 'react-i18next';

function Address() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="title title--green title--left">{t('contactPage.contactUsTitle')}</h2>
        <p>
          <b>Stichting Peercoin Foundation</b>
          <br />
          President Kennedylaan 19
          <br />
          2517JK The Hague
          <br />
          {t("foundationPage.addressCountry")}
          <br />
        </p>
    </div>
  );
}

export default Address;
