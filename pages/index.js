import Layout from '../components/MyLayout';
import Link from 'next/Link';
import fetch from 'isomorphic-unfetch';

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
    return <Layout content={indexPageContent} />;
  };
*/

/* From Lesson 3: Create Dynamic Pages */
/**
export default function Blog () {
  return (
    <Layout>
      <h1>Lesson 3 - Creating Dynamic Content</h1>
      <h2>(Blog Example)</h2>
      <ul>
        <PostLink title="Hello Next.js" /> 
        <PostLink title="Learn Next.js is cool" /> 
        <PostLink title="Deploying Next.js" /> 
      </ul>
  </Layout>
  );
};
**/

/* from Lesson 4: Clean URLs with Dynamic Routing */
/** 
const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>Lesson 4 - Clean URLs with Dynamic Routing</h1>
      <h2>(Still using the Blog Example)</h2>
      <ul>
        <PostLink id="hello-nextjs"/>
        <PostLink id="learn-nextjs"/>
        <PostLink id="deploy-nextjs"/>
      </ul>
    </Layout>
  );
};
**/

const Index = props => (
  <Layout>
    <h1>Batman Televison Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
