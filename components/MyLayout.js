import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
};

/*

/* Method 1 of creating a Layout Component - Layout as an HOC */
/**
const WithLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  );
};

export default WithLayout;
**/

/* Method 2 of creating a Layout Component - Page content as a prop */
/**
const Layout = props => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      {props.content}
    </div>
  );
};

export default Layout;
**/

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
