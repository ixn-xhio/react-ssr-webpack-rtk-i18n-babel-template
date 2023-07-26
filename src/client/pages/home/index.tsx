import React from 'react';
import ErrorBoundary from '../../components/shared/error';
import { Helmet } from 'react-helmet';
import { useAppSelector, userSelector } from '../../services/hooks';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { entities } = useAppSelector(userSelector);
  const { t } = useTranslation();

  return (
    <ErrorBoundary>
      <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home page description" />
      </Helmet>
      <div>
        <h1>{t("home_title", { ns: 'home' })}</h1>
        {entities.map((el: any) => {
          return (
            <p key={`el-${el.name}`}>
              {el.name}
            </p>
          )
        })}
      </div>
    </ErrorBoundary>
  );
};
export default Home;