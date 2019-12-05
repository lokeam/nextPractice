import Layout from '../components/MyLayout';

/* Method 1 of creating a Layout Component - Layout as an HOC */
/**
  import WithLayout from '../components/MyLayout';

  const Page = () => <p>Behold, we have an about page</p>;

  export default withLayout(Page);
**/

/* Method 2 of creating a Layout Component - Page content as a prop */
/*

  const aboutPageContent = <p>Behold, we have an about page</p>

  export default function About() {
    return <Layout content={aboutPageContent} />;
  };
*/

export default function About() {
  return (
    <Layout>
      <p>Behold, we have an about page</p>
    </Layout>
  );
};