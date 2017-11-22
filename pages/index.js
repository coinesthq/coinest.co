import React from 'react';
import Link from 'next/link';
import { translate } from 'react-i18next';
import i18n from '../i18n';

import Layout from '../components/Layout';
import IntroSection from '../components/IntroSection';
import TeamSection from '../components/TeamSection';
import NewsletterForm from '../components/NewsletterForm';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

function Home({ t, initialI18nStore }) {
  return (
    <Layout title="coinest" description="landing page">
      <IntroSection t={t} />
      <TeamSection t={t} />
      <NewsletterForm t={t} />
      <BlogSection t={t} />
      <Footer t={t} />
    </Layout>
  );
}

const Extended = translate(['home', 'common'], { i18n, wait: process.browser })(Home);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['home', 'common']);
  return {};
};

export default Extended;
