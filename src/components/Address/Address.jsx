import React from 'react';
import { useTranslation } from 'react-i18next';

function Address() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="title title--green title--left">{t('contactPage.contactUsTitle')}</h2>
      <p>
        <b>Peercoin Foundation</b>
        <br />
        601 SOUTH B STREET
        <br />
        SUITE C
        <br />
        SAN MATEO, CA 94401
        <br />
        United States
        <br />
        <br />
        Entity No. B20250199422
      </p>
    </div>
  );
}

export default Address;
