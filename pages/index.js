import React from 'react'
import Layout from '../components/Layout';
import IntroSection from '../components/IntroSection';
import TeamSection from '../components/TeamSection';
import NewsletterForm from '../components/NewsletterForm';
import BlogSection from '../components/BlogSection';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <Layout title="coinest" description="landing page">
        <IntroSection />
        <TeamSection />
        <NewsletterForm />
        <BlogSection />
        <div>
          Hello World {this.props.userAgent}
        </div>
      </Layout>
    )
  }
}