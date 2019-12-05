import Layout from '../components/MyLayout';

/* Method 1 of creating a Layout Component - Layout as an HOC */
/*
  import withLayout from '../components/MyLayout';

  const Page = () => <p>Hello Next.js</p>

  export default withLayout(Page);
*/

/* Method 2 of creating a Layout Component - Page content as a prop */
/*

  const indexPageContent = <p>Hello Next.js</p>;

  export default function Index() {
    return <Layout content={indexPageContent} />
  };
*/

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
  </Layout>
);

export default Index;
