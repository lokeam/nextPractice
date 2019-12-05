import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

/* From the Creating Dynamic Pages Lesson: */
/** const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.title}</h1>
      <p>Blog post content here.</p>
    </>
  );
};

const Page = () => (
    <Layout>
      <Content />
    </Layout>
);

export default Page;
**/
